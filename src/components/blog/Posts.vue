<template>
    <div class="row">
        <div v-bind:key="post.id" v-for="post in posts" class="col-md-4 mb-5">
            <PostItem v-bind:post="post" />
        </div>
    </div>
</template>

<script>
    import PostItem from "./PostItem";
    export default {
        name: "Posts",
        props: ['posts'],
        components: {PostItem}
    }
</script>

<style scoped>

</style>