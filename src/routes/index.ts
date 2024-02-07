import { createRouter, createWebHistory } from "vue-router";
import AuthMiddleware from "./middlewares/AuthMiddleware";
import participanteRoutes from "./participante";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("../layouts/AppLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("../pages/HomePage.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          component: () => import("../pages/NotFoundPage.vue"),
          name: "notfounded",
          meta: {
            mustAuth: false,
            key: "notfound",
          },
        },
        ...participanteRoutes,
      ],
    },
    {
      path: "/auth/login",
      name: "login",
      component: () => import("../pages/auth/LoginPage.vue"),
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!to.fullPath.includes("auth") && !AuthMiddleware.isAuth()) {
    return next("/auth/login");
  } else if (to.fullPath.includes("auth") && AuthMiddleware.isAuth()) {
    return next("/");
  } else {
    return next();
  }
});

export default router;
