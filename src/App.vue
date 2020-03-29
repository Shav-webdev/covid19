<template>
  <div id="app">
    <Header></Header>
    <GoogleMap />
    <UsersTable></UsersTable>
    <ModalForm ></ModalForm>
  </div>
</template>

<script>

import GoogleMap from './components/GoogleMap.vue'
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import UsersTable from "@/components/UsersTable";

export default {
  name: 'App',
  components: {
    GoogleMap,
    Header,
    UsersTable,
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
