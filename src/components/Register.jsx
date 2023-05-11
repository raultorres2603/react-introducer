import { useEffect, useState } from "react";

export function Register(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    console.log("Register montado");
    return () => {
      console.log("Componente desmontado");
    };
  }, []);

  function handleForm(ev) {
    ev.preventDefault();
    alert(`Username: ${username} || Password: ${password}`);
  }

  function handleInput(ev) {
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

  return (
    <>
      <div className="registerContainer">
        <div className="row">
          <div className="card">
            <div className="card-header display-3 bg-warning">Register</div>
            <div className="card-body">
              <form onSubmit={handleForm} method="post">
                <div className="row">
                  {" "}
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Username
                    </label>
                    <input
                      type="text"
                      onInput={handleInput}
                      className="form-control"
                      id="username"
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="mb-3">
                    <label
                      htmlFor="exampleFormControlInput1"
                      className="form-label"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onInput={handleInput}
                      placeholder="name@example.com"
                    />
                  </div>
                </div>
                <div className="row">
                  <button type="submit" className="btn btn-success">
                    Register
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
