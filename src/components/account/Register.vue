<template>
    <div class="col-md-6 m-auto">
        <div class="text-center my-5">
            <h1>eCommerce</h1>
        </div>
        <form @submit="checkForm">
            <div class="form-group">
<!--                <label for="name">Name</label>-->
                <input type="text" id="name" placeholder="Name" class="form-control" required v-model="name"/>
            </div>
            <div class="form-group">
<!--                <label for="email">Email</label>-->
                <input type="email" id="email" placeholder="Email" class="form-control" required v-model="email"/>
            </div>
            <div class="form-group">
<!--                <label for="password">Password</label>-->
                <input type="password" id="password" placeholder="Password" class="form-control" required v-model="password"/>
            </div>
            <div class="form-group">
<!--                <label for="passwordConfirm">Password Confirmation</label>-->
                <input type="password" id="passwordConfirm" placeholder="Confirm" class="form-control" required v-model="password_confirmation"/>
            </div>
            <input type="submit" value="Sign up" class="btn btn-light w-100"/>
        </form>
        <div class="text-center mt-3">
            <small>Have an account? <font class="btn-link cursor" @click="toggleView">Log in</font></small>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Register",
        data(){
            return{
                name:'',
                email:'',
                password:'',
                password_confirmation:''
            }
        },
        methods:{
            toggleView: function () {
                this.$emit('onToggle');
            },
            checkForm: function (e) {
                const user = {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.password_confirmation
                };
                console.log(user);
                e.preventDefault();
            }
        }
    }
</script>

<style scoped>
    .cursor{
        cursor: pointer;
    }
</style>