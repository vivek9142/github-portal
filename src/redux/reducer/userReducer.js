import actionsType from "../action/userAction";

const initialState = {
  error: null,
  loading: false,
  external:false,
  user: null
};

let userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.GET_USER_PENDING:
      return {
        error: null,
        loading: true,
        external:null,
        user: null
      };
    case actionsType.GET_USER_SUCCESS_EXTERNAL:
      return {
        error: false,
        loading: false,
        external:true,
        user: action.payload
      };
      case actionsType.GET_USER_SUCCESS:
        return {
          error: false,
          loading: false,
          external:false,
          user: action.payload
        };
    case actionsType.GET_USER_REJECTED:
      return {
        error: action.payload,
        loading: false,
        external:null,
        user: null
      };
    case actionsType.RESET_USER:
        return initialState;
    
    default:
      return state;
  }
};

export default userReducer;
