import Home from './components/Home.vue'
import User from './components/User.vue'
import System from './components/System.vue'

export const routes = [
    {
        path:'',
        component: Home,
    },
    {
        path:'/user',
        component: User,
    },
    {
        path:'/system',
        component: System,
    },
];