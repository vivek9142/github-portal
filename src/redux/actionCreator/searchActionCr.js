import actionsType from "../action/searchAction";
import requestUsersData from "./usersActionCr";
import requestUserData from "./userActionCr";

const changeQuery = ({query,page=0,per_page=10,order='Asc'}) => {
  return (dispatch) => {
    dispatch({ type: actionsType.QUERY, payload: {query,page,per_page,order} });
    dispatch(requestUsersData({query,per_page,order}));
  };
};

const changeQueryWithUser = ({query,page=0,per_page=10,order='Asc'},external=false) => {
  return (dispatch) => {
    dispatch({ type: actionsType.QUERY, payload: {query,page,per_page,order} });
    dispatch(requestUsersData({query,per_page,order}));
    dispatch(requestUserData(query,external));
  };
};

export {changeQueryWithUser,changeQuery};
