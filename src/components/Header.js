import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';

const Header = () => {
  return (
    <Container>
      <Jumbotron>
        <h1 className='d-flex justify-content-center'>Google Books API</h1>
      </Jumbotron>
    </Container>
  );
};
export default Header;
