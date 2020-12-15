import React, { useState } from 'react';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function SearchBar (props) {
  const [searchValue, setSearchValue] = useState("");

  function handleSearchInputChanges(event) {

    console.log('handleSearchInputChanges', event.target.value);
    setSearchValue(event.target.value)
  }

  function handleKeyPress(event) {
    console.log('handleKeyPress', event.charCode);
    console.log('handleKeyPress', event.key);
    if (event.charCode === 13)
    {
      console.log('handleKeyPress', 'searchng yet');
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
