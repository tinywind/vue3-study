import {createRouter, createWebHistory} from 'vue-router'
import Calendar from "@/pages/Calendar"
import Home from "@/pages/Home"
import Markdown from "@/pages/Markdown"
import Slider from "@/pages/Slider";
import Calculator from "@/pages/Calculator";

export default createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/calendar', component: Calendar},
        {path: '/markdown', component: Markdown},
        {path: '/slider', component: Slider},
        {path: '/calculator', component: Calculator},
    ]
})
