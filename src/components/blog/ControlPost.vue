<template>
    <div class="card">
        <div class="card-body">
            <div v-if="alert" class="alert alert-warning alert-dismissible fade show" role="alert">
                {{message}}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form @submit="formCheck" datatype="f">
                <div class="form-group">
                    <label for="postTitle">Title</label>
                    <input type="text" id="postTitle" class="form-control" placeholder="Post Title" v-model="newTitle" required/>
                </div>
                <div class="form-group">
                    <label>Content</label>
                    <ckeditor :editor="editor" v-model="newContent" :config="editorConfig"></ckeditor>
<!--                    <textarea id="postContent" class="form-control" placeholder="Post Content" v-model="newContent" required/>-->
                </div>
                <div class="form-group">
                    <label for="cover_image">Cover Image</label><br/>
                    <input type="file" id="cover_image" name="cover_image" @change="onFileSelected"/>
                </div>
                <input type="submit" value="Create" class="btn btn-secondary" />
            </form>
        </div>
    </div>
</template>

<script>
    import axios from 'axios';
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

    export default {
        name: "ControlPost",
        data(){
            return{
                alert:false,
                message: '',
                newTitle: '',
                newContent: '',
                newImage: '',
                editor: ClassicEditor,
                editorConfig: {
                    // The configuration of the editor.
                    placeholder:'Post content'
                }
            }
        },
        methods:{
            onFileSelected: function(event){
                this.newImage = event.target.files[0];
            },
            formCheck: function (e){
                this.createPost(this.getFormData());
                e.preventDefault();
            },
            getFormData: function () {
                const data = new FormData();
                data.append('title',this.newTitle);
                data.append('content',this.newContent);
                data.append('cover_image',this.newImage);
                return data;
            },
            createPost: function (post) {
                axios({
                    method:'post',
                    url:'http://localhost:8000/api/posts',
                    data: post,
                    headers: {'Authorization': 'Bearer '+localStorage.getItem("_session")}
                })
                .then( response => {
                    console.log(response);
                    this.alert = true;
                    let status = response.status;
                    if (status === 200){
                        this.message = 'Post created successfully!';
                    } else {
                        this.message = 'Error creating post! Try again later!';
                    }
                    this.newTitle= '';
                    this.newContent= '';
                    this.newImage = null;
                })
                .catch(err => {
                    console.log(err);
                    let data = err.response.data;
                    let res = data.split("[");
                    let fin = res[1].split('"');
                    let result = fin[1];
                    this.alert = true;
                    this.message = result;
                });
            }
        },
        created() {
        }
    }
</script>

<style scoped>

</style>