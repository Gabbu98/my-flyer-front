import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import {Container , Dropdown} from 'react-bootstrap';  

function BasicExample() {
    return (
    <h5>
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Icao Codes
        </Dropdown.Toggle>
  
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </h5>
    );
  }

  export default BasicExample;