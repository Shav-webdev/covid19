import axios from "axios";

export function sendData(data) {
    console.log(data);
    axios
        .post("/user", data)
        .then(res => console.log(res))
        .catch(e => console.log(e.message));
}
