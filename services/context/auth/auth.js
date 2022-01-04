import React, { createContext, useCallback, useMemo, useReducer } from 'react';
import { useApolloClient } from '@apollo/client';
// import jwtDecode from 'jwt-decode';

const initialState = {
  user: null,
};

// const token = localStorage.getItem('accessToken');

// if (token) {
//   const decodedToken = jwtDecode(token);

//   // Expiration timestamp is in seconds and not in milliseconds
//   if (decodedToken.exp < Math.round(Date.now() / 1000)) {
//     localStorage.removeItem('accessToken');
//   } else {
//     initialState.user = {
//       userId: decodedToken.userId,
//       isAdmin: decodedToken.isAdmin,
//     };
//   }
// }

const AuthContext = createContext({
  user: null,
  login: (userToken) => userToken,
  logout: () => {},
});

const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);
  const client = useApolloClient();

  const login = useCallback((userToken) => {
    localStorage.setItem('accessToken', userToken);
    // const decodedToken = jwtDecode(userData);
    // payload: { userId: decodedToken.userId, isAdmin: decodedToken.isAdmin },
    dispatch({
      type: 'LOGIN',
      payload: { userId: true, isAdmin: false },
    });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('accessToken');
    client.clearStore();
    dispatch({ type: 'LOGOUT', payload: null });
  }, [client]);

  const value = useMemo(() => {
    return { user: state.user, login, logout };
  }, [state.user, login, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthProvider, AuthContext };
