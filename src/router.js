import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/Home";
import Account from "./pages/Account";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import BlogPreview from "./components/blog/BlogPreview";

Vue.use(Router);

let router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/account',
            name: 'account',
            component: Account
        },
        {
            path: '/blog',
            name: 'blog',
            component: Blog
        },
        {
            path: '/blog/:slug',
            name: 'BlogPreview',
            component: BlogPreview
        },
        {
            path: '/cart',
            name: 'cart',
            component: Cart
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        // {
        //     path: '/secure',
        //     name: 'secure',
        //     component: Secure,
        //     meta: {
        //         requiresAuth: true
        //     }
        // }
    ]
});

export default router;