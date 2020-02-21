<template>
    <fragment>
        <td v-text="category.name"></td>
        <td><div class="circle green"></div></td>
        <td>
            <router-link :to="'category/'+category.id" class="btn btn-sm btn-success">Edit</router-link>&nbsp;
            <button class="btn btn-sm btn-danger" @click="deleteCategory(category.id)">Delete</button>
        </td>
    </fragment>
</template>

<script>
    import axios from 'axios';
    import Profile from "../../../components/account/profile/Profile";
    export default {
        name: "CategoryTableItem",
        props: ['category'],
        methods:{
            deleteCategory: function (id) {
                axios({
                    method: 'delete',
                    url:`http://localhost:8000/api/category/delete/${id}`,
                    headers: Profile.methods.getHeaders()
                })
                .then(response => {
                    window.alert(response.data.response);
                    window.location.reload();
                })
                .catch(err => console.log(err));
            }
        }
    }
</script>

<style scoped>
    .circle{
        width: 20px;
        height: 20px;
        border-radius: 10px;
        background: green;
    }
    .red{
        background: red;
    }
</style>