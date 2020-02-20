<template>
    <div class="card">
        <div class="card-body">
            <form @submit="formCheck">
                <div class="form-group">
                    <label for="name">Add new category</label>
                    <input type="text" id="name" class="form-control" placeholder="Name" v-model="name"/>
                </div>
                <input type="submit" class="btn btn-secondary" value="Create"/>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Profile from "../../components/account/profile/Profile";
    export default {
        name: "CreateCategory",
        data(){
            return{
                name: ''
            }
        },
        methods:{
            formCheck: function (e) {
                const category = {
                    name: this.name
                };
                this.addCategory(category);
                e.preventDefault();
            },
            addCategory: function (category) {
                axios({
                    method: 'post',
                    url: 'http://localhost:8000/api/category',
                    data:category,
                    headers: Profile.methods.getHeaders()
                })
                    .then(response =>{
                        window.alert(response.data.response);
                        window.location.reload();
                    })
                    .catch(err => console.log(err.response.data));
                console.log(category);
            }
        }
    }
</script>

<style scoped>

</style>