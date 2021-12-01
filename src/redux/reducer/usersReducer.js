import actionsType from "../action/usersAction";

const initialState = {
  error: null,
  loading: false,
  post: null
};

let usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_REQ_PENDING:
      return {
        error: null,
        loading: true,
        post: null
      };
    case actionsType.GET_REQ_SUCCESS:
      return {
        error: false,
        loading: false,
        post: action.payload
      };
    case actionsType.GET_REQ_REJECTED:
      return {
        error: action.payload,
        loading: false,
        post: null
      };
    default:
      return state;
  }
};

export default usersReducer;
