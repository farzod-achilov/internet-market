import axios from "axios";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContent";

export default function Login() {
  const elForm = useRef(null);
  const { setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(elForm.current);

    axios
      .post("https://api.escuelajs.co/api/v1/auth/login", {
        email: formData.get("email"),
        password: formData.get("password"),
      })
      .then((data) => setAuth(data.data))
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
            <div>
              <label htmlFor="password">Password:</label>
              <input
                placeholder="Password"
                required
                name="password"
                id="password"
                type="text"
              />
            </div>
            <button type="submit">{loading ? "loading" : "Login"}</button>
          </form>
        </div>
      </div>
    </>
  );
}
