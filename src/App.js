import "./scss/all.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/start/Login";
import Register from "./pages/start/Register";
import Home from "./pages/start/Home";
import Header from "./components/Header";
import Reset from "./components/Reset";
import Client from "./pages/start/Client";
import Recipes from "./pages/Recipes";
import List2 from "./pages//List2";
import Single from "./pages/Single";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route  path="/login" element={<Login/>}/>
        <Route  path="/register" element={<Register/>}/>
        <Route  path="/reset" element={<Reset/>}/>
        <Route  path="/client" element={<Client/>}/>
        <Route  path="/recipes" element={<Recipes/>}/>
        <Route  path="/recipes/:category" element={<List2/>}/>
        <Route  path="/recipes/:category/:id" element={<Single/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
