import { useContext, useRef, useState } from "react";
import "./Auth.scss";
import axios from "axios";
import eye from "../../assets/eye.png";
import { AuthContext } from "../../context/AuthContent";

export default function Register() {
  const elForm = useRef(null);
  const elPassword = useRef(null);
  const { getId } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [massage, setMassage] = useState(null);

  function handelePassword(evt) {
    const inputPassword = elPassword.current;

    if (inputPassword.type === "text") {
      inputPassword.setAttribute("type", "password");
      evt.target.setAttribute("src", "/src/assets/closed-eye.png");
    } else {
      inputPassword.setAttribute("type", "text");
      evt.target.setAttribute("src", "/src/assets/eye.png");
    }
  }
  function handleSubmit(evt) {
    evt.preventDefault();
    const formData = new FormData(elForm.current);

    axios
      .post("https://api.escuelajs.co/api/v1/users/", {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        avatar: "https://placeimg.com/100/100/",
      })
      .then((data) => {
        getId(data.data.id);
      })
      .catch((err) => setError(err))
      .finally(() => {
        setLoading(false);
        setMassage("You are logged in now click login" || "login");
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
            <div className="register__password">
              <label htmlFor="password">Password:</label>
              <input
                ref={elPassword}
                placeholder="Password..."
                name="password"
                id="password"
                type="text"
                required
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
            <p>{massage}</p>
            <button type="submit">{loading ? "loading" : "Register"}</button>
          </form>
        </div>
      </div>
    </>
  );
}
