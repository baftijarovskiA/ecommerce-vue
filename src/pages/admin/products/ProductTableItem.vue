<template>
    <fragment>
        <td><img :src="'http://localhost:8000/storage/products/'+product.image" :alt="product.name" style="width: 100px; height: 100px;"/></td>
        <td><span class="badge badge-secondary" v-text="product.category.name"></span></td>
        <td v-text="product.name">Name</td>
        <td v-text="product.quantity">Quantity</td>
        <td v-text="product.price">Price</td>
        <td v-text="product.price_sale">Sale</td>
        <td v-text="product.size">Sizes</td>
        <td v-text="product.color">Colors</td>
        <td>
            <router-link :to="'products/'+product.id" class="btn btn-sm btn-success">Edit</router-link><br/>
            <div><span class="badge badge-primary" v-text="product.rating+' *'"></span><br/></div>
            <div v-if="product.is_new"><span class="badge badge-danger" >New</span><br/></div>
            <div v-if="product.is_sale"><span class="badge badge-warning" >Sale</span><br/></div>
        </td>
    </fragment>
</template>

<script>
    export default {
        name: "ProductTableItem",
        props: ['product']
    }
</script>

<style scoped>

</style>