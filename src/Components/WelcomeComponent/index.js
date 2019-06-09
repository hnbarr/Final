import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './Welcome.css'
import Articles from '../Article';
import Media from '../Media';

const Welcome = (props) => {
  
  const handleDelete = (e) => {
    console.log('need to delete this button:', e.target)
  }

  return (
    <div>
      <Jumbotron className='jumbo' fluid>
        <Container fluid>
        
          <h1 className="display-3">Hi, Heather.</h1>
          <Button onClick={handleDelete} outline color="secondary">Focus Three </Button>{' '}
          <Button onClick={handleDelete} outline color="secondary">Focus Two </Button>{' '}
          <Button onClick={handleDelete} outline color="secondary">Focus One </Button>{' '}
  
          <form id='focus_section'>
            <p className='text'>Welcome to <b>My Focus</b>! </p>
            <p className='text' >What're you focusing on right now?</p>
            <input id='focus_field' placeholder='add a new focus' type='text'></input>
          </form>

          <i className="text_slant">To delete a focus, click it! (Limit: 3)</i>
       </Container>
      </Jumbotron>

      <section id='media_bottom'>
        <Articles />
        <Media />
      </section>
    </div>
  );
};

export default Welcome;