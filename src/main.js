import Vue from "vue";
import App from "./App.vue";
import * as VueGoogleMaps from "vue2-google-maps";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import {
    ValidationObserver,
    ValidationProvider,
    extend,
    localize,
} from "vee-validate";
import en from "vee-validate/dist/locale/en.json";
import * as rules from "vee-validate/dist/rules";
import { store } from "@/vuex/store";

Vue.use(Buefy);

Vue.use(VueGoogleMaps, {
    load: {
        key: "",
        libraries: "places",
    },
    installComponents: true,
});

Object.keys(rules).forEach((rule) => {
    extend(rule, rules[rule]);
});

localize("en", en);

Vue.component("ValidationObserver", ValidationObserver);
Vue.component("ValidationProvider", ValidationProvider);

export const eventEmitter = new Vue();

Vue.config.productionTip = false;

new Vue({
    store,
    render: (h) => h(App),
}).$mount("#app");
