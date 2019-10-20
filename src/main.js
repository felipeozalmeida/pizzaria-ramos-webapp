import Vue from "vue";
import App from "./App.vue";
import "./plugins/bootstrap-vue";
import "./plugins/vue-fontawesome";
import "./plugins/vue-img-inputer";
import ApiService from "./services/api.service";

ApiService.init(process.env.VUE_APP_ROOT_API);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");
