import { useContext } from "react";
import { AuthContext } from "./context/AuthContent";
import AuthorizedApp from "./components/auth/AuthorizedApp";
import UnAuthorizedApp from "./components/auth/UnAuthorizedApp";

function App() {
  const { auth } = useContext(AuthContext);
  return auth.jwt ? <AuthorizedApp /> : <UnAuthorizedApp />;
}

export default App;
