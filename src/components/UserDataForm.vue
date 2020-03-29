<template>
    <div class="modal-card">
        <header class="modal-card-head">
            <p class="modal-card-title">Login</p>
        </header>
        <section class="modal-card-body">
            <div class="columns">
                <div class="column is-half">
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
                    <b-button
                            @click="onFindBtnClick"
                            type="is-success">
                        Find my location
                    </b-button>
                    <div>
                        <p><strong>Latitude: </strong>{{ latitude }}</p>
                        <p><strong>Longitude: </strong>{{ longitude }}</p>
                    </div>

                </div>
                <div class="column is-half">
                    <b-field
                        label="Temperature"
                        type="is-success"
                        message="This username is available"
                    >
                        <b-input v-model="temperature" maxlength="30"></b-input>
                    </b-field>
                    <b-field label="Birth date">
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
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">
                Close
            </button>
            <button class="button is-primary" @click="onSendBtnClick">
                Send
            </button>
        </footer>
    </div>
</template>

<script>
import { sendData } from "../../src/services/services";

export default {
    name: "UserDataForm",
    data() {
        return {
            firstName: "",
            lastName: "",
            temperature: "",
            fullYear: new Date(),
            latitude: "",
            longitude: "",
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

            console.log(data);
            sendData(data);
        },
        onFindBtnClick() {
            const that = this;
            function success(pos) {
                console.log("Position is:", pos);
                const crd = pos.coords;
                that.latitude = crd.latitude;
                that.longitude = crd.longitude;
            }
            function error(err) {
                console.warn(`ERROR(${err.code}): ${err.message}`);
            }

            navigator.geolocation.getCurrentPosition(success, error);
        },
    },
};
</script>

<style scoped></style>
