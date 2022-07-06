<template>
  <nav class="bg-red h-12 lg:h-auto text-white">
    <hide-at :breakpoints="{ small: 1024 }" breakpoint="mediumAndAbove">
      <div class="w-full h-full items-center flex">
        <button class="btn border-r-2">
          <img src="@/assets/more.svg" alt="open menu" class="h-4" />
        </button>
        <img
          src="@/assets/olybet-logo.svg"
          alt="olybet-logo"
          class="flex-auto"
        />
        <button class="btn border-l-2">
          <img src="@/assets/messages.svg" alt="messages" class="h-4" />
        </button>
        <button class="btn border-l-2 relative">
          <img src="@/assets/person.svg" alt="profile" class="h-4" />
          <div class="relative w-full h-full">
            <div class="sum">
              € 45.05
            </div>
          </div>
          <base-badge
            :notifications="2"
            :size="0.7"
            class="absolute badge-position-at-profile"
          />
        </button>
      </div>
    </hide-at>
    <show-at :breakpoints="{ small: 1024 }" breakpoint="mediumAndAbove">
      <div class="w-full h-full flex flex-col">
        <div class="h-10 border-b-2 border-light-red flex justify-end">
          <button class="btn btn-short border-l-2 arrow">
            <img src="@/assets/person.svg" alt="profile" class="h-4" />
            <img src="@/assets/arrow-down.svg" alt="more" class="h-1 ml-2" />
          </button>
          <button class="btn btn-short border-l-2 arrow relative">
            <img src="@/assets/bell.svg" alt="info" class="h-4" />
            <base-badge
              :notifications="2"
              :size="0.7"
              class="absolute badge-position"
            />
          </button>
          <button class="btn btn-short border-l-2 arrow">
            <img src="@/assets/wallet.svg" alt="wallet" class="h-4" />
            <span class="ml-2 text-sm">€ 45.05</span>
            <img src="@/assets/arrow-down.svg" alt="more" class="h-1 ml-2" />
          </button>
          <button class="btn btn-short border-l-2 arrow">
            <img src="@/assets/candy.svg" alt="bonus" class="h-5" />
            <span class="ml-2 text-sm">€ 25.00</span>
            <img src="@/assets/arrow-down.svg" alt="more" class="h-1 ml-2" />
          </button>
          <button class="btn bg-green font-semibold">DEPOSIT</button>
          <button class="btn btn-short arrow">
            <img src="@/assets/english-flag.svg" alt="language" class="h-6" />
            <img src="@/assets/arrow-down.svg" alt="more" class="h-1 ml-2" />
          </button>
        </div>
        <div class="h-16 flex justify-start items-center">
          <img
            src="@/assets/olybet-logo.svg"
            alt="olybet-logo"
            class="h-12 ml-5"
          />
          <a
            v-for="page in pages"
            :key="page.title"
            class="btn btn-short flex flex-col items-center cursor-pointer"
          >
            <img
              :src="
                require.context(
                  '@/assets/',
                  false,
                  /\.svg$/
                )('./' + page.imageTitle)
              "
              :alt="page.title"
              class="h-6 invert-color"
            />
            <span class="text-lg font-hairline">{{ page.title }}</span>
          </a>
        </div>
      </div>
    </show-at>
  </nav>
</template>

<script>
import { showAt, hideAt } from "vue-breakpoints";
import BaseBadge from "./base/BaseBadge.vue";

export default {
  name: "TopMenu",

  /*
   * show-at & hide-at are used instead of Tailwind's .hidden class,
   * because with former method all elements would still get rendered and thus consume memory.
   */
  components: {
    showAt,
    hideAt,
    BaseBadge,
  },
  data: () => ({
    pages: [
      {
        title: "Sports",
        imageTitle: "football-shoe.svg",
      },
      {
        title: "In-Play",
        imageTitle: "football.svg",
      },
      {
        title: "Casino",
        imageTitle: "casino.svg",
      },
      {
        title: "Betgames",
        imageTitle: "dice.svg",
      },
      {
        title: "Campaigns",
        imageTitle: "present.svg",
      },
      {
        title: "Betting shops",
        imageTitle: "location-mark.svg",
      },
    ],
  }),
};
</script>

<style scoped>
.btn {
  @apply flex justify-center items-center p-5 border-solid border-light-red h-full;
}
.btn-short {
  @apply py-0;
}
.arrow::after {
  background-image: image("@/assets/arrow-down.svg");
}
.border-light-red {
  border-color: #e76377;
}
.sum {
  width: 3rem;
  bottom: -1rem;
  left: -2rem;
  line-height: 0.6rem;
  font-size: 0.6rem;
  @apply absolute text-center;
}
.invert-color {
  filter: invert(1);
}
.badge-position {
  left: 2rem;
  bottom: 1.2rem;
}
.badge-position-at-profile {
  left: 2rem;
  bottom: 1.5rem;
}
</style>
