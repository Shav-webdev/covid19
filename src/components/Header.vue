<template>
    <b-navbar fixed-top type="is-primary">
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary">
                        <strong>Add my details</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
  export default {
    name: "Header"
  };
</script>

<style scoped>

</style>