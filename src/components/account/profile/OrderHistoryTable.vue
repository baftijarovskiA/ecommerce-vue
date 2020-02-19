<template>
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th style="width: 100px">Order No.</th>
                <th>Product name</th>
                <th style="width: 100px">Quantity</th>
                <th>Date</th>
                <th style="width: 100px">Total</th>
            </tr>
        </thead>
        <tbody style="min-height: 200px;max-height: 200px">
            <tr v-bind:key="order.id" v-for="order in orders">
                <OrderHistoryItem v-bind:order="order"/>
            </tr>
        </tbody>
    </table>
</template>

<script>
    import OrderHistoryItem from "./OrderHistoryItem";
    export default {
        name: "OrderHistoryTable",
        components: {OrderHistoryItem},
        props: ['orders'],
        data(){
            return{
            }
        },
        created:function () {
        }

    }
</script>

<style scoped>

</style>