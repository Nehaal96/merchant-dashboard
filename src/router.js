import { createRouter, createWebHistory } from "vue-router";
import { PageViewConstants } from "./utils/helper";
import DashboardPage from "./views/DashboardPage.vue";

const routes = [
  {
    path: "/",
    name: PageViewConstants.PAGE_DASHBOARD,
    component: DashboardPage,
    meta: { transition: "slide-right" },
  },
];

var router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
