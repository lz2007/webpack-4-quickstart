import Vue from 'vue';
import store from './store';

import {
    Button,
    Select,
    Form,
    FormItem,
    Input,
    Loading,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Row,
    Col,
    Radio,
    RadioGroup,
    RadioButton,
    Tooltip,
    Breadcrumb,
    BreadcrumbItem,
    Avatar,
    Dropdown,
    DropdownMenu,
    DropdownItem,
} from 'element-ui';

import App from './App.vue';

import VueRouter from 'vue-router';
import routes from './router/index';

// fade/zoom 等
import "element-ui/lib/theme-chalk/base.css";

Vue.config.productionTip = false;

const routerPush = VueRouter.prototype.push;

VueRouter.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}

Vue.use(VueRouter);
Vue.use(Button)
Vue.use(Select)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Loading.directive)
Vue.use(Menu);
Vue.use(Submenu);
Vue.use(MenuItem);
Vue.use(MenuItemGroup);
Vue.use(Container);
Vue.use(Header);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Row);
Vue.use(Col);
Vue.use(Radio);
Vue.use(RadioGroup);
Vue.use(RadioButton);
Vue.use(Tooltip);
Vue.use(Breadcrumb);
Vue.use(BreadcrumbItem);
Vue.use(Avatar);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);

const router = new VueRouter({
    routes
});

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')