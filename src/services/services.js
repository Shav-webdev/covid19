import axios from "axios";

export function sendData(data) {
    console.log(data);
    axios
        .post("/users", data)
        .then(res => console.log(res))
        .catch(e => console.log(e.message));
}

export function getUsers() {
    axios
        .get("/users")
        .then(res => console.log(res))
        .catch(e => console.log(e.message));
}
