import actionsType from "../action/usersAction";

const initialState = {
  error: null,
  loading: false,
  users: null
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_USERS_PENDING:
      return {
        error: null,
        loading: true,
        users: null
      };
    case actionsType.GET_USERS_SUCCESS:
      return {
        error: false,
        loading: false,
        users: action.payload
      };
    case actionsType.GET_USERS_REJECTED:
      return {
        error: action.payload,
        loading: false,
        users: null
      };
    default:
      return state;
  }
};

export default usersReducer;
