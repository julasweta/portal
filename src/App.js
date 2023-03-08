import "./App.css";
import { BrowserRouter, Routes, Route, Redirect } from "react-router-dom";
import Login from "./pages/start/Login";
import Register from "./pages/start/Register";
import Home from "./pages/start/Home";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
