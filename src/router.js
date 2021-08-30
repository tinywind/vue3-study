import {createRouter, createWebHistory} from 'vue-router'
import Calendar from "@/pages/Calendar"
import Home from "@/pages/Home"
import Markdown from "@/pages/Markdown"
import Slider from "@/pages/Slider";
import Calculator from "@/pages/Calculator";
import ReusableModal from "@/pages/ReusableModal";
import Chat from "@/pages/Chat";
import store from "@/store/index"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/calendar', component: Calendar},
        {path: '/markdown', component: Markdown},
        {path: '/slider', component: Slider},
        {path: '/calculator', component: Calculator},
        {path: '/reusable-modal', component: ReusableModal},
        {
            path: '/chat', component: Chat,
            meta: {middleware: 'auth'},
        },
    ]
})
export default router

router.beforeEach((to, from, next) => {
    if (to.meta.middleware) {
        const middleware = require(`./middleware/${to.meta.middleware}`)
        if (middleware)
            return middleware.default(to, from, next, store)
    }

    next()
})
