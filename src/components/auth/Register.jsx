import { useContext, useRef, useState } from "react";
import "./Auth.scss";
import axios from "axios";
import { AuthContext } from "../../context/AuthContent";
export default function Register() {
  const elForm = useRef(null);
  const { setAuth } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(elForm.current);

    axios.post("https://api.escuelajs.co/api/v1/users/", {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
      avatar: "https://placeimg.com/100/100/",
    });
  }
  return (
    <>
      <div className="register-wrapper">
        <div className="register">
          <form onSubmit={handleSubmit} ref={elForm}>
            {error && <small>{error.toString()}</small>}
            <div>
              <label htmlFor="name">Name:</label>
              <input
                placeholder="Username..."
                id="name"
                name="name"
                type="text"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <input
                placeholder="Email..."
                id="email"
                name="email"
                type="email"
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                placeholder="Password..."
                name="password"
                id="password"
                type="text"
                required
              />
            </div>
            <button type="submit">{loading ? "loading" : "Register"}</button>
          </form>
        </div>
      </div>
    </>
  );
}
