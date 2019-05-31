import React from 'react';
import { Jumbotron, Container } from 'reactstrap';
import './Welcome.css'

const Example = (props) => {
  return (
    <div>
      <Jumbotron className='jumbo' fluid>
        <Container fluid>
          <h1 className="display-3">Welcome Y'all!</h1>
          <p className="lead">This is a free resource made for ACA students, by an ACA student!</p>
          <p>Here you will be able to find some awesome resourses, such as; articles from Medium, educational videos from Youtube and Daily Practice Whiteboarding Questions!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default Example;