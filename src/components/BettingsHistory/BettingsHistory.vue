<template>
  <div class="w-full">
    <h1 class="font-bold text-2xl">Bettings history</h1>
    <div class="hidden lg:flex w-full mt-3">
      <button
        v-for="(tabTitle, tabKey) in tabs"
        :key="tabKey"
        :class="
          selectedTab === tabKey
            ? 'text-red border-b-4 border-red'
            : 'border-gray border-b-2'
        "
        class="leading-none px-5 whitespace-no-wrap pb-2"
        @click="selectTab(tabKey)"
      >
        {{ tabTitle }}
      </button>
      <div class="border-b-2 border-gray w-full"></div>
    </div>
    <sport-bettings-tab v-if="selectedTab === SPORTS" class="mt-6" />
  </div>
</template>

<script>
import SportBettingsTab from "./SportBettingsTab/SportBettingsTab.vue";

export default {
  name: "BettingsHistory",
  components: {
    SportBettingsTab,
  },
  beforeCreate() {
    this.SPORTS = "sports";
    this.CASINO = "casino";
    this.VIRTUAL_SPORTS = "virtualSports";
  },
  data() {
    return {
      selectedTab: this.SPORTS,
      tabs: {
        [this.SPORTS]: "Sports",
        [this.CASINO]: "Casino",
        [this.VIRTUAL_SPORTS]: "Virtual Sports",
      },
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    },
  },
};
</script>
