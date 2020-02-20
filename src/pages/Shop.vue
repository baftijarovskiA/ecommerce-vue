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
                products:[
                    {
                        id:1,
                        name:'Customized T-shirt',
                        slug: 'customized-t-shirt',
                        details: 'Short details for this customized t-shirt',
                        price: '320',
                        image:'https://cdn.shopify.com/s/files/1/1038/1798/products/1bfdea18816493.562cfcdb8778e.jpg'
                    },
                    {
                        id:2,
                        name:'Customized T-shirt',
                        slug: 'customized-t-shirt',
                        details: 'Short details for this customized t-shirt',
                        price: '280',
                        image:'https://cdn.shopify.com/s/files/1/1038/1798/products/1bfdea18816493.562cfcdb8778e.jpg'
                    }
                ]
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
            }
        },
        created: function () {
            this.getCategories();
        }
    }
</script>

<style scoped>

</style>