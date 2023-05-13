<script setup>
import Checkbox from "@/components/Checkbox/Checkbox.vue";

const emits = defineEmits(["update:value"]);
const props = defineProps({
  value: {
    type: Array,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  options: {
    type: Array,
    required: true,
    validator: (value) => {
      const hasNameKey = value.every((option) =>
        Object.keys(option).includes("name")
      );
      const hasIdKey = value.every((option) =>
        Object.keys(option).includes("id")
      );
      const hasValueKey = value.every((option) =>
        Object.keys(option).includes("value")
      );
      return hasNameKey && hasIdKey && hasValueKey;
    },
  },
});

const check = (params) => {
  let updateValue = [...props.value];
  if (params.checked) {
    updateValue.push(params.optionId);
  } else {
    updateValue = updateValue.filter((id) => params.optionId !== id);
  }
  emits("update:value", updateValue);
};
</script>

<template>
  <div v-for="option in options" :key="option.id">
    <checkbox
      :label="option.name"
      :id="option.id"
      :name="name"
      :value="option.value"
      :checked="value.includes(option.id)"
      group
      @updateCheckboxGroup="check"
    />
  </div>
</template>

<style lang="scss" scoped></style>
