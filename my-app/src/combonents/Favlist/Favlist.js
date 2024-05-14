import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
// import { Navbar } from './Navbar/Navbar.js';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import axios from "axios";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";
import Updatefav from "./Updatefav";

export default function Favlist() {
  const [favmovies, setfavmovies] = useState([]);
  const getmovie = async () => {
    const url = "http://localhost:8080/getMovies";
    const getmovie = await fetch(url);
    const data = await getmovie.json();

    setfavmovies(data);
    console.log(favmovies);
  };
  useEffect(() => {
    getmovie();
  }, []);
  const navigate = useNavigate();

  const deletecard = (e) => {
    const con = window.confirm("are you sure");
    if (con) {
      const url = `http://localhost:8080/deletemovie/${e}`;
      const deletecard = axios.delete(url);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    }
  };
  const [showflag,setshowflag] = useState(false)
  const [moviename , setmoviename] = useState({});
  const handelflag =(item)=>{
      setshowflag(true );
      setmoviename(item)      
  }
  const handelclose =()=>{
      setshowflag(false)
  }

  return (
    <div className="container">
      <Navbar></Navbar>
      <Row xs={1} md={2} className="g-4  ">
        {favmovies.map((ele) => {
          return (
            <Col>
              <Card className="" style={{ width: "18rem" }}>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w185${ele.poster_path}`}
                  alt="not found"
                />
                <Card.Body>
                  <Card.Title className="p-2 m-2">{ele.title}</Card.Title>
                  <Card.Title className="p-2 m-2">{ele.comments}</Card.Title>

                  <div className="text-end">
                    <Button
                      variant="danger"
                      onClick={() => {
                        deletecard(ele.id);
                      }}
                    >
                      Delete
                    </Button>{" "}
                    <Button variant="info" onClick={()=>{handelflag(ele)}}>Update</Button>{" "}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
      <Updatefav show = {showflag} close = {handelclose} card = {moviename} ></Updatefav>
    </div>
  );
}
