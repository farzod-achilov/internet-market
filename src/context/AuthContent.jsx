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

function getIdFromStorege() {
  try {
    const id = JSON.parse(localStorage.getItem("id"));

    return id;
  } catch (error) {
    console.log(error);
  }
}

export const AuthContext = createContext(getAuthFromStorege());
export const UserId = getIdFromStorege();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(getAuthFromStorege());
  const [id, setId] = useState(getIdFromStorege());
  const [home, setHome] = useState(true);
  const [search, setSearch] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  function logOut() {
    setAuth(initialContext);
    sessionStorage.removeItem("auth");
    localStorage.removeItem("id");
  }

  function logIn(data) {
    setAuth(data);
    sessionStorage.setItem("auth", JSON.stringify(data));
  }

  function getId(id) {
    setId(id);
    localStorage.setItem("id", JSON.stringify(id));
  }
  return (
    <AuthContext.Provider
      value={{
        auth,
        logOut,
        logIn,
        getId,
        id,
        home,
        setHome,
        search,
        setSearch,
        modalOpen,
        setModalOpen,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
