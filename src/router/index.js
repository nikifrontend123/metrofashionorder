import { createRouter, createWebHistory } from "vue-router";
import DashBoard from "../components/Dashboard/DashBoard.vue"
import ComingPage from "../components/Order/ComingPage.vue"
import ReadyPage from "../components/Order/ReadyPage.vue"
import RunningPage from "../components/Order/RunningPage.vue"
import CompletePage from "../components/Order/CompletePage.vue"
import OrderPage from "../components/Order/OrderPage.vue"
import OrderDetail from "../components/Order/OrderDetail.vue"
import FabricatorsPage from "../components/Fabricators/FabricatorsPage.vue"
import FabReady from "../components/Fabricators/FabReady.vue"
import FabComingPage from "../components/Fabricators/FabComingPage.vue"
import FabReceivedPage from "../components/Fabricators/FabReceivedPage.vue"
import FabNew from "../components/Fabricators/FabNew.vue"
import FabAll from "../components/Fabricators/FabAll.vue"
const routes = [
  {
    path: "/",
    name: "DashBoard",
    component: DashBoard,
  },
  {
    path: "/FabricatorsPage",
    name: "FabricatorsPage",
    component: FabricatorsPage,
  },
  {
    path: "/FabComingPage/:fabricatorId",
    name: "FabComingPage",
    component: FabComingPage,
  },
  {
    path: "/FabReceivedPage/:fabricatorId",
    name: "FabReceivedPage",
    component: FabReceivedPage,
  },
  {
    path: "/ComingPage",
    name: "ComingPage",
    component: ComingPage,
  },
  {
    path: "/OrderPage",
    name: "OrderPage",
    component: OrderPage,
  },
  {
    path: "/OrderDetail",
    name: "OrderDetail",
    component: OrderDetail,
  },
  {
    path: "/ReadyPage",
    name: "ReadyPage",
    component: ReadyPage,
  },
  {
    path: "/RunningPage",
    name: "RunningPage",
    component: RunningPage,
  },
  {
    path: "/CompletePage",
    name: "CompletePage",
    component: CompletePage,
  },
  {
    path: "/FabNew/:fabricatorId",
    name: "FabNew",
    component: FabNew,
  },
  {
    path: "/FabReady/:fabricatorId",
    name: "FabReady",
    component: FabReady,
  },
  {
    path: "/FabAll/:fabricatorId",
    name: "FabAll",
    component: FabAll,
  },
  
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
