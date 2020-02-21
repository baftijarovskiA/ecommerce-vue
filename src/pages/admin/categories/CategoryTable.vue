<template>
    <div>
        <CreateCategory /><br/>
        <h3>Categories</h3><hr/>
        <table class="table table-bordered table-striped mt-2">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Available</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="category.id" v-for="category in categories">
                    <CategoryTableItem v-bind:category="category" />
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    import CategoryTableItem from "./CategoryTableItem";
    import CreateCategory from "./CreateCategory";
    export default {
        name: "CategoryTable",
        components: {CreateCategory, CategoryTableItem},
        data(){
            return{
                categories: []
            }
        },
        methods:{
            getCategories: function () {
                axios({
                    method: 'get',
                    url: 'http://localhost:8000/api/category'
                })
                    .then( response => {
                        this.categories = response.data.response;
                    })
                    .catch(err => console.log(err));
            }
        },
        created() {
            this.getCategories();
        }
    }
</script>

<style scoped>

</style>