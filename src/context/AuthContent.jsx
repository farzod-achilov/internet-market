import { createContext, useState } from "react";

const initalContext = {
  access_token: null,
  refresh_token: null,
};

export const AuthContext = createContext(initalContext);

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(initalContext);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
}
