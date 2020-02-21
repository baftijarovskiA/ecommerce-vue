<template>
    <div>
        <Carousel/>
        <hr/>
        <h3>Top Selling</h3>
        <ProductList v-bind:products="products.slice(0,3)" />
        <hr/>
        <h3>From Our Blog</h3>
        <Posts v-bind:posts="posts.slice(0,3)"/>
    </div>
</template>

<script>
    import Carousel from "../components/blog/Carousel";
    import Posts from "../components/blog/Posts";
    import axios from 'axios';
    import ProductList from "../components/shop/ProductList";
    export default {
        name: "Home",
        components: {ProductList, Posts, Carousel},
        data(){
            return{
                posts:[],
                products: []
            }
        },
        methods:{
            getPosts(){
                axios({
                    method: 'get',
                    url: 'http://localhost:8000/api/posts'
                }).
                then( res => {
                    this.posts = res.data;
                }).catch(err => console.log(err.response.data));
            },
            getProducts: function () {
                axios({
                    method: 'get',
                    url: 'http://localhost:8000/api/product'
                })
                    .then( response => {
                        this.products = response.data.response;
                    })
                    .catch(err => console.log(err));
            }
        },
        created() {
            this.getPosts();
            this.getProducts();
        }
    }
</script>

<style scoped>

</style>