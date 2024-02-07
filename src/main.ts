import { createApp } from "vue";
import "@/themes/app.css";
import App from "./App.vue";
import router from "./routes";
import { createPinia } from "pinia";
import { authStore } from "./stores/authStore";
import { Icon } from "@iconify/vue";
import init from "./boot/init";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);
app.component("Icon", Icon);
app.config.globalProperties.$auth = authStore();
init(app);
app.use(router);
app.mount("#app");
