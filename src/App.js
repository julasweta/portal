import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/start/Login";
import Register from "./components/start/Register";
import Home from "./components/start/Home";

function App() {
  return (
    <Routes>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Routes>
  );
}

export default App;
