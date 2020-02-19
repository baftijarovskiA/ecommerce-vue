<template>
    <div class="row">
        <div :key="product.id" v-for="product in products" class="col-md-4 mb-4">
            <ProductListItem v-bind:product="product" />
        </div>
    </div>
</template>

<script>
    import ProductListItem from "./ProductListItem";
    export default {
        name: "ProductList",
        components: {ProductListItem},
        props: ['products']
    }
</script>

<style scoped>

</style>