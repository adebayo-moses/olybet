<template>
  <div>
    <section
      v-for="(listItem, index) in list"
      :key="listItem.id"
      class="border-gray border-t-2 p-3"
    >
      <ul>
        <li class="flex justify-between">
          <span class="uppercase font-bold">Date</span>
          <span class="text-left"
            >{{ listItem.betDate }} {{ listItem.betTime }}</span
          >
        </li>
        <li class="flex justify-between">
          <span class="uppercase font-bold">Type</span>
          <span class="text-left">{{ listItem.betType }}</span>
        </li>
        <li class="flex justify-between">
          <span class="uppercase font-bold">Stake, €</span>
          <span class="text-left">{{ listItem.stake }}</span>
        </li>
        <li class="flex justify-between">
          <span class="uppercase font-bold">Odds</span>
          <span class="text-left">{{ listItem.odds }}</span>
        </li>
        <li class="flex justify-between">
          <span class="uppercase font-bold">Possible win, €</span>
          <span class="text-left">{{ listItem.possibleWin }}</span>
        </li>
        <li class="flex justify-between">
          <span class="uppercase font-bold">Status</span>
          <span
            class="text-left"
            :class="listItem.status === 'won' && 'text-green'"
          >
            {{ listItem.status }}</span
          >
        </li>
        <li class="w-full text-right">
          <button class="text-left text-blue" @click="toggleListItem(index)">
            {{ openedListItemIndex === index ? "Close" : "Open" }}
          </button>
        </li>
      </ul>
      <div
        v-if="index === openedListItemIndex"
        class="bg-gray flex flex-col p-3 text-sm leading-none"
      >
        <span>{{ listItem.eventDate }} {{ listItem.eventTime }}</span>
        <div class="flex flex-col mt-2">
          <span class="font-bold">{{ listItem.eventName }}</span>
          <span>{{ listItem.sport }}</span>
        </div>
        <div class="flex justify-between mt-2">
          <div class="flex flex-col">
            <span class="font-bold">{{ listItem.betObject }}</span>
            <span>{{ listItem.betGuess }}</span>
          </div>
          <div class="flex flex-col text-right">
            <span class="font-bold">Odds</span>
            <span>{{ listItem.odds }}</span>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "SportBettingsListSmall",
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

<style scoped></style>
