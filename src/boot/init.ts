import { App } from "vue";

import { Router } from "vue-router";
import { authStore } from "../stores/authStore";

const init = (app: App<Element>) => {
  app.config.globalProperties.$auth = authStore();
};

declare module "vue" {
  interface ComponentCustomProperties {
    $auth: any;
    $router: Router;
  }
}
export default init;
