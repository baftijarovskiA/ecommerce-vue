<template>
    <div>
        <h3>Products</h3>
        <hr/>
        <div class="row">
            <div class="col-md-3 bg-light rounded p-3">
                <p>By Category:</p><hr/>
                <form>
                    <div :key="category.id" v-for="category in categories" class="form-group">
                        <label><input type="checkbox" name="category" :value="category.name"/>&nbsp;<span v-text="category.name"></span></label><br/>
                    </div>
                    <input type="submit" value="Filter" class="btn btn-secondary float-right"/>
                </form>
            </div>
            <div class="col-md-9">
                <ProductList v-bind:products="products" />
            </div>
        </div>
    </div>
</template>

<script>
    import ProductList from "../components/shop/ProductList";
    import axios from 'axios';
    export default {
        name: "Shop",
        components: {ProductList},
        data(){
            return{
                categories: [],
                products: []
            }
        },
        methods: {
            getCategories: function () {
                axios({
                    method: 'get',
                    url: 'http://localhost:8000/api/category'
                })
                    .then( response => {
                        this.categories = response.data.response;
                    })
                    .catch(err => console.log(err));
            },
            getProducts: function () {
                axios({
                    method: 'get',
                    url: 'http://localhost:8000/api/product'
                })
                    .then( response => {
                        this.products = response.data.response;
                    })
                    .catch(err => console.log(err));
            }
        },
        created: function () {
            this.getCategories();
            this.getProducts();
        }
    }
</script>

<style scoped>

</style>