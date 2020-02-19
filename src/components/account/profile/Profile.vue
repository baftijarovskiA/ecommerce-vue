<template>
    <div class="card tab-card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-3 tab-card-header">
                    <ul class="list-group card-header-tabs" id="myTab" role="tablist">
                        <li class="list-group-item"><a id="profile-tab" data-toggle="tab" href="#profile" aria-controls="profile" aria-selected="true" class="btn btn-link btn-sm">Profile</a></li>
                        <li class="list-group-item"><a id="orders-tab"  data-toggle="tab" href="#orders" aria-controls="orders" aria-selected="false" class="btn btn-link btn-sm">Order history</a></li>
                    </ul>
                    <ul class="list-group mt-5">
                        <li class="list-group-item"><a href="#" class="btn btn-link btn-sm">Log out</a></li>
                    </ul>
                </div>
                <div class="col-md-9">
                    <div class="card tab-content" id="myTabContent">
                        <div class="tab-pane card-body" id="profile" role="tabpanel" aria-labelledby="profile-tab" aria-selected="true">
                            <p>Your profile info will be displayed here!</p>
                        </div>
                        <div class="tab-pane card-body" id="orders" role="tabpanel" aria-labelledby="orders-tab">
                            <p>Your order history</p>
                            <OrderHistoryTable v-bind:orders="orderHistory"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import OrderHistoryTable from "./OrderHistoryTable";
    export default {
        name: "Profile",
        components: {OrderHistoryTable},
        data(){
            return{
                user:{},
                orderHistory: [
                    {
                        id: 1109,
                        product_name: 'Stripped T-Shirt v-shape',
                        quantity: 1,
                        date: '22.02.2020',
                        total: 320
                    },
                    {
                        id: 1110,
                        product_name: 'Mug custom full-picture',
                        quantity: 2,
                        date: '22.02.2020',
                        total: 650
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    .btn-link{
        color: #2c3e50 !important;
    }
    .btn-link:hover, .btn-link:focus, .btn-link:active{
        text-decoration: none !important;
    }
</style>