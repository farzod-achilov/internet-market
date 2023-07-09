import axios from "axios";
import { useContext, useRef, useState } from "react";
import eye from "../../assets/eye.png";
import closedEye from "../../assets/closed-eye.png";
import { AuthContext } from "../../context/AuthContent";

export default function Login() {
  const elForm = useRef(null);
  const elPassword = useRef(null);
  const { logIn } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handelePassword(evt) {
    const inputPassword = elPassword.current;

    if (inputPassword.type === "text") {
      inputPassword.setAttribute("type", "password");
      evt.target.setAttribute("src", eye);
    } else {
      inputPassword.setAttribute("type", "text");
      evt.target.setAttribute("src", closedEye);
    }
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(elForm.current);

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: formData.get("email"),
        password: formData.get("password"),
      })
      .then((data) => {
        if (data.data.access_token && data.data.refresh_token) {
          logIn(data.data);
        } else {
          setError(new Error(data.data.error.message || "Unexpected Error"));
        }
      })
      .catch((err) => setError(err))
      .finally(() => setLoading(false));
  }

  return (
    <>
      <div className="register-wrapper">
        <div className="register">
          <form onSubmit={handleSubmit} ref={elForm}>
            {error && <small>{error.toString()}</small>}
            <div>
              <label htmlFor="email">Email</label>
              <input
                required
                placeholder="Email..."
                id="email"
                name="email"
                type="text"
              />
            </div>
            <div className="register__password">
              <label htmlFor="password">Password:</label>
              <input
                ref={elPassword}
                placeholder="Password"
                required
                name="password"
                id="password"
                type="password"
              />
              <img
                className="register__eye"
                onClick={(evt) => handelePassword(evt)}
                src={eye}
                width={20}
                height={20}
                alt="eye"
              />
            </div>
            <button type="submit">{loading ? "loading" : "Login"}</button>
          </form>
        </div>
      </div>
    </>
  );
}
