<template>
    <section>
        <b-modal
            :active.sync="isOpenModal"
            has-modal-card
            trap-focus
            aria-role="dialog"
            aria-modal
        >
            <UserDataForm> </UserDataForm>
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
    data() {
        return {
            isOpenModal: false,
        };
    },
    created() {
        eventEmitter.$on("isOpened", () => {
            this.isOpenModal = true;
        });
    },
};
</script>
