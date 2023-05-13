<script setup>
import { ref } from "vue";
import Checkbox from "@/components/Checkbox/Checkbox.vue";
import CheckboxGroup from "@/components/Checkbox/CheckboxGroup.vue";

const checkboxActive = ref(true);

const checkboxDisabled = ref(true);
const checkboxDisabledChecked = ref(true);

const listOfComponents = ref([
  { name: "Typography", id: "t1", value: "t1" },
  { name: "Button", id: "b1", value: "b1" },
  { name: "Checkbox", id: "c1", value: "c1" },
  { name: "Input", id: "i1", value: "i1" },
  { name: "Table", id: "t2", value: "t2" },
]);
const selectedComponents = ref([]);

const switchProfessional = ref(false);
</script>

<template>
  <h1 class="heading-1">Checkbox</h1>
  <h2 class="heading-2">Checkbox Active</h2>
  <div class="line">
    <checkbox
      label="Checkbox Active"
      id="checkboxActive"
      name="checkboxActive"
      value="I like it"
      v-model:checked="checkboxActive"
    />
  </div>
  <h2 class="heading-2">Checkbox Disabled</h2>
  <div class="line">
    <checkbox
      label="Checkbox Disabled"
      id="checkboxDisabled"
      name="checkboxDisabled"
      value="I like it"
      :disabled="checkboxDisabled"
      v-model:checked="checkboxDisabledChecked"
    />
  </div>
  <h2 class="heading-2">Checkbox Group</h2>
  <div class="line line_block">
    <p>Selected components: {{ selectedComponents }}</p>
    <checkbox-group
      v-model:value="selectedComponents"
      name="Components"
      :options="listOfComponents"
    />
  </div>
  <h2 class="heading-2">Switch</h2>

  <div class="line line_block">
    <p>Switch: {{ switchProfessional }}</p>
    <checkbox
      label="i`m a professional"
      id="switch"
      name="switch"
      value="i`m a professional"
      type="switch"
      v-model:checked="switchProfessional"
    />
  </div>
</template>

<style lang="scss" scoped></style>
