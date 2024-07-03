import axios from "axios";

const apiAddress = process.env.REACT_APP_SECRET;

export const loginApi = async (userName, password, type) => {
  var res = await axios
    .get(
      apiAddress +
        "/api/Login?userName=" +
        userName +
        "&password=" +
        password +
        "&type=" +
        type +
        ""
    )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      return error.response.data;
    });
  console.log(res);
  return res;
};
