import {
  ADD_USER,
  DELETE_USER,
  FAIL_REQUEST,
  GET_USER_LIST,
  GET_USER_OBJ,
  MAKE_REQUEST,
  SET_LOGIN,
  UPDATE_USER,
} from "./actionType";

const initialState = {
  loading: true,
  userlist: [],
  userobj: {},
  errmessage: "",
  setLogin:null,
};

export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case MAKE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FAIL_REQUEST:
      return {
        ...state,
        errmessage: action.payload,
        loading: false,
      };
    case GET_USER_LIST:
      return {
        loading: false,
        userlist: action.payload,
        errmessage: "",
        userobj: {},
      };
    case ADD_USER:
      return {
        ...state,
        loading: false,
      };
    case DELETE_USER:
      return {
        ...state,
        loading: false,
      };
    case UPDATE_USER:
      return {
        ...state,
        loading: false,
      };
    case GET_USER_OBJ:
      return {
        ...state,
        loading: false,
        userobj: action.payload,
      };
      case SET_LOGIN:
        return {
          ...state,
          loading:false,
          setLogin:action.payload,
        }
    default:
      return state;
  }
};
