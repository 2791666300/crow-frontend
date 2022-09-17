import { useEffect, useReducer, createContext } from "react";

import { createAction } from "../utils/reducer/reducer.utils";

export const UserContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  SET_LOCALSTORAGE: "SET_LOCALSTORAGE",
};

const INITIAL_STATE = {
  currentUser: null,
  LocalStorage: null,
};

export const userReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    case USER_ACTION_TYPES.SET_LOCALSTORAGE:
      return {
        ...state,
        LocalStorage: payload,
      };
    default:
      throw new Error(`没有${type}类型的action`);
  }
};


export const UserProvider = ({ children }) => {
  // const [currentUser, setCurrentUser] = useState(null);
  const [{ currentUser, LocalStorage }, dispatch] = useReducer(
    userReducer,
    INITIAL_STATE
  );

  // const setCurrentUser = (user) => {
  //   dispatch({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user });
  // };
  const setCurrentUser = (user) => {
    dispatch(createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };

  const setLocalstorage = (local) => {
    dispatch({ type: USER_ACTION_TYPES.SET_LOCALSTORAGE, payload: local });
  };

  useEffect(() => {
    setLocalstorage(localStorage);
  }, [currentUser]);

  useEffect(() => {
    let user = {};
    if (localStorage.name) {
      user = localStorage;
    } else {
      user = null;
    }

    setCurrentUser(user);
  }, [LocalStorage]);
  const value = { currentUser, setCurrentUser };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
