import axios from "axios";

const user = JSON.parse(localStorage.getItem("user"));
export const APIgetTodoSaga = () => {
  return axios.get("http://localhost:3001/api/v1/todos", {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
};
export const APIAddTodoSaga = (payload) => {
  const data = {
    title: payload,
  };
  return axios.post("http://localhost:3001/api/v1/todos", data, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
};

export const APIDeleteTodoSaga = (id) => {
  return axios.delete(`http://localhost:3001/api/v1/todos/${id}`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });
};

export const APIEditTodoSaga = (id, text) => {
  return async () => {
    const data = {
      title: text,
    };
    return await axios
      .post(`http://localhost:3001/api/v1/todos/${id}`, data, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        return response;
      });
  };
};
export const APICompleteTodoSaga = (payload) => {
  return async () => {
    const status = payload.status === "true" ? false : true;
    return await axios
      .post(
        `http://localhost:3001/api/v1/todos/${payload.id}`,
        {
          title: payload.title,
          status: status,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        return response;
      });
  };
};
