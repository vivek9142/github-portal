import actionsType from "../action/userAction";
import axios from "axios";

const requestUserData = ( user,external=false ) => {
  return async (dispatch) => {
    dispatch({ type: actionsType.GET_USER_PENDING });

    await axios
      .get(
        `https://api.github.com/users/${user}`
      )
      .then(
        (res) => {
          console.log(res);
          if(external)
          dispatch({ type: actionsType.GET_USER_SUCCESS_EXTERNAL, payload: res.data });
          else dispatch({ type: actionsType.GET_USER_SUCCESS, payload: res.data });
          
        },
        (err) => {
          console.log(err);
          dispatch({ type: actionsType.GET_USER_REJECTED, payload: err });
        }
      );
  };
};

const resetUserData = () => ({type:actionsType.RESET_USER});

export  {requestUserData,resetUserData};
