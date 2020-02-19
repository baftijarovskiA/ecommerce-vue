<template>
    <div>
        <EditPost v-if="authorized" v-bind:post="post" />
        <h3 v-text="post.title"></h3>
        <hr/>
        <div class="row">
            <div class="col-md-6">
                <img :src="'http://localhost:8000/storage/covers/'+post.cover_image" alt="post picture" class="w-100 mb-2"/>
                <small v-text="post.updated_at"></small><br/>
                <button v-if="authorized" @click="deletePost(post.id)" class="btn btn-danger btn-sm">Delete</button>
            </div>
            <div class="col-md-6">
                <div v-html="post.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import EditPost from "./EditPost";
    export default {
        name: "BlogPreview",
        components: {EditPost},
        data(){
            return{
                user: null,
                authorized: false,
                post:{}
            }
        },
        methods:{
            getSlug: function () {
                let postSlug = this.$route.params.slug;
                axios({
                    method:'get',
                    url:`http://localhost:8000/api/posts/${postSlug}`
                })
                .then(res => {
                    this.post = res.data;
                }).catch(err=>console.log(err.response.data));
            },
            deletePost: function (id) {
                console.log(id);
                axios({
                    method:'put',
                    url:`http://localhost:8000/api/posts/${id}`,
                    headers: {'Authorization': 'Bearer '+localStorage.getItem("_session")}
                })
                .then(res => {console.log(res); window.location="/blog"; })
                .catch(err => console.log(err.response.data));
            }
        },
        created: function () {
            this.getSlug();
            let user = JSON.parse(localStorage.getItem('_user')) || null;
            if (user != null){
                user.roles.filter(role => {
                    if (role === "manager" || role === "admin"){
                        this.authorized = true;
                    }
                });
            }
        }
    }
</script>

<style scoped>

</style>