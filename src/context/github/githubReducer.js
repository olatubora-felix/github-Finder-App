import {
  SEARCH_USERS,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS,
  SET_LOADING,
} from '../types';

const GithubReducer = (state, action) => {
  switch (action.type) {
    // Search User
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false
      };
    
    // Clear User
    case CLEAR_USERS:
      return {
        ...state,
        users: [],
        loading: false
      };
    
    // Get User
    case GET_USER:
      return {
        ...state,
        user: action.payload,
        loading: false
      };
    
    // Get Repos
    case GET_REPOS:
      return {
        ...state,
        repos: action.payload,
        loading: false
      };
    
    // Set Loading
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};


export default GithubReducer;