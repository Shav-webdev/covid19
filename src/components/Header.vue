<template>
    <b-navbar fixed-top type="is-primary">
        <template slot="brand">
            <b-navbar-item :href=" '/'">
                <img
                    :src="logo"
                    alt="Covid19"
                />
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="div">

                <div class="buttons">
                    <a class="button is-success" @click="handleAddBtnClick">
                        <strong>Add my details</strong>
                    </a>
                </div>
            </b-navbar-item>
        </template>
        <template slot="end">
            <slot></slot>
        </template>
    </b-navbar>
</template>

<script>
import { eventEmitter } from "../main";
import logo from "../assets/images/logo.jpg";

export default {
    name: "Header",
    data: function () {
        return {
            logo: logo,
        };
    },
    methods: {
        handleAddBtnClick() {
            eventEmitter.$emit("isOpened");
        },
    },
};
</script>

<style scoped></style>
