import { useContext, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContent";
import axios from "axios";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const elForm = useRef(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);

  //  function handleEdit() {
  //     const formData = new FormData(elForm.current);

  //     console.log(formData.get("user"));
  //   }

  // getUser(user.id);
  function getUser(id) {
    for (let i = 0; i < 1; ) {
      axios
        .get(`https://api.escuelajs.co/api/v1/users/${id}`)
        .then((data) => {
          setUsers(data.data);
        })
        .catch((err) => setError(err))
        .finally(() => {
          setLoading(false);
          setMassage("You are logged in now click login" || "login");
        });
      break;
    }
  }

  return (
    <>
      <section>
        <div className="container">
          <div className="proflie">
            {console.log(users)}
            <form ref={elForm}>
              <input
                type="text"
                id="user"
                name="user"
                disabled
                value={user.name}
              />
              <input
                type="text"
                id="user"
                name="user"
                disabled
                value={user.email}
              />
              <input type="text" name="user" disabled value={user.password} />
              <button type="button" onClick={() => handleEdit()}>
                Edit
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
