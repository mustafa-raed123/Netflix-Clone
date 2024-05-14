import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";

export default function Updatefav(props) {
const updatemovie = async (e)=>{
e.preventDefault();
console.log(props.card.id)
const obj ={
    title : e.target.name.value,
    poster_path:e.target.image.value,
    comments:e.target.comment.value,
}
const url = `http://localhost:8080/updatemovie/${props.card.id}`
const updateMovie = await axios.put(url,obj);
window.location.reload();

}
  return (
    <>
      
      <Modal show={props.show} onHide={props.close} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>update movies</Modal.Title>
        </Modal.Header>
       
        <Form onSubmit={updatemovie}>
      
      <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword" >
            <Form.Label column sm="2">
              ImageUrl
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name = "image"
                defaultValue={props.card.poster_path}
              />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword"
          >
            <Form.Label column sm="2">
              Name
            </Form.Label>
            <Col sm="10">
              <Form.Control name = "name" type="text" defaultValue={props.card.title} />
            </Col>
          </Form.Group>
          <Form.Group
            as={Row}
            className="mb-3"
            controlId="formPlaintextPassword" >
            <Form.Label column sm="2">
              Comment
            </Form.Label>
            <Col sm="10">
              <Form.Control
                type="text"
                name = "comment"
                defaultValue={props.card.comments}
              />
            </Col>
          </Form.Group>
       
          <Button variant="secondary" onClick={props.close}> Close</Button>
          <Button variant="primary" type="submit">Update</Button>
        </Form>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </>
  );
}
