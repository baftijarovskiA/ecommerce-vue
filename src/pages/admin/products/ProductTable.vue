<template>
    <div>
<!--        <CreateCategory /><br/>-->
        <router-link to="/admin/products/create" class="btn btn-secondary float-right">Create</router-link>
        <h3>Products</h3><hr/>
        <table class="table table-bordered table-striped mt-2">
            <thead>
            <tr>
                <th>Image</th>
                <th>Category</th>
                <th>Name</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Sale</th>
                <th>Sizes</th>
                <th>Colors</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            <tr :key="product.id" v-for="product in products" :class="{'table-success': product.is_available === 1,'table-danger': product.is_available === 0 }">
                <ProductTableItem v-bind:product="product" />
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from "axios";
    import ProductTableItem from "./ProductTableItem";
    import Profile from "../../../components/account/profile/Profile";

    export default {
        name: "ProductTable",
        components: {ProductTableItem},
        data(){
            return{
                products: []
            }
        },
        methods:{
            getAllProducts: function () {
                axios({
                    method: 'get',
                    url: 'http://localhost:8000/api/product/all',
                    headers: Profile.methods.getHeaders()
                })
                    .then( response => {
                        console.log(response);
                        this.products = response.data.response;
                    })
                    .catch(err => console.log(err));
            }
        },
        created() {
            this.getAllProducts();
        }
    }
</script>

<style scoped>

</style>