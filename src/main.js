import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy)

Vue.use(VueGoogleMaps, {
    load: {
        key: "",
        libraries: "places",
    },

    installComponents: true,
});

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
}).$mount("#app");
