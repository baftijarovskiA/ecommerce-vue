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
    import Profile from "../components/account/profile/Profile";
    export default {
        name: "Blog",
        components: {Posts, ControlPost},
        data(){
            return{
                user: {},
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
            },
            getHeaders: function () {
                let token = localStorage.getItem('_session') || null;
                if (token != null){
                    return {'Authorization': 'Bearer '+ token}
                }
                return null;
            },
            getUser: function () {
                if (Profile.methods.isLogged()){
                    axios({
                        method: 'get',
                        url: 'http://localhost:8000/api/user',
                        headers: this.getHeaders()
                    })
                        .then((response) => {
                            this.user = response.data.user;
                            let roles = response.data.user.role;
                            for (let i=0; i<roles.length; i++){
                                if (roles[i].name !== "user"){
                                    this.authorized = true;
                                }
                            }
                        })
                        .catch(err => console.log(err));
                }
            }
        },
        created: function () {
            this.getData();
            this.getUser();

        }
    }
</script>

<style scoped>

</style>