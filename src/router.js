import Vue from 'vue'
import Router from 'vue-router'
import Home from "./pages/Home";
import Account from "./pages/Account";
import Blog from "./pages/Blog";
import Cart from "./pages/Cart";
import Shop from "./pages/Shop";
import BlogPreview from "./components/blog/BlogPreview";
import CategoryTable from "./pages/admin/categories/CategoryTable";
import EditCategory from "./pages/admin/categories/EditCategory";
import ProductTable from "./pages/admin/products/ProductTable";

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
        {
            path: '/admin/category',
            name: 'CategoryTable',
            component: CategoryTable
        },
        {
            path: '/admin/category/:id',
            name: 'EditCategory',
            component: EditCategory
        },
        {
            path: '/admin/products',
            name: 'ProductTable',
            component: ProductTable
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