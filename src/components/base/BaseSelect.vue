<template>
  <div class="relative h-10">
    <label
      :for="fullLabel"
      class="uppercase absolute left-3 top-1 text-2xs z-0"
    >
      {{ label }}
    </label>
    <select
      @change="$emit('input', $event.target.value)"
      :value="value"
      :name="fullLabel"
      :id="fullLabel"
      class="border-2 rounded-lg px-3 pt-3 pb-1 relative z-10 bg-transparent w-full h-full"
    >
      <option
        v-for="option in options"
        :value="option.value"
        :key="option.value"
        :selected="value === option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: "BaseSelect",
  props: {
    value: String,
    label: String,
    options: Object,
  },
  computed: {
    fullLabel() {
      return this.label + "-select";
    },
  },
};
</script>
