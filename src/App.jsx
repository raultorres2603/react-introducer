import { useState } from "react";
import { Register } from "./components/Register";
import { Login } from "./components/Login";
import { MainMenu } from "./components/MainMenu";
import "./App.css";

export function App() {
  const [view, setView] = useState("register");

  function changeView(ev) {
    view == "login" ? setView("register") : setView("login");
  }

  function renderView(ev) {
    switch (view) {
      case "register":
        return <Register />;
        break;
      case "login":
        return <Login />;
        break;
      case "main":
        return <MainMenu />;
        break;
      default:
        break;
    }
  }

  return (
    <>
      <div className="appContainer">
        {renderView()}
        <button onClick={changeView}>CAMBIAR VISTA</button>
      </div>
    </>
  );
}
