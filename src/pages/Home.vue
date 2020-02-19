<template>
    <div>
        <Carousel/>
        <hr/>
        <h3>Top Selling</h3>
        <hr/>
        <h3>From Our Blog</h3>
        <Posts v-bind:posts="posts.slice(0,3)"/>
    </div>
</template>

<script>
    import Carousel from "../components/blog/Carousel";
    import Posts from "../components/blog/Posts";
    import axios from 'axios';
    export default {
        name: "Home",
        components: {Posts, Carousel},
        data(){
            return{
                posts:[]
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
            }
        },
        created() {
            this.getPosts();
        }
    }
</script>

<style scoped>

</style>