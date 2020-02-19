<template>
    <div>
        <Login v-show="loginComponentShow" @onToggle="toggleViewFunction"/>
        <Register v-show="registerComponentShow" @onToggle="toggleViewFunction"/>
        <Profile v-show="profileComponentShow"/>
    </div>
</template>

<script>
    import Login from "../components/account/Login";
    import Register from "../components/account/Register";
    import Profile from "../components/account/profile/Profile";
    export default {
        name: "Account",
        components: {Profile, Register, Login},
        data(){
            return{
                isLogged: false,
                loginComponentShow:true,
                registerComponentShow:false,
                profileComponentShow: false
            }
        },
        methods:{
            toggleViewFunction: function () {
                this.registerComponentShow = !this.registerComponentShow;
                this.loginComponentShow = !this.loginComponentShow;
            },
            profileViewFunction: function () {
                if (this.isLogged){
                    this.loginComponentShow= false;
                    this.registerComponentShow = false;
                    this.profileComponentShow = true;
                }
            }
        },
        created: function () {
            if (localStorage.getItem('_session')){
                this.isLogged = true;
            }
            this.profileViewFunction();
        }
    }
</script>

<style scoped>

</style>