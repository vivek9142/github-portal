import actionsType from "./searchAction";
import requestUsersData from "./usersActionCr";

const changeQuery = (formData) => {
  return (dispatch) => {
    dispatch({ type: actionsType.QUERY, payload: formData });
    dispatch(requestUsersData(formData));
  };
};

export default changeQuery;
