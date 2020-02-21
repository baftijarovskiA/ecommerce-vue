<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-md-6">
                    <img :src="'http://localhost:8000/storage/products/'+product.image" alt="" class="w-100"/>
                </div>
                <div class="col-md-6">
                    <h3 v-text="product.name">Product name</h3>
                    <p v-text="product.details" class="font-italic"></p>
                    <p v-html="product.description"></p>
                    <span v-text="product.price+' den'" :class="{'strike text-danger' : product.is_sale, 'price': !product.is_sale}"></span><br/>
                    <span v-text="product.price_sale+' den'" v-if="product.is_sale" class="price"></span>
                    <div class="row mt-2">
                        <div class="col-md-6">
                            Select size:
                            <div class="size" :key="size" v-for="size in sizes">
                                <label>
                                    <input  type="radio" name="size" :value="size" v-model="selectedSize"/>
                                    {{size}}
                                </label><br/>
                            </div>
                        </div>
                        <div class="col-md-6">
                            Select color:
                            <div class="color" :key="color" v-for="color in colors" >
                                <label>
                                    <input  type="radio" name="color" :value="color" v-model="selectedColor"/>
                                    {{color}}
                                </label><br/>
                            </div>
                        </div>
                    </div>
                    <label>
                        Quantity:
                        <input type="number" min="1" :max="product.quantity" v-model="selectedQuantity" class="form-control"/>
                    </label>
                    <button class="btn btn-secondary cart-btn" @click="addToCart">Add to cart</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "ProductPreview",
        data(){
            return{
                product: '',
                productPrice: '',
                sizes: '',
                colors: '',
                selectedSize: '',
                selectedColor: '',
                selectedQuantity: ''
            }
        },
        methods: {
            getProduct: function () {
                let slug = this.$route.params.slug;
                axios({
                    method: 'get',
                    url: `http://localhost:8000/api/product/slug/${slug}`
                }).then(res => {
                    this.product = res.data.response;
                    if (this.product.is_sale){
                        this.productPrice = this.product.price_sale;
                    } else {
                        this.productPrice = this.product.price;
                    }
                    this.sizes = res.data.response.size.split('/');
                    this.colors = res.data.response.color.split('/');
                    })
                .catch(err => {
                    console.log(err.response);
                })
            },
            addToCart: function () {
                if (this.selectedSize === ""){
                    window.alert("Please select size");
                    return;
                }
                if (this.selectedColor === ""){
                    window.alert("Please select color");
                    return;
                }
                if (this.selectedQuantity === ""){
                    window.alert("Please select quantity");
                    return;
                }
                const product = {
                    product_id: this.product.id,
                    product_name: this.product.name,
                    product_image: this.product.image,
                    product_size: this.selectedSize,
                    product_color: this.selectedColor,
                    product_quantity: parseInt(this.selectedQuantity),
                    product_price: this.productPrice,
                    product_total: this.productPrice * parseInt(this.selectedQuantity)
                };
                console.log(product);
                this.updateCart(product);
            },
            updateCart: function (product) {
                let productsInCart = JSON.parse(localStorage.getItem('_cart')) || [];
                productsInCart.push(product);
                localStorage.setItem('_cart', JSON.stringify(productsInCart));
                alert("Product added to your cart!");
            }
        },
        created() {
            this.getProduct();
        }
    }
</script>

<style scoped>
    .price{
        border: 2px solid #6495ED;
        border-radius: 10px;
        font-size: 35px;
        padding: 5px;
        background: #6495ED;
        background: rgba(100,149,237,.3);
    }
    .strike{
        font-size: 20px;
        text-decoration: line-through;
    }
    .cart-btn{
        position: absolute;
        bottom: 0;
        right: 20px;
    }
</style>