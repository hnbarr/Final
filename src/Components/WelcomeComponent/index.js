import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './Welcome.css'

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron className='jumbo' fluid>
        <Button size="sm"><i className="fas fa-times"></i></Button> 
        <Container fluid>
          <h1 className="display-3">Hi, [ user's first name here ]</h1>
          <form id='focus_section'>
            <p className="text">BUTTONS: saved, edit profile/settings, buttons for all components.</p>
            <p className="text">What're we focusing on right now?? (saved from last login, or change it with the text field, max 5)</p>
            <input id='focus_field' type='text'></input>
            <p className="text">populate the terms done onSubmit and show as a pill, wiht option to delete them. </p>
          </form>
       </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;