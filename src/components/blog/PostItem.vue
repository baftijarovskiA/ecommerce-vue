<template>
    <div class="card">
        <img :src="'http://localhost:8000/storage/covers/'+post.cover_image" alt="post one" class="w-100 mb-2"/>
        <div class="p-2">
            <h5 v-text="post.title"></h5><hr/>
            <p v-html="post.content" v-if="post.content.length < 100"></p>
            <p v-html="post.content.slice(0, 100) + ' ...'" v-else></p>
            <router-link :to="'/blog/'+post.slug" class="btn btn-secondary">Read more</router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogItem",
        props: ['post'],
        data(){
            return{

            }
        }
    }
</script>

<style scoped>

</style>