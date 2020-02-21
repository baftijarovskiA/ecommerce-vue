<template>
    <div>
        <h3>Edit product</h3><hr/>
        <div class="row">
            <div class="col-md-4">
                <div class="form-group">
                    <label for="image" >Image</label><br/>
                    <input type="file" id="image" name="image" />
                </div>
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" class="form-control" placeholder="Name" v-model="name" required />
                </div>
                <div class="form-group">
                    <label for="details" >Details</label>
                    <input type="text" id="details" class="form-control" placeholder="Details" v-model="details" required />
                </div>
                <div class="form-group">
                    <label for="price" >Price</label>
                    <input type="number" id="price" class="form-control" placeholder="Price" v-model="price"  required />
                </div>
                <div class="form-group">
                    <label for="quantity" >Quantity</label>
                    <input type="number" id="quantity" class="form-control" placeholder="Quantity" v-model="quantity" required />
                </div>
                <div class="form-group">
                    <label for="size" >Size <small>( Separate values with ' / ' )</small></label>
                    <input type="text" id="size" class="form-control" placeholder="Size" v-model="size" required />
                </div>
                <div class="form-group">
                    <label for="color" >Color <small>( Separate values with ' / ' )</small></label>
                    <input type="text" id="color" class="form-control" placeholder="Color" v-model="color"  required />
                </div>
            </div>
            <div class="col-md-8">
                <label for="category">Category</label>
                <select id="category" class="form-control" v-model="newCategory" required>
                    <option disabled>Select category</option>
                    <option :key="category.id" v-for="category in categories" :value="category.id" v-text="category.name"></option>
                </select><br/>
                <ckeditor :editor="editor" v-model="description" :config="editorConfig"></ckeditor>
                <br/>
                <div class="form-group">
                    <label for="is_available" >Is Available </label>&nbsp;
                    <input type="checkbox" id="is_available" v-model="is_available" />
                </div>
                <div class="form-group">
                    <label for="is_new" >Is New </label>&nbsp;
                    <input type="checkbox" id="is_new" v-model="is_new" />
                </div>
                <div class="form-group">
                    <label for="is_sale" >On Sale </label>&nbsp;
                    <input type="checkbox" id="is_sale" v-model="is_sale" />
                </div>
                <div class="form-group">
                    <label for="price_sale" >Sale</label>
                    <input type="number" id="price_sale" class="form-control" placeholder="Sale" v-model="price_sale"  required />
                </div>
                <input type="button" class="btn btn-primary" value="Create" @click="addProduct"/>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import Profile from "../../../components/account/profile/Profile";
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

    export default {
        name: "EditProduct",
        data(){
            return{
                id: 0,
                is_available: '',
                is_new: '',
                is_sale: '',
                price_sale: '',
                image:'',
                name:'',
                details:'',
                price: 0,
                quantity: 0,
                size: '',
                color: '',
                newCategory: 'Select category',
                description: '',
                categories: [],
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the editor.
                    placeholder:'Product description'
                }
            }
        },
        methods:{
            onFileSelected: function(event){
                this.image = event.target.files[0];
            },
            getCategories: function () {
                axios({
                    method: 'get',
                    url: 'http://localhost:8000/api/category'
                }).then(response => {
                    this.categories = response.data.response;
                }).catch(err=>console.log(err));
            },
            getProduct: function(){
                axios({
                    method: 'get',
                    url: `http://localhost:8000/api/product/id/${this.$route.params.id}`,
                    headers: Profile.methods.getHeaders()
                }).then(response => {
                    let product = response.data.response;
                    this.id = product.id;
                    this.name = product.name;
                    this.details = product.details;
                    this.description = product.description;
                    this.price = product.price;
                    this.price_sale = product.price_sale;
                    this.quantity = product.quantity;
                    this.is_new = product.is_new;
                    this.is_sale = product.is_sale;
                    this.is_available = product.is_available;
                    this.size = product.size;
                    this.color = product.color;

                }).catch(err=>console.log(err));
            },
            getFormData: function(){
                const data = new FormData();
                data.append('name',this.name);
                data.append('details',this.details);
                data.append('price',this.price);
                data.append('quantity',this.quantity);
                data.append('description',this.description);
                data.append('size',this.size);
                data.append('color',this.color);
                // data.append('category_id',this.newCategory);
                data.append('image',this.image);
                data.append('is_new',this.is_new ? 1 : 0);
                data.append('is_sale',this.is_sale ? 1 : 0);
                data.append('is_available',this.is_available ? 1 : 0);
                data.append('price_sale',this.price_sale);
                return data;
            },
            addProduct: function () {
                axios({
                    method: 'put',
                    url: `http://localhost:8000/api/product/edit/${this.id}`,
                    data: this.getFormData(),
                    headers: Profile.methods.getHeaders()
                }).then(res => {
                    console.log(res);
                }).catch(err => console.log(err.response));
            }
        },
        created() {
            this.getProduct();
            this.getCategories();
        }
    }
</script>

<style scoped>

</style>