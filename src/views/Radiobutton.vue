<script setup>
import { ref } from "vue";
import Radiobutton from "@/components/Radiobutton.vue";

const footBallClubs = [
  { name: "CSKA Moscow", id: "f1" },
  { name: "Spartak Moscow", id: "f2" },
  { name: "Real Madrid", id: "f3" },
  { name: "Barcelona", id: "f4" },
];
const selectedCLub = ref("");

const disabledRadio = ref(true);
const disabledRadioChecked = ref(true);
</script>

<template>
  <h1 class="heading-1">Radiobutton</h1>
  <h2 class="heading-2">Basic</h2>
  <div class="line line_block">
    <p>Selected Club: {{ selectedCLub }}</p>
    <div v-for="club in footBallClubs" :key="club.id">
      <radiobutton
        :value="club.name"
        :label="club.name"
        :id="club.id"
        name="club"
        v-model:checkedValue="selectedCLub"
      />
    </div>
  </div>
  <h2 class="heading-2">Disabled</h2>
  <div class="line line_block">
    <radiobutton
      value="Radiobutton Disabled"
      label="Radiobutton Disabled"
      id="Radiobutton Disabled"
      name="Radiobutton Disabled"
      :disabled="disabledRadio"
      v-model:checkedValue="disabledRadioChecked"
    />
  </div>
</template>

<style lang="scss" scoped></style>
