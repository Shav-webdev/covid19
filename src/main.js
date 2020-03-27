import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";

Vue.use(VueGoogleMaps, {
    load: {
        key: "AIzaSyBBK8gU-tOST60l16PzAu4iVM-UnY_-VZ0",
        libraries: "places",
    },

    installComponents: true,
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");
