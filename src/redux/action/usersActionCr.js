import actionsType from "./usersAction";
import axios from "axios";

const requestUsersData = ({ query, per_page, order }) => {
  return async (dispatch) => {
    dispatch({ type: actionsType.GET_REQ_PENDING });

    await axios
      .get(
        `https://api.github.com/search/users?q=${query}&page=0&per_page=${per_page}&order=${order}`
      )
      .then(
        (res) => {
          dispatch({ type: actionsType.GET_REQ_SUCCESS, payload: res.data });
        },
        (err) => {
          console.log(err);
          dispatch({ type: actionsType.GET_REQ_REJECTED, payload: err });
        }
      );
  };
};

export default requestUsersData;
