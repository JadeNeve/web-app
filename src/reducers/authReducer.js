const initState = {
    isLoggedIn: false,
    account: null,
    error: null,
  };
  
  const authReducer = (state = initState, action) => {
    switch (action.type) {
      case 'LOGIN_SUCCESS':
        return {
          ...state,
          isLoggedIn: true,
          account: action.payload.email,
          error: null,
        };
      case 'LOGIN_FAILURE':
        return {
          ...state,
          isLoggedIn: false,
          account: null,
          error: 'Invalid email or password',
        };
      case 'LOGOUT':
        return {
          ...state,
          isLoggedIn: false,
          account: null,
          error: null,
        };
      default:
        return state;
    }
  };
  
  export default authReducer;