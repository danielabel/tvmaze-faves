import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchBar (props) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearchInputChanges(event) {
    setSearchValue(event.target.value)
  }

  function handleKeyPress(event) {
    if (event.charCode === 13)
    {
      props.searchTrigger(searchValue);
    }
  }

  return (
    <Container>
      <Row>
        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text >🔍</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Search for a TVShow..."
            value={searchValue}
            onChange={handleSearchInputChanges}
            onKeyPress={handleKeyPress}
          />
        </InputGroup>
      </Row>
    </Container>
  );
}

export default SearchBar;
