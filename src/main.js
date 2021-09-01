import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");

window.onerror = function (msg, url, line) {
  alert(
    `Упс,какая-то ошибка в получении данных. Давайте попробуем еще раз. Или если не получится напишите горе-разработчикам! Спасибо  ${msg} ${url} ${line}`
  );
};
