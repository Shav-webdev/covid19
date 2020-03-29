import axios from "axios";

export function sendData(data) {
    console.log(data);
    axios
        .post("https://still-ravine-65213.herokuapp.com/users", data)
        .then(res => console.log(res))
        .catch(e => console.log(e.message));
}
