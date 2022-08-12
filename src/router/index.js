import { createRouter, createWebHistory } from "vue-router";
import Home from "../view/Home.vue";
import Login from "../view/Login.vue";
import Signup from "../view/Signup.vue";
const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/Login",
        name: "Login",
        component: Login,
    },
    {
        path: "/Signup",
        name: "Signup",
        component: Signup,
    },
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;