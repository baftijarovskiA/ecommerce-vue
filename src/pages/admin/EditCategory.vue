<template>
    <div class="card">
        <div class="card-body">
            <form @submit="formCheck">
                <div class="form-group">
                    <label for="name">Add new category</label>
                    <input type="text" id="name" class="form-control" placeholder="Name" v-model="name" />
                </div>
                <input type="submit" class="btn btn-secondary" value="Create"/>
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import Profile from "../../components/account/profile/Profile";
    import router from "../../router";
    export default {
        name: "EditCategory",
        data(){
            return{
                name: '',
            }
        },
        methods:{
            getCategory: function(){
                let categoryId = this.$route.params.id;
                axios({
                    method: 'get',
                    url: `http://localhost:8000/api/category/${categoryId}`,
                    headers: Profile.methods.getHeaders()
                })
                .then(res => {
                    let cat = res.data.response;
                    this.id = cat.id;
                    this.name = cat.name;
                })
                .catch(err => {
                    let error = err.response;
                    if (error.status === 400){
                        alert(error.data.response);
                    }
                });
            },
            formCheck: function (e) {
                const category = {
                    id: this.id,
                    name: this.name
                };
                this.addCategory(category);
                e.preventDefault();
            },
            addCategory: function (category) {
                axios({
                    method: 'put',
                    url: `http://localhost:8000/api/category/edit/${category.id}`,
                    data: category,
                    headers: Profile.methods.getHeaders()
                })
                    .then(response =>{
                        window.alert(response.data.response);
                        router.push("/admin/category");
                    })
                    .catch(err => console.log(err.response.data));
            }
        },
        created() {
            this.getCategory();
        }
    }
</script>

<style scoped>

</style>