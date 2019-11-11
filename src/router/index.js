const Login = () => import('&/login/login.vue');
const Content = () => import('&/content/content.vue');
const Home = () => import('&/home/home.vue');
const Search = () => import('&/search/search.vue');
const PersonalCenter = () => import('&/personal-center/personal-center.vue');
const SetUp = () => import('&/set-up/set-up.vue');
const BasicColor = () => import('&/basic-color/basic-color.vue');
const BasicButton = () => import('&/basic-button/basic-button.vue');

const routes = [{
        path: '/',
        component: Login,
        name: '登录',
    },
    {
        path: '/login',
        component: Login,
        name: '登录',
    },
    {
        path: '/content',
        component: Content,
        name: 'content',
        children: [{
                path: 'home',
                component: Home,
                name: '首页'
            },
            {
                path: 'search',
                component: Search,
                name: '查询'
            },
            {
                path: 'personal-center',
                component: PersonalCenter,
                name: '个人中心'
            },
            {
                path: 'set-up',
                component: SetUp,
                name: '设置'
            },
            {
                path: "basic-color",
                name: "Color 色彩",
                component: BasicColor
            }, {
                path: "basic-button",
                name: "Button 按钮",
                component: BasicButton
            }
        ]

    }
]



export default routes;