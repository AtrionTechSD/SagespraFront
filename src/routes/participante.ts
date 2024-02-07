import { RouteRecordRaw } from "vue-router";

const participanteRoutes: RouteRecordRaw[] = [
  {
    path: "/participante/profile",
    component: () => import("../pages/profile/ProfileIndex.vue"),
  },
  {
    path: "/participante/ssu/request",
    component: () => import("../pages/ssu/SsuRequest.vue"),
  },
];

export default participanteRoutes;
