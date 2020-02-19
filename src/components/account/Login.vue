<template>
    <div class="col-md-6 m-auto">
        <div class="text-center my-5">
            <h1>eCommerce</h1>
        </div>
        <form @submit="checkForm">
            <div class="form-group">
<!--                <label for="LoginEmail">Email</label>-->
                <input type="email" id="LoginEmail" placeholder="Email" class="form-control" required v-model="email"/>
            </div>
            <div class="form-group">
<!--                <label for="loginPassword">Password</label>-->
                <input type="password" id="loginPassword" placeholder="Password" class="form-control" required v-model="password"/>
            </div>
           <input type="submit" value="Log in" class="btn btn-light w-100"/>
        </form>
        <div class="text-center mt-3">
            <small>Don't have an account? <font class="btn-link cursor" @click="toggleView">Sign up</font><br/>
                <a href="http://localhost:8000/password/reset" class="btn-link cursor">Forgot password?</a></small>
        </div>
    </div>
</template>

<script>

    import Auth from "../../Auth";
    import axios from 'axios';

    export default {
        name: "Login",
        data(){
            return{
                email:'',
                password:''
            }
        },
        methods:{
            toggleView: function () {
                this.$emit('onToggle');
            },
            checkForm: function (e) {
                const user = {
                    email: this.email,
                    password: this.password
                };
                this.logUser(user);
                e.preventDefault();
            },
            logUser: function (user) {
                axios({
                    method:'post',
                    url:'http://localhost:8000/api/login',
                    data: user
                }).then( response => {
                    let user = response.data.user;
                    let token = response.data.token;
                    let auth = new Auth(user,token);
                    console.log(auth.getUser());
                    window.location = "/account";
                }).catch( err => console.log(err));
            }
        }
    }
</script>

<style scoped>
.cursor{
    cursor: pointer;
}
</style>