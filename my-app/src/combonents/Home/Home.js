import React from 'react'
import Movielist from '../Movielist/Movielist'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useEffect, useState } from 'react'

const Home = () => {
    const [movies,setmovieList] = useState([])
    const getMovie = async ()=>{
        const url = `http://localhost:8080/trending`
         const getmovie = await fetch(url)
         const data= await getmovie.json();
         setmovieList(data)
   
       
    }
    useEffect(()=>{
        getMovie();
        
    },[])
  return (
    <div>
      <Movielist movies ={movies}></Movielist>
    </div>
  )
}

export default Home
