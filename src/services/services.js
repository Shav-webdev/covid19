import axios from "axios";
import { SnackbarProgrammatic as Snackbar } from "buefy";
import { store } from "@/vuex/store";

export function sendData(data) {
    axios
        .post("https://still-ravine-65213.herokuapp.com/users", data)
        .then((res) => {
            Snackbar.open({
                message: res.data.message,
                type: "is-success",
                position: "is-top",
                actionText: "Close",
                indefinite: true,
            });
        })
        .catch((e) => {
            Snackbar.open({
                message: e.message,
                type: "is-danger",
                position: "is-top",
                actionText: "Close",
                indefinite: true,
            });
        });
}

export function getUsers(params) {
    let users = [];
    if (params) {
        axios
            .get("https://still-ravine-65213.herokuapp.com/users", {
                params: params,
            })
            .then((res) => {
                if (res.data.length === 0) {
                    users = [];
                } else {
                    store.commit("getUsers", res.data);
                    users.push(...res.data);
                }
            })
            .catch((e) => console.log(e.message));
    }
}
