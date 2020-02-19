<template>
    <fragment>
        <td v-text="order.id">Id</td>
        <td v-text="order.product_name">Product name</td>
        <td v-text="order.quantity">Quantity</td>
        <td v-text="order.date">Date</td>
        <td v-text="order.total+' den'">Total</td>
    </fragment>
</template>

<script>
    export default {
        name: "OrderHistoryItem",
        props: ['order'],
        data(){
            return{
            }
        }
    }
</script>

<style scoped>

</style>