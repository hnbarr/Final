import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './Welcome.css'
import Articles from '../Article';
import Media from '../Media';

const Welcome = (props) => {
  const handleClick = (e) => {
    console.log('need to navigate to this section:', e.target)
  }

  return (
    <React.Fragment>
      <Jumbotron className='jumbo' fluid>
        <Container fluid>
          <h1 className="display-3">daily tasks</h1>
          <form id='focus_section'>
            <input id='focus_field' placeholder='anything special you looking for?' type='text'></input>
          </form>
          <p className='text'> or select one here!</p>
       </Container>
      </Jumbotron>

      <section id='media_bottom'>
        <Articles />
        <Media />
      </section>
    </React.Fragment>
  );
};

export default Welcome;
