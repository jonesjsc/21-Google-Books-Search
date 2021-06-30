import React from 'react';
import { Container, Row, Form } from 'react-bootstrap';
const SearchArea = (props) => {
  return (
    <Container>
      <Row>
        <form onSubmit={props.searchBook} action=''>
          <input onChange={props.handleSearch} type='text' />
          <button type='submit'>Search</button>
          <select defaultValue='Sort' onChange={props.handleSort}>
            <option disabled value='Sort'>
              Sort
            </option>
            <option value='Newest'>Newest</option>
            <option value='Oldest'>Oldest</option>
          </select>
        </form>
      </Row>
    </Container>
  );
};
export default SearchArea;
