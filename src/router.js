import {createRouter, createWebHistory} from 'vue-router';
import Calendar from "./pages/Calendar";
import Home from "./pages/Home";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/calendar', component: Calendar},
    ]
});
