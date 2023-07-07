import { useContext, useRef, useState } from "react";
import { useUser } from "./queries";
import loading from "../../assets/loading.svg";
import { AuthContext } from "../../context/AuthContent";
import "./Profile.scss";
import axios from "axios";

export default function Profile() {
  const { id, logOut } = useContext(AuthContext);
  const elName = useRef(null);
  const elPassword = useRef(null);
  const elEmail = useRef(null);
  const elForm = useRef(null);
  const [btnName, setBtnName] = useState("Edit");
  const [massage, setMassage] = useState("");

  const { data, isLoading, error } = useUser({
    limit: 1,
  });

  const getDisplayStyle = () => {
    return { display: `${btnName === "Save" ? "block" : "none"}` };
  };
  function handleChange(evt) {
    evt.preventDefault();
    const name = elName.current;
    const password = elPassword.current;
    const email = elEmail.current;
    const formData = new FormData(elForm.current);

    if (btnName === "Edit") {
      name.removeAttribute("disabled");
      password.removeAttribute("disabled");
      email.removeAttribute("disabled");
      evt.target.setAttribute("type", "submit");

      setBtnName("Save");
    } else {
      setBtnName("Edit");
      name.setAttribute("disabled", "");
      password.setAttribute("disabled", "");
      email.setAttribute("disabled", "");
      email.value = "";
      name.value = "";
      password.value = "";

      axios
        .put(`https://api.escuelajs.co/api/v1/users/${id}`, {
          email: formData.get("email"),
          name: formData.get("name"),
          password: formData.get("password"),
        })
        .then((data) => data)
        .catch((err) => err)
        .finally(() => setMassage("Uptaded Profile"));
    }
  }

  return (
    <>
      <section>
        {isLoading && (
          <img src={loading} width={100} height={100} alt="loading" />
        )}
        {error && <small>{error}</small>}
        <div className="container">
          <div className="profile">
            <form ref={elForm}>
              <div>
                <label
                  className={`${
                    btnName === "Edit" ? "unactive-label" : "active-label"
                  }`}
                  htmlFor="name"
                >
                  Your Name:
                </label>
                <input
                  type="text"
                  className={`${
                    btnName === "Edit" ? "unactive-input" : "active-input"
                  }`}
                  // value={data?.data?.name}
                  placeholder={data?.data?.name}
                  id="name"
                  ref={elName}
                  name="name"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  className={`${
                    btnName === "Edit" ? "unactive-label" : "active-label"
                  }`}
                  htmlFor="email"
                >
                  Your Email:
                </label>
                <input
                  type="text"
                  className={`${
                    btnName === "Edit" ? "unactive-input" : "active-input"
                  }`}
                  placeholder={data?.data?.email}
                  ref={elEmail}
                  id="email"
                  name="email"
                  required
                  disabled
                />
              </div>
              <div>
                <label
                  className={`${
                    btnName === "Edit" ? "unactive-label" : "active-label"
                  }`}
                  htmlFor="password"
                >
                  Your Password:
                </label>
                <input
                  type="text"
                  ref={elPassword}
                  className={`${
                    btnName === "Edit" ? "unactive-input" : "active-input"
                  }`}
                  placeholder={data?.data?.password}
                  name="password"
                  required
                  id="password"
                  disabled
                />
              </div>
              <div className="btn-wrapper">
                {massage && <p>{massage}</p>}
                <button onClick={(evt) => handleChange(evt)} type="button">
                  {btnName}
                </button>
                <button type="button" style={getDisplayStyle()}>
                  Cancel
                </button>
                <button onClick={logOut} type="button">
                  Log out
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
