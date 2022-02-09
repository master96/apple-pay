import logo from "./logo.svg";
import "./App.css";
import OneSignal from "react-onesignal";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    OneSignal.init({
      appId: "08a7b804-dc55-4294-a170-98eaa7f650f7",
      subdomainName: "vivektesting",
    });
    OneSignal.showSlidedownPrompt().then((resp) => {
      console.log(resp);
    });
    OneSignal.getUserId().then((resp) => {
      console.log("getUserId", resp);
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Notification Testing Website</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
