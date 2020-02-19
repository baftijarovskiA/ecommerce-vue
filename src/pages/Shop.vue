<template>
    <div>
        <h3>Products</h3>
        <hr/>
        <div class="row">
            <div class="col-md-3 bg-light rounded">
                Filter:
            </div>
            <div class="col-md-9">
                <ProductList v-bind:products="products" />
            </div>
        </div>
    </div>
</template>

<script>
    import ProductList from "../components/shop/ProductList";
    export default {
        name: "Shop",
        components: {ProductList},
        data(){
            return{
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

        },
        created: function () {

        }
    }
</script>

<style scoped>

</style>