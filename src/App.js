import logo from "./logo.svg";
import "./App.css";
import Auth from "./components/Auth";
import { BrowserRouter } from "react-router-dom";
import Routes from "./components/Routes";
import Nav from "./components/Nav";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>
          <Nav />
        </h1>
        <Routes />
      </div>
    </BrowserRouter>
  );
}

export default App;
