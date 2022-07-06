<template>
  <div>
    <div class="flex w-full flex-col lg:flex-row">
      <base-select
        label="Type"
        :options="typeOptions"
        v-model="phasingFilters.type"
        class="mr-3 mb-3 w-full contstrained-select-width"
      />
      <base-select
        label="Status"
        :options="statusOptions"
        v-model="phasingFilters.status"
        class="mr-3 mb-3 w-full contstrained-select-width"
      />
      <div class="flex contstrained-date-pickers-width">
        <base-date-picker
          v-model="phasingFilters.dateFrom"
          label="From"
          class="mr-3 mb-3 w-full"
        />
        <base-date-picker
          v-model="phasingFilters.dateTo"
          label="To"
          class=" lg:mr-3 mb-3 w-full"
        />
      </div>
      <button
        class="border-2 rounded-md border-green text-green font-bold lg:mr-3 mb-3 px-4 uppercase h-10"
        @click="filter"
      >
        Filter
      </button>
      <button @click="resetFilters" class="text-blue mb-3 h-10">Clear</button>
    </div>
    <hide-at :breakpoints="{ small: 1024 }" breakpoint="mediumAndAbove">
      <sport-bettings-list-small :list="sportsBettingsListFiltered" />
    </hide-at>
    <show-at :breakpoints="{ small: 1024 }" breakpoint="mediumAndAbove">
      <sport-bettings-list-large
        :list="sportsBettingsListFiltered"
        class="mt-3"
      />
    </show-at>
  </div>
</template>

<script>
import BaseSelect from "../../base/BaseSelect.vue";
import BaseDatePicker from "../../base/BaseDatePicker.vue";
import SportBettingsListLarge from "./SportBettingsListLarge.vue";
import SportBettingsListSmall from "./SportBettingsListSmall.vue";
import sportsBettingsHistory from "./sportsBettingsHistory.json";
import { showAt, hideAt } from "vue-breakpoints";

const typeOptions = {
  all: { value: "all", label: "All" },
  single: { value: "single", label: "Single" },
};

const statusOptions = {
  all: { value: "all", label: "All" },
  opened: { value: "opened", label: "Opened" },
  won: { value: "won", label: "Won" },
  lost: { value: "lost", label: "Lost" },
};

export default {
  name: "SportBettingsTab",

  /*
   * show-at & hide-at are used instead of Tailwind's .hidden class,
   * because with former method all elements would still get rendered and thus consume memory.
   */
  components: {
    showAt,
    hideAt,
    BaseSelect,
    BaseDatePicker,
    SportBettingsListLarge,
    SportBettingsListSmall,
  },
  beforeCreate() {
    this.typeOptions = typeOptions;
    this.statusOptions = statusOptions;
    const currentDate = new Date();
    this.defaultDateTo = currentDate; // Today's date
    const dateBefore30Days = new Date();
    dateBefore30Days.setDate(currentDate.getDate() - 30);
    this.defaultDateFrom = dateBefore30Days; // Date before 30 days
  },
  data() {
    return {
      phasingFilters: this.getDefaultFilters(),
      appliedFilters: this.getDefaultFilters(),
    };
  },
  computed: {
    sportsBettingsListFiltered() {
      return sportsBettingsHistory
        .filter(
          (item) =>
            (this.appliedFilters.type === typeOptions.all.value ||
              item.betType === this.appliedFilters.type) &&
            (this.appliedFilters.status === statusOptions.all.value ||
              item.status === this.appliedFilters.status) &&
            this.appliedFilters.dateFrom.getTime() <=
              new Date(item.betDate).getTime() &&
            this.appliedFilters.dateTo.getTime() >=
              new Date(item.betDate).getTime()
        )
        .map((item) => ({
          ...item,
          stake: this.getWith2DecimalPlaces(item.stake),
          odds: this.getWith2DecimalPlaces(item.odds),
          possibleWin: this.getWith2DecimalPlaces(item.possibleWin),
          betType: Object.values(typeOptions).find(
            (typeOption) => typeOption.value === item.betType
          ).label,
        }));
    },
  },
  methods: {
    filter() {
      this.appliedFilters = {
        ...this.phasingFilters,
      };
    },
    resetFilters() {
      this.phasingFilters = this.getDefaultFilters();
      this.appliedFilters = this.getDefaultFilters();
    },
    getDefaultFilters() {
      return {
        type: this.typeOptions.all.value,
        status: this.statusOptions.all.value,
        dateFrom: this.defaultDateFrom,
        dateTo: this.defaultDateTo,
      };
    },
    getWith2DecimalPlaces: (number) => Number(number).toFixed(2),
  },
};
</script>

<style scoped>
.text-blue {
  color: #2697f0;
}

@media only screen and (min-width: 1024px) {
  .contstrained-select-width {
    max-width: 12rem;
    width: 20%;
  }
  .contstrained-date-pickers-width {
    max-width: 25rem;
    width: 40%;
  }
}
</style>
