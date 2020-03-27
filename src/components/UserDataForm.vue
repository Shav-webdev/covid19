<template>
        <div class="modal-card">
            <header class="modal-card-head">
                <p class="modal-card-title">Login</p>
            </header>
            <section class="modal-card-body">
                <b-field
                    label="First name"
                    type="is-success"
                    message="This username is available"
                >
                    <b-input v-model="firstName" maxlength="30"></b-input>
                </b-field>
                <b-field
                    label="Last name"
                    type="is-success"
                    message="This username is available"
                >
                    <b-input v-model="lastName" maxlength="30"></b-input>
                </b-field>
                <b-field
                    label="Temperature"
                    type="is-success"
                    message="This username is available"
                >
                    <b-input v-model="temperature" maxlength="30"></b-input>
                </b-field>
                <b-field>
                    <b-datepicker
                        icon-next="chevron-right"
                        icon-prev="chevron-left"
                        icon-pack="mdi"
                        v-model="fullYear"
                        position="is-top-left"
                        min="1920-01-01"
                        max="2015-01-01"
                        ref="datepicker"
                        expanded
                        placeholder="Select a date"
                    >
                    </b-datepicker>
                    <b-button
                        @click="$refs.datepicker.toggle()"
                        icon-left="calendar-today"
                        type="is-primary"
                    />
                </b-field>
            </section>
            <footer class="modal-card-foot">
                <button class="button" type="button" @click="$parent.close()">
                    Close
                </button>
                <button class="button is-primary" @click="onSendBtnClick">Send</button>
            </footer>
        </div>
</template>

<script>
    import {sendData} from "../../src/services/services"


export default {
    name: "UserDataForm",
    data() {
        return {
            firstName: "",
            lastName: "",
            temperature: "",
            fullYear: new Date()
        }
    },
    methods:{
        onSendBtnClick() {
            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                temperature: this.temperature,
                year: this.fullYear,
            };

            console.log(data);
            sendData(data)
        },

    }
};
</script>

<style scoped></style>
