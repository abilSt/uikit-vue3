<script setup>
import { ref } from "vue";
import Tabs from "@/components/Tabs.vue";

const tabs = [
  { name: "About", label: "О проекте" },
  { name: "Vue", label: "Про Vue" },
  { name: "React", label: "Про React" },
];

const selectedTab = ref("Vue");

const changeTab = (tabName) => {
  selectedTab.value = tabName;
};
</script>

<template>
  <h1 class="heading-1">Tabs</h1>
  <Tabs :names="tabs" :selectedTab="selectedTab" @changeTab="changeTab">
    <div v-if="selectedTab === 'About'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur at accusamus quaerat
      excepturi. Perferendis ea voluptate tempora dicta dolores recusandae? Cupiditate, mollitia.
      Distinctio consequuntur maiores nihil unde necessitatibus pariatur tenetur magni doloribus
      nisi totam incidunt laborum quae, tempore iusto voluptatum tempora similique provident minima
      labore sed harum aliquam itaque cupiditate! Praesentium hic, veniam atque culpa aut suscipit
      nihil?
    </div>
    <div v-if="selectedTab === 'Vue'">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, nemo deleniti! Laborum,
      recusandae dicta?
    </div>
    <div v-if="selectedTab === 'React'">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ipsum corrupti velit odio
      delectus at, nihil libero laborum dolorum sit eveniet repudiandae sunt quas fugiat officiis
      molestias! Necessitatibus, dolore saepe?
    </div>
  </Tabs>
</template>
