<template>
    <ValidationObserver v-slot="{ invalid }" ref="form">
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title has-text-centered">
                Complete all fields
            </p>
        </header>
        <section class="modal-card-body">
                <form>
                    <div class="columns">
                        <div class="column is-half is-offset-one-quarter">
                            <b-field class="input_field" label="First name">
                                <ValidationProvider
                                    rules="stringName|required|alpha"
                                    v-slot="{ errors }"
                                >
                                    <b-input
                                        name="First name"
                                        v-model="firstName"
                                    ></b-input>
                                    <span class="help validation_msg">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                            </b-field>
                            <b-field class="input_field" label="Last name">
                                <ValidationProvider
                                    rules="stringLastName|required|alpha"
                                    v-slot="{ errors }"
                                >
                                    <b-input
                                        name="Last name"
                                        v-model="lastName"
                                    ></b-input>
                                    <span class="help validation_msg">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                            </b-field>
                            <b-field class="input_field" label="Temperature">
                                <ValidationProvider
                                    rules="minMax|required"
                                    v-slot="{ errors }"
                                >
                                    <b-input
                                        name="Temperature"
                                        v-model="temperature"
                                    ></b-input>
                                    <span class="help validation_msg">{{
                                        errors[0]
                                    }}</span>
                                </ValidationProvider>
                            </b-field>
                            <b-field class="input_field" label="Birth date">
                                <b-datepicker
                                    placeholder="Type or select a date..."
                                    position="is-top-left"
                                    icon-pack="mdi"
                                    icon="calendar-today"
                                    min="1920-01-01"
                                    max="2015-01-01"
                                    v-model="fullYear"
                                    editable
                                >
                                </b-datepicker>
                            </b-field>
                        </div>
                    </div>
                </form>

        </section>
        <footer class="modal-card-foot">
            <div class="btn_wrapper">
                <button class="button" type="button" @click="$parent.close()">
                    Close
                </button>
                <button
                    :disabled="invalid"
                    class="button is-primary"
                    @click="onSendBtnClick"
                >
                    Send
                </button>
            </div>
        </footer>
    </div>
    </ValidationObserver>
</template>

<script>
import { sendData } from "../../src/services/services";
import { extend } from "vee-validate";
import { validateName, validateTemperature } from "../services/validations";

extend("stringName", (value) => {
    if (validateName(value)) {
        return true;
    }
    return "This field is not a valid name!";
});

extend("stringLastName", (value) => {
    if (validateName(value)) {
        return true;
    }
    return "This field is not a valid last name!";
});

extend("minMax", (value) => {
    if (validateTemperature(value)) {
        return true;
    }
    return "Temperature must be number from 30 to 50";
});

export default {
    name: "UserDataForm",
    props: {
        latitude: Number,
        longitude: Number,
        closeModal: Function
    },
    data() {
        return {
            firstName: "",
            lastName: "",
            temperature: "",
            fullYear: new Date(),
            isNameValid: false,
            isLastNameValid: false,
            isTemperatureValid: false,
        };
    },
    methods: {
        onSendBtnClick() {
            const data = {
                firstName: this.firstName,
                lastName: this.lastName,
                temperature: this.temperature,
                year: this.fullYear,
                latitude: this.latitude,
                longitude: this.longitude,
            };
            localStorage.setItem("user", `${data.firstName} ${data.lastName}`);

            sendData(data);
            this.closeModal();
            this.isNameValid = this.isLastNameValid = this.isTemperatureValid = "";
            this.fullYear = new Date();
        },
    },
};
</script>

<style scoped>
.btn_wrapper {
    padding-right: 2rem;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
.validation_msg {
    font-size: 12px;
    color: #d20e0c;
    line-height: 1;
}
.input_field {
    margin: 2rem 0;
}
</style>
