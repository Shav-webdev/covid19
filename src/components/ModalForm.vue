<template>
    <section>
        <b-modal
            :active.sync="isOpenModal"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal
        >
            <UserDataForm :closeModal="closeModal" :latitude="latitude" :longitude="longitude">
            </UserDataForm>
        </b-modal>
    </section>
</template>

<script>
import { eventEmitter } from "../main";
import UserDataForm from "./UserDataForm";

export default {
    components: {
        UserDataForm,
    },
    props: ["latitude", "longitude"],
    data() {
        return {
            isOpenModal: false,
        };
    },
    methods: {
        closeModal() {
            this.isOpenModal = false;
        }
    },
    created() {
        eventEmitter.$on("isOpened", () => {
            this.isOpenModal = true;
        });
    },
};
</script>
