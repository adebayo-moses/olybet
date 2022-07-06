<template>
  <div id="app">
    <top-menu />
    <div class="flex">
      <side-menu class="hidden lg:flex m-3 mr-2" />
      <bettings-history class="mt-6 mx-3" />
    </div>
  </div>
</template>

<script>
import TopMenu from "./components/TopMenu.vue";
import SideMenu from "./components/SideMenu.vue";
import BettingsHistory from "./components/BettingsHistory/BettingsHistory.vue";

export default {
  name: "App",
  components: {
    TopMenu,
    SideMenu,
    BettingsHistory,
  },
};
</script>
