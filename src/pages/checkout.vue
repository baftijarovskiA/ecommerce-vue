<template>
    <div>
        <h3>Checkout</h3>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6">
                        <form @submit="checkForm">
                            <div class="form-group">
                                <label for="name">Name*</label>
                                <input type="text" id="name" placeholder="Customer Name" class="form-control" required v-model="name" />
                            </div>
                            <div class="form-group">
                                <label for="email">Email*</label>
                                <input type="email" id="email" placeholder="Customer Email" class="form-control" required v-model="email"  />
                            </div>
                            <div class="form-group">
                                <label for="phone">Phone*</label>
                                <input type="text" id="phone" placeholder="Customer Phone" class="form-control" required v-model="phone" />
                            </div>
                            <div class="form-group">
                                <label for="country">Country*</label>
                                <input type="text" id="country" placeholder="Country" class="form-control" required v-model="country" />
                            </div>
                            <div class="form-group">
                                <label for="city">City*</label>
                                <input type="text" id="city" placeholder="City" class="form-control" required v-model="city" />
                            </div>
                            <div class="form-group">
                                <label for="address1">Address Name 1*</label>
                                <input type="text" id="address1" placeholder="Address 1" class="form-control" required v-model="first_address"  />
                            </div>
                            <div class="form-group">
                                <label for="address2">Address Name 2</label>
                                <input type="text" id="address2" placeholder="Address 2" class="form-control" v-model="second_address" />
                            </div>
                            <div class="form-group">
                                <label for="postal">Postal Code</label>
                                <input type="text" id="postal" placeholder="Postal Code" class="form-control" v-model="postal_code"  />
                            </div>
                            <input type="submit" class="btn btn-primary" value="Order"/>
                        </form>
                    </div>
                    <div class="col-md-6">
                        <div class="alert alert-info">
                            You have to pay: {{totalPrice}} den
                        </div>
                        <p>Fields with * are required!</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "checkout",
        data(){
            return{
                totalPrice: 0,
                name: '',
                email: '',
                phone: '',
                first_address: '',
                second_address: '',
                city: '',
                country: '',
                postal_code: '',
                address_id:''
            }
        },
        methods:{
            getTotal: function () {
                let products = JSON.parse(localStorage.getItem('_cart')) || [];
                let sum = 0;
                products.forEach(product => {
                    sum+=product.product_total;
                });
                this.totalPrice = sum;
            },
            checkForm: function (e) {
                const address = {
                    name: this.name,
                    email: this.email,
                    phone: this.phone,
                    first_address: this.first_address,
                    second_address: this.second_address,
                    city: this.city,
                    country: this.country,
                    postal_code: this.postal_code
                };
                this.saveAddress(address);
                e.preventDefault();
            },
            saveAddress: function(address){
                axios({
                    method: 'post',
                    url:'http://localhost:8000/api/address',
                    data: address
                }).then(response => {
                    this.address_id = response.data.success.id;
                    this.makeOrder();
                }).catch(err => console.log(err));
            },
            makeOrder: function () {
                alert("Your order was successful!");
                this.$route.path = '/account';
                localStorage.setItem('_cart',null);
                // let products = JSON.parse(localStorage.getItem('_cart')) || [];
                // const order = {
                //     address_id: this.address_id
                //     total_price: this.totalPrice
                // }
            }
        },
        created() {
            this.getTotal();
        }
    }
</script>

<style scoped>

</style>