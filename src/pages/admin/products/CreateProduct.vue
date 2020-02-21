<template>
    <div>
        <h3>Add new product</h3><hr/>
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
                <input type="button" class="btn btn-primary" value="Create" @click="addProduct"/>
            </div>
        </div>
    </div>
</template>

<script>
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
    import axios from 'axios';
    import Profile from "../../../components/account/profile/Profile";
    export default {
        name: "CreateProduct",
        data(){
            return{
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
            getFormData: function(){
                const data = new FormData();
                data.append('name',this.name);
                data.append('details',this.details);
                data.append('price',this.price);
                data.append('quantity',this.quantity);
                data.append('description',this.description);
                data.append('size',this.size);
                data.append('color',this.color);
                data.append('category_id',this.newCategory);
                data.append('image',this.image);
                return data;
            },
            addProduct: function () {
                console.log("method");
                axios({
                    method: 'post',
                    url: 'http://localhost:8000/api/product',
                    data: this.getFormData(),
                    headers: Profile.methods.getHeaders()
                }).then(res => {
                    console.log(res);
                }).catch(err => console.log(err.response));
            }
        },
        created() {
            this.getCategories();
        }
    }
</script>

<style scoped>

</style>