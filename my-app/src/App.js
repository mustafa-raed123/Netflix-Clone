import logo from "./logo.svg";
import "./App.css";
import Home from "./combonents/Home/Home";
import { Route, Routes } from "react-router";
import Favlist from "./combonents/Favlist/Favlist";
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="Favorite" element={<Favlist></Favlist>}></Route>
      </Routes>
    </>
  );
}

export default App;
