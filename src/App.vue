<template>
    <div id="app">
        <Header>
            <div class="user_presentation" v-show="isUserNameVisible">
                <span>Nice to see you {{userNameFromLS}}</span>
            </div>
        </Header>
        <GoogleMap :users="userLocations" />
        <UsersTable :users="users"></UsersTable>
        <ModalForm :latitude="latitude" :longitude="longitude"></ModalForm>
    </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap.vue";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import UsersTable from "@/components/UsersTable";
import { getUsers } from "@/services/services";

export default {
    name: "App",
    components: {
        GoogleMap,
        Header,
        UsersTable,
        ModalForm,
    },
    computed: {
        users() {
            return this.$store.state.users.map((user) => {
                const currentYear = new Date().getFullYear();
                const userBirthday = new Date(user.birthday).getFullYear();
                return {
                    firstName: user.firstName,
                    lastName: user.lastName,
                    temperature: user.temperature,
                    birthday: `${currentYear - userBirthday} / ${userBirthday}`,
                };
            });
        },
        userLocations() {
            return this.$store.state.users.map((user) => {
                return {
                    name: user.firstName,
                    lat: parseFloat(user.location.coordinates[1]),
                    lng: parseFloat(user.location.coordinates[0]),
                };
            });
        },
    },
    data() {
        return {
            latitude: "",
            longitude: "",
            locationStatus: false,
            locationStatusText: "",
            usersData: this.users,
            usersLocations: [],
            isUserNameVisible: null,
            userNameFromLS: "",
        };
    },
    methods: {
        getUsersData(obj) {
            const data = {
                longitude: obj.longitude,
                latitude: obj.latitude,
            };
            this.usersData = getUsers(data);
        },
    },
    beforeCreate() {
        const that = this;
        function success(pos) {
            const crd = pos.coords;
            that.latitude = crd.latitude;
            that.longitude = crd.longitude;
            that.getUsersData(that);
        }
        function error(err) {
            console.warn(`ERROR(${err.code}): ${err.message}`);
        }

        if (!navigator.geolocation) {
            this.locationStatusText =
                "Geolocation is not supported by your browser";
            this.locationStatus = false;
        } else {
            this.locationStatusText = "Locating...";
            this.locationStatus = true;
            navigator.geolocation.getCurrentPosition(success, error);
        }
    },
    created(){
        const nameLS = localStorage.getItem("user");
        if (nameLS){
            this.isUserNameVisible = true;
            this.userNameFromLS = nameLS;
        }
    }
};
</script>

<style>
    .user_presentation {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        padding: 0 3rem;
    }
</style>
