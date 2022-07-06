<template>
  <div>
    <div
      class="rounded-full bg-yellow font-bold relative text-black"
      :style="{
        width: size * 1.25 + 'rem',
        minWidth: size * 1.25 + 'rem',
        height: size * 1.25 + 'rem',
        minHeight: size * 1.25 + 'rem',
      }"
    >
      <span
        class="absolute number-position"
        :style="{
          left: size * 0.4 + 'rem',
          fontSize: size * 0.8 + 'rem',
        }"
        >{{ notifications }}</span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseBadge",
  props: {
    notifications: Number,
    size: Number,
  },
};
</script>

<style scoped>
.bg-yellow {
  background-color: #ffe600;
}
</style>
