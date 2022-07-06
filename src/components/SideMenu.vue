<template>
  <nav class="min-w-30 w-64 flex flex-col bg-gray">
    <a
      v-for="subpage in subpages"
      :key="subpage.title"
      class="h-12 px-3 py-3 border-gray border-b-2 last:border-b-0 cursor-pointer flex"
    >
      <span class="w-full">{{ subpage.title }}</span>
      <base-badge
        v-if="subpage.numberOfNotifications"
        :notifications="subpage.numberOfNotifications"
        :size="1"
      />
    </a>
  </nav>
</template>

<script>
import BaseBadge from "./base/BaseBadge.vue";

export default {
  name: "SideMenu",
  components: {
    BaseBadge,
  },
  data: () => ({
    subpages: [
      {
        title: "My profile",
        numberOfNotifications: 0,
      },
      {
        title: "Payments history",
        numberOfNotifications: 0,
      },
      {
        title: "Withdraw",
        numberOfNotifications: 0,
      },
      {
        title: "Bettings history",
        numberOfNotifications: 0,
      },
      {
        title: "Active campaigns",
        numberOfNotifications: 1,
      },
      {
        title: "Messages",
        numberOfNotifications: 2,
      },
      {
        title: "Limits",
        numberOfNotifications: 0,
      },
      {
        title: "Promotional code",
        numberOfNotifications: 0,
      },
    ],
  }),
};
</script>

<style scoped>
.min-w-30 {
  min-width: 12rem;
}
</style>
