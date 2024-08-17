import axios from "axios";

export default function loginRequest(username, password) {
  return new Promise((resolve, reject) => {
    axios
      .post("http://209.97.157.67//api/sign_in", {
        username,
        password
      })
      .then((response) => {
        if (response.data.token) {
          localStorage.setItem("token", response.data.token);
          resolve(true);
        } else {
          reject(false);
        }
      })
      .catch((error) => {
        reject(error);
      });
  });
}
