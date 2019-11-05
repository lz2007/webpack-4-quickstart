const Home = () => import('&/home/home.vue');
const Login = () => import('&/login/login.vue');

const routes = [{
        path: '/login',
        component: Login,
        name: 'login',
        // hidden: true
    },
    {
        path: '/home',
        component: Home,
        name: 'home',
        // hidden: true
    }
]



export default routes;