<template>
    <div class="container-fluid bg-light mb-3">
        <div class="container">
            <nav class="navbar navbar-expand-md navbar-light bg-light">
                <router-link to="/" class="navbar-brand">eCommerce</router-link>
                <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarCollapse">
                    <div class="navbar-nav">
                        <router-link to="/" class="nav-item nav-link">Home</router-link>
                        <router-link to="/shop" class="nav-item nav-link">Shop</router-link>
                        <router-link to="/blog" class="nav-item nav-link">Blog</router-link>
                    </div>
                    <div class="navbar-nav ml-auto">
                        <router-link to="/account" class="nav-item nav-link">Account</router-link>
                        <router-link to="/cart" class="nav-item nav-link">Cart</router-link>
                    </div>
                </div>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Navbar"
    }
</script>

<style scoped>

</style>