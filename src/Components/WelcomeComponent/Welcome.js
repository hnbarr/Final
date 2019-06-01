import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './Welcome.css'

const Welcome = (props) => {
  return (
    <div>
      <Jumbotron className='jumbo' fluid>
        <Button size="sm"><i className="fas fa-times"></i></Button> 
        <Container fluid>
          <h1 className="display-3">Hi, I'm Tudy!</h1>
          <p className="lead">I'm here to help you stay motivated and on track, as I'm a free resource made for ACA students, by an ACA student!</p>
          <p className="lead">Here you will be able to find some awesome resourses, such as; articles from Medium, educational videos from Youtube and Daily Practice Whiteboarding Questions!</p>
       </Container>
      </Jumbotron>
    </div>
  );
};

export default Welcome;