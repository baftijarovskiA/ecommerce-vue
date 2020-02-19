<template>
    <div>
<!--        <Carousel/>-->
        <ControlPost v-if="authorized" />
        <br/>
        <h3>Blog</h3>
        <hr/>
        <Posts v-bind:posts="posts"/>
    </div>
</template>

<script>
    // import Carousel from "../components/blog/Carousel";
    import axios from 'axios';
    import ControlPost from "../components/blog/ControlPost";
    import Posts from "../components/blog/Posts";
    export default {
        name: "Blog",
        components: {Posts, ControlPost},
        data(){
            return{
                authorized: false,
                posts: [],
            }
        },
        methods:{
            getData(){
                axios({
                    method: 'get',
                    url: 'http://localhost:8000/api/posts'
                }).
                    then( res => {
                        this.posts = res.data;

                }).catch(err => console.log(err.response.data));
            }
        },
        created: function () {
            this.getData();
            let user = JSON.parse(localStorage.getItem('_user')) || {};
            user.roles.filter(role => {
                if (role !== "user"){
                    this.authorized = true;
                }
            });
        }
    }
</script>

<style scoped>

</style>