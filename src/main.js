/*
 * @Descripttion:
 * @Author: sjq
 * @Date: 2020-04-28 17:13:54
 * @LastEditors: sjq
 * @LastEditTime: 2020-05-27 14:36:13
 */
import Vue from "vue";
import App from "./App.vue";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

Vue.use(ElementUI);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
