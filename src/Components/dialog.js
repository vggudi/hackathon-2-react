import { Modal, Button } from 'bootstrap';
import { Routes, Route, Link, useNavigate, Navigate } from "react-router-dom";
import { useLocation }  from 'react-router-dom';
export function Dialog(){
    const navigate = useNavigate();
    const {state}= useLocation();
    console.log(state.textMessage);
    return(
        <div >
        {state.textMessage}
        <div>
        <button onClick={() => navigate("/")}>Ok</button>
        </div>
        {/* <Modal.Header>
          <Modal.Title></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" onClick={navigate("/")}>
            Ok
          </Button>
        </Modal.Footer> */}
        
        </div>
    )
}