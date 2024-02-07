import { RouteRecordRaw } from "vue-router";

const participanteRoutes: RouteRecordRaw[] = [
  {
    path: "/profile",
    component: () => import("../pages/profile/ProfileIndex.vue"),
  },
];

export default participanteRoutes;
