import React, { useEffect, useState } from "react";

import Row from "react-bootstrap/Row";
import Movie from "../Movie/Movie.js";
function Movielist(props) {
  return (
    <div>
      <div className="container ">
        <Row xs={1} md={3} >
          {props.movies.map((movie) => (
            <Movie showMovie={movie} />
          ))}
        </Row>
      </div>
    </div>
  );
}

export default Movielist;
