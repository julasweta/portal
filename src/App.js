import "./scss/all.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/start/Login";
import Register from "./pages/start/Register";
import Home from "./pages/start/Home";
import Header from "./components/Header";
import Reset from "./components/Reset";
import Client from "./pages/start/Client";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="*" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/reset" element={<Reset/>}/>
        <Route  path="/client" element={<Client/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
