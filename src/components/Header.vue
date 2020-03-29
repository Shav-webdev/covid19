<template>
    <b-navbar fixed-top type="is-primary">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                        src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                        alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                Home
            </b-navbar-item>
            <b-navbar-item tag="div">
                <div class="buttons">
                    <a class="button is-primary" @click="handleAddBtnClick">
                        <strong>Add my details</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
</template>

<script>
import { eventEmitter } from "../main";

export default {
    name: "Header",
    methods: {
        handleAddBtnClick() {
            eventEmitter.$emit("isOpened");
        },
    },
};
</script>

<style scoped></style>
