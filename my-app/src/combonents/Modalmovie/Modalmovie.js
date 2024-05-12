import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
const Modalmovie = (props) => {
  const [comment,setcomment] =useState('')
 


  
  const addmovietodb = async () => {
     
      const obj = {
        id: props.moviename.id,
        title: props.moviename.title,
        poster_path: props.moviename.poster_path,
        overview: props.moviename.overview,
        release_date: props.moviename.release_date,
        comments : comment
      };
  
      const url = 'http://localhost:8080/addMovies';
      const axiosres = await axios.post(url, obj);
      props.close(); 
      
      
    };
    
    return (
      <div>
          <Modal show={props.showflag} onHide={props.close}  animation={false}>
          <Modal.Header closeButton>
          
          <Image name = "image" src={`https://image.tmdb.org/t/p/w185/${props.moviename.poster_path}`} alt='image not found' thumbnail />
          </Modal.Header>
          <Modal.Title name = "name">{props.moviename.title}</Modal.Title>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>add a comments</Form.Label>
              <Form.Control name = "comments"
                type="text"
                placeholder="add a comments"
                autoFocus
                value = {comment}
                onChange={(e)=>setcomment(e.target.value)}
              />
            </Form.Group>
            
          </Form>
          
          <Modal.Footer>
          <Button variant="secondary" onClick={props.close}>
            Close
          </Button>
          <Button variant="primary" type='submit' onClick={addmovietodb} >
            Save Changes
          </Button>
         
           </Modal.Footer>
         </Modal>
    </div>
  )
}

export default Modalmovie
