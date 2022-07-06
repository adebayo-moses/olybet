<template>
  <table cellspacing="0" cellpadding="0">
    <thead>
      <tr class="border-t-2 border-b-2 border-gray h-10">
        <th class="uppercase text-xs text-left w-20percent">Date</th>
        <th class="uppercase text-xs text-left w-30percent">Type</th>
        <th class="uppercase text-xs text-right w-11percent">Stake, €</th>
        <th class="uppercase text-xs text-right w-11percent">Odds</th>
        <th class="uppercase text-xs text-right w-15percent">
          Possible win, €
        </th>
        <th class="uppercase text-xs text-left w-11percent">
          <span class="ml-8">Status</span>
        </th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(listItem, index) in list"
        :key="listItem.id"
        class="border-b-2 border-gray"
      >
        <td>
          <div class="flex flex-col">
            <div class="white-cell">
              {{ listItem.betDate }} {{ listItem.betTime }}
            </div>
            <div v-if="openedListItemIndex === index" class="gray-cell">
              {{ listItem.eventDate }} {{ listItem.eventTime }}
            </div>
          </div>
        </td>
        <td>
          <div class="flex flex-col">
            <div class="white-cell">
              {{ listItem.betTypeLabel }}
            </div>
            <div v-if="openedListItemIndex === index" class="gray-cell">
              <div class="flex flex-col justify-center mr-5 w-70percent">
                <span class="font-bold whitespace-no-wrap leading-none">{{
                  listItem.eventName
                }}</span>
                <span class="leading-none">{{ listItem.sport }}</span>
              </div>
              <div class="flex flex-col justify-center w-30percent">
                <span class="font-bold leading-none">{{
                  listItem.betObject
                }}</span>
                <span class="leading-none">{{ listItem.betGuess }}</span>
              </div>
            </div>
          </div>
        </td>
        <td class="text-right">
          <div class="flex flex-col">
            <div class="white-cell justify-end">
              {{ listItem.stake }}
            </div>
            <div v-if="openedListItemIndex === index" class="gray-cell"></div>
          </div>
        </td>
        <td class="text-right">
          <div class="flex flex-col">
            <div class="white-cell justify-end">
              {{ listItem.odds }}
            </div>
            <div
              v-if="openedListItemIndex === index"
              class="gray-cell justify-end"
            >
              {{ listItem.odds }}
            </div>
          </div>
        </td>
        <td class="text-right">
          <div class="flex flex-col">
            <div class="white-cell justify-end">
              {{ listItem.possibleWin }}
            </div>
            <div v-if="openedListItemIndex === index" class="gray-cell"></div>
          </div>
        </td>
        <td>
          <div class="flex flex-col">
            <div class="white-cell">
              <span
                class="ml-8"
                :class="listItem.status === 'won' && 'text-green'"
              >
                {{ listItem.status }}
              </span>
            </div>
            <div v-if="openedListItemIndex === index" class="gray-cell"></div>
          </div>
        </td>
        <td>
          <div class="flex flex-col">
            <div class="white-cell">
              <button class="text-blue" @click="toggleListItem(index)">
                {{ openedListItemIndex === index ? "Close" : "Open" }}
              </button>
            </div>
            <div v-if="openedListItemIndex === index" class="gray-cell"></div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "SportBettingsListLarge",
  props: {
    list: Array,
  },
  data: () => ({
    openedListItemIndex: null,
  }),
  methods: {
    toggleListItem(itemIndex) {
      if (this.openedListItemIndex === itemIndex) {
        this.openedListItemIndex = null;
      } else {
        this.openedListItemIndex = itemIndex;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/index.scss";

.white-cell {
  @apply h-10 flex items-center;
}

.gray-cell {
  @extend .bg-gray;
  @apply h-12 flex items-center text-sm mb-2;
}

.w-20percent {
  width: 20%;
}
.w-30percent {
  width: 30%;
}
.w-11percent {
  width: 11%;
}
.w-15percent {
  width: 15%;
}
.w-70percent {
  width: 70%;
}
.w-30percent {
  width: 30%;
}
</style>
