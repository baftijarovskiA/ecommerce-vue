import Vue from 'vue'
import App from './App.vue'
import CKEditor from '@ckeditor/ckeditor5-vue';
import router from "./router";
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery'
import 'popper.js'
import 'bootstrap/dist/js/bootstrap'
import {Fragment} from "vue-fragment";

Vue.config.productionTip = false;
Vue.component('fragment',Fragment);
Vue.use(CKEditor);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
