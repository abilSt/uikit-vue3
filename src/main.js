import { createApp } from "vue";
import App from "./App.vue";
import router from "@/router";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { regularIcons } from "@/icons";

library.add(regularIcons);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount("#app");
