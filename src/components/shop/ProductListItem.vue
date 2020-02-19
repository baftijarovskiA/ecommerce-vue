<template>
    <div class="card">
        <img :src="product.image" :alt="product.name" class="w-100" />
        <div class="card-footer text-center">
            <p class="font-weight-bold card-text" v-text="product.name"></p>
            <small class="card-text" v-text="product.details"></small>
            <h1 class="card-title" v-text="product.price+' ден'"></h1>
            <p><router-link class="btn btn-link btn-sm" :to="'/product/'+product.slug">Preview</router-link> | <button class="btn btn-link btn-sm" @click="addProductToCart(product)">Add to cart</button></p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "ProductListItem",
        props: ['product'],
        data(){
            return{

            }
        },
        methods:{
            addProductToCart: function (product) {
                console.log(product);
            }
        }
    }
</script>

<style scoped>

</style>