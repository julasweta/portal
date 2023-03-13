import "./scss/all.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/start/Login";
import Register from "./pages/start/Register";
import Home from "./pages/start/Home";
import Header from "./components/Header";
import Reset from "./components/Reset";
import Client from "./pages/start/Client";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setResipes}  from "./redux/slices/postsSlice";

function App() {
  const { resipes } = useSelector((state) => state.posts);

  const dispatch = useDispatch();
 useEffect(() => {
    axios
      .get(`https://api.jsonbin.io/v3/b/640e569ac0e7653a0586ccae`)
      .then((response) => {
       console.log(response.data.record[0]);
     response.data.record.map(post=> dispatch(setResipes(post)))
      })
      .catch((error) => {
        console.log(error);
      });
  }, [dispatch]);
  

console.log(resipes);

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
