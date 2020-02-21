<template>
    <div>
        <h3>Your cart</h3>
        <div class="alert alert-info" v-if="products.length === 0">
            Your cart is empty!
        </div>
        <div class="card" v-else>
            <div class="card-body">
                <div class="alert alert-secondary border" :key="product.product_id" v-for="product in products">
                    <button class="btn btn-danger del-button" @click="deleteProductFromCart(product)">X</button>
                    <div class="row">
                        <div class="col-md col-custom">
                            <img :src="'http://localhost:8000/storage/products/'+product.product_image" :alt="product.product_name" style="width: 100px" />
                        </div>
                        <div class="col-md col-custom">
                            Product Name:<br/><br/>
                            <span v-text="product.product_name" class="font-weight-bold"></span><br/>
                            <span v-text="product.product_size" class="font-weight-bold"></span><br/>
                            <span v-text="product.product_color" class="font-weight-bold"></span>
                        </div>
                        <div class="col-md col-custom">
                            Quantity:<br/><br/>
                            <label>
                                <input type="number" min="1" class="form-control" v-model="product.product_quantity" @change="changeQuantity(product.id)" />
                            </label>
                        </div>
                        <div class="col-md col-custom">
                            Product Price:<br/><br/>
                            <span v-text="product.product_price" class="font-weight-bold"></span>
                        </div>
                        <div class="col-md">
                            Total Price:<br/><br/>
                            <span v-text="product.product_total" class="font-weight-bold"></span>
                        </div>
                    </div>
                </div>
                <br/>
                <div class="alert alert-info">
                    <span class="badge badge-info price float-right" v-text="'Total: '+totalPrice + ' den'"></span>
                    <router-link to="/checkout" class="btn btn-warning">Checkout</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Cart",
        data(){
            return{
                products: '',
                totalPrice: 0
            }
        },
        methods:{
            getCart: function () {
                this.products = JSON.parse(localStorage.getItem('_cart')) || [];
            },
            getTotal: function(){
                let sum = 0;
                this.products.forEach(product => {
                    sum+=product.product_total;
                });
                this.totalPrice = sum;
            },
            changeQuantity: function (id) {
                this.products.forEach(product => {
                   if (product.id === id){
                       product.product_total = product.product_price * parseInt(product.product_quantity);
                   }
                });
                this.products = [...this.products];
                this.getTotal();
                localStorage.setItem('_cart',JSON.stringify(this.products));
            },
            deleteProductFromCart: function (product) {
                let index = this.products.indexOf(product);
                this.products.splice(index, 1);
                this.getTotal();
                localStorage.setItem('_cart',JSON.stringify(this.products));
            }
        },
        created() {
            this.getCart();
            this.getTotal();
        }
    }
</script>

<style scoped>
    .col-custom{
        border-right: 1px solid black;
    }
    .price{
        font-size: 20px;
    }
    .del-button{
        position: absolute;
        top: 0;
        right: 0;
    }
</style>