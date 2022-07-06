<template>
  <div class="relative h-10">
    <span class="uppercase absolute left-3 top-1 text-2xs z-0">
      {{ label }}
    </span>
    <date-picker
      @input="$emit('input', $event)"
      :value="value"
      class="w-full h-full"
      inputClass="border-2 rounded-lg px-3 pt-3 pb-1 relative z-10 bg-transparent w-full h-full"
    />
  </div>
</template>

<script>
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  name: "BaseDatePicker",
  props: {
    label: String,
    value: Date,
  },
  components: {
    DatePicker,
  },
};
</script>
