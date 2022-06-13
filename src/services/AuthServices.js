import axios from "axios";

export const loginActionSaga = (data) => {
  return async () => {
    const result = await axios
      .post("http://localhost:3001/api/v1/users/login", data)
      .then((response) => {
        console.log(response);

        return response;
      });
    return result;
  };
};

export const registerActionSaga = (data) => {
  return async () => {
    return await axios
      .post("http://localhost:3001/api/v1/users", data)

      .then((response) => {
        return response;
      });
  };
};
export const logoutActionSaga = () => {
  localStorage.removeItem("user");
};
