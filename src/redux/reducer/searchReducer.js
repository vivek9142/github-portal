import actionsType from "../action/searchAction";

const initialState = {
  query: "",
  page:0,
  per_page: 10,
  order: "Asc"
};

let searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionsType.QUERY:
      return {
        query: action.payload.query,
        page:action.payload.page,
        per_page: action.payload.per_page,
        order: action.payload.order
      };

    default:
      return state;
  }
};

export default searchReducer;
