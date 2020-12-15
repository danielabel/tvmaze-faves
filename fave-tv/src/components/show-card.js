import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


export default function ShowCard ({show: showWrapper, selectTrigger}) {
    const { show }  = showWrapper;
    return (
      <Card style={{ width: '18rem' }}  className="mx-auto my-2">
        <Card.Img variant="top" src={show?.image?.medium} />
        <Card.Body>
          <Card.Title>{show.name}</Card.Title>
          <Card.Text>
            {show.genres.toString()}
          </Card.Text>
          <Button variant="primary" onClick={ () => selectTrigger(show.id) }>See Details</Button>
        </Card.Body>
      </Card>
    );
}

