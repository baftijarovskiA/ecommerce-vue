<template>
    <div class="card">
        <span class="badge badge-danger custom-badge new" v-if="product.is_new">NEW</span>
        <span class="badge badge-warning custom-badge sale" v-if="product.is_sale">SALE</span>
        <img :src="'http://localhost:8000/storage/products/'+product.image" :alt="product.name" class="w-100" />
        <div class="card-footer text-center">
            <p class="font-weight-bold card-text" v-text="product.name"></p>
            <small class="card-text" v-text="product.details"></small>
            <h1 class="card-title" v-text="product.price+' ден'" :class="{'strike-sale text-danger': product.is_sale}"></h1>
            <h1 class="card-title" v-if="product.is_sale" v-text="product.price_sale+' ден'"></h1>
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
    .custom-badge{
        position: absolute;
        font-size: 20px;
    }
    .new{
        top: -10px;
        left: -10px;
    }
    .sale{
        transform: rotate(45deg);
        top: 5px;
        right: -15px;
    }
    .strike-sale{
        font-size: 20px;
        text-decoration: line-through;
    }
</style>