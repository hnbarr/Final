import React from 'react';
import { Jumbotron, Container, Button } from 'reactstrap';
import './Welcome.css'
// import Articles from '../Article';
// import Media from '../Media';

const Welcome = (props) => {
  const handleClick = (e) => {
    console.log('need to navigate to this section:', e.target)
  }

  return (
    <div>
      <Jumbotron className='jumbo' fluid>
        <Container fluid>
          <h1 className="display-3">Pup n Go</h1>
          <h4>Here we can find austin dog-friendly bars, restaurants, parks and trails! </h4>
          <form id='focus_section'>
            {/* <p className='text'></p> */}
            <input id='focus_field' placeholder='anything special you looking for?' type='text'></input>
          </form>
          <p className='text'> or select one here!</p>
          {/* <Button onClick={handleClick} outline color="secondary">React </Button>{' '}
          <Button onClick={handleClick} outline color="secondary">Redux </Button>{' '}
          <Button onClick={handleClick} outline color="secondary">Mongo DB </Button>{' '}
          <Button onClick={handleClick} outline color="secondary">Express </Button>{' '}
          <Button onClick={handleClick} outline color="secondary">Authentication </Button>{' '}
          <Button onClick={handleClick} outline color="secondary">Whiteboarding</Button>{' '} */}
          {/* <i className="text_slant">To delete a focus, click it! (Limit: 3)</i> */}
       </Container>
      </Jumbotron>

      {/* <section id='media_bottom'>
        <Articles />
        <Media />
      </section> */}
    </div>
  );
};

export default Welcome;
