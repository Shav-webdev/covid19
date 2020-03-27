<template>
  <div id="app">
    <Header></Header>
    <GoogleMap />
    <ModalForm ></ModalForm>
  </div>
</template>

<script>

import GoogleMap from './components/GoogleMap.vue'
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";

export default {
  name: 'App',
  components: {
    GoogleMap,
    Header,
    ModalForm
  },
  data() {
    return {

    }
  },
  methods: {

  },

}
</script>

<style>

</style>
