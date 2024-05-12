import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Modalmovie from '../Modalmovie/Modalmovie';


import Modal from 'react-bootstrap/Modal';
const Movie = (props) => {
    
    const [showflag,setshowflag] = useState(false)
    const [moviename , setmoviename] = useState({});
    const handelflag =(item)=>{
        setshowflag(true);
        setmoviename(item)      
    }
    const handelclose =()=>{
        setshowflag(false)
    }
   
   
   
   
console.log("poster path :: ",props.showMovie.poster_path);
  return (
    <>
      <Col>
      <Card className='' style={{ width: '18rem' }}>
        <Card.Img  variant="top" src={`https://image.tmdb.org/t/p/w185${props.showMovie.poster_path}`} alt="not found" />
        <Card.Body>
          <Card.Title className='p-2 m-2'>{props.showMovie.title}</Card.Title>
         
          <Button variant="primary" onClick={()=>{handelflag(props.showMovie)}} >add to favorite</Button>
        </Card.Body>
      </Card>

    </Col> 
      
      <Modalmovie showflag ={showflag} close ={handelclose} moviename = {moviename}></Modalmovie>
    </>
 

  )
}

export default Movie
