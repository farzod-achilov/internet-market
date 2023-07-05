import { createContext, useState } from "react";

const initialContext = {
  access_token: null,
  refresh_token: null,
};

function getAuthFromStorege() {
  try {
    const auth = JSON.parse(sessionStorage.getItem("auth"));

    return auth || initialContext;
  } catch (error) {
    return initialContext;
  }
}

function getUserFromStorege() {
  try {
    const user = JSON.parse(sessionStorage.getItem("user"));

    return user;
  } catch (error) {
    error;
  }
}

export const AuthContext = createContext(getAuthFromStorege());

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(getAuthFromStorege());
  const [user, setUser] = useState(getUserFromStorege());

  function logoOut() {
    setAuth(initialContext);
    sessionStorage.removeItem("auth");
  }

  function logIn(data) {
    setAuth(data);
    sessionStorage.setItem("auth", JSON.stringify(data));
  }

  function getUser(user) {
    setUser(user);
    sessionStorage.setItem("id", JSON.stringify(user));
  }
  return (
    <AuthContext.Provider value={{ auth, logoOut, logIn, getUser, user }}>
      {children}
    </AuthContext.Provider>
  );
}
