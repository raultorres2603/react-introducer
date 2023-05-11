import { useState } from "react";
import ReactDOM from "react-dom/client";
import { MainMenu } from "./MainMenu";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleChange(ev) {
    switch (ev.target.id) {
      case "username":
        setUsername(ev.target.value);
        break;

      case "password":
        setPassword(ev.target.value);
        break;
      default:
        break;
    }
  }

  function handleEnter(ev) {
    ReactDOM.createRoot(document.getElementById("registerContainer")).render(
      <MainMenu user={{ username: username, password: password }} />
    );
  }

  return (
    <>
      <div className="registerContainer" id="registerContainer">
        <div className="row">
          <div className="card">
            <div className="card-header display-3 bg-info">Login</div>
            <div className="card-body">
              <form action="" method="post">
                <div className="row">
                  {" "}
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="username"
                      onInput={handleChange}
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3">
                    <label
                      for="exampleFormControlInput1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onInput={handleChange}
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <button
                    type="button"
                    onClick={handleEnter}
                    className="btn btn-success"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
