<template>
    <div class="card">
        <div class="card-body">
            <div v-if="user.is_verified === 0" class="alert alert-warning">
                Your email is not confirmed! Please check your mail and verify your account.
            </div>
            <div class="row">
                <div class="col-md-3 tab-card-header">
                    <ul class="list-group card-header-tabs" id="myTab" role="tablist">
                        <li class="list-group-item"><a id="profile-tab" data-toggle="tab" href="#profile" aria-controls="profile" aria-selected="true" class="btn btn-link btn-sm">Profile</a></li>
                        <li class="list-group-item"><a id="orders-tab"  data-toggle="tab" href="#orders" aria-controls="orders" aria-selected="false" class="btn btn-link btn-sm">Order history</a></li>
                    </ul>
                    <ul class="list-group mt-5">
                        <li class="list-group-item"><a href="#" class="btn btn-link btn-sm" @click="logoutUser">Log out</a></li>
                    </ul>
                </div>
                <div class="col-md-9">
                    <div class="card tab-content" id="myTabContent">
                        <div class="tab-pane active card-body" id="profile" role="tabpanel" aria-labelledby="profile-tab" >
                            <p>Welcome, {{user.name}}</p>
                            <p>{{user.email}}</p>
                            <div v-if="adminAuthorization">
                                <h5>Admin Dashboard</h5>
                                <ul class="list-group">
                                    <li class="list-group-item"><router-link to="/admin/category">Categories</router-link></li>
                                    <li class="list-group-item"><router-link to="/admin/products">Products</router-link></li>
                                </ul>
                            </div>
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
    import axios from 'axios';
    export default {
        name: "Profile",
        components: {OrderHistoryTable},
        data(){
            return{
                adminAuthorization: false,
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
        },
        methods:{
          logoutUser: function () {
              localStorage.clear();
              window.location.reload();
          },
          getHeaders: function () {
              let token = localStorage.getItem('_session') || null;
              if (token != null){
                  return {'Authorization': 'Bearer '+ token}
              }
              return null;
          },
          isLogged: function(){
              let token = localStorage.getItem('_session') || null;
              return token != null;

          },
          getUser: function () {
              if (this.isLogged()){
                  axios({
                      method: 'get',
                      url: 'http://localhost:8000/api/user',
                      headers: this.getHeaders()
                  })
                  .then((response) => {
                      this.user = response.data.user;
                      let roles = response.data.user.role;
                      for(let i=0; i<roles.length; i++){
                          if (roles[i].name === "admin"){
                              this.adminAuthorization = true;
                          }
                      }
                  })
                  .catch(err => console.log(err));
              }
          }
        },
        created() {
            this.getUser();
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