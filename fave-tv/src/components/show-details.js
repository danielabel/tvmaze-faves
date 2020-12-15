import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";


function CastCard ({castMember}) {
  return (
    <Card style={{ width: '10rem' }}>
      <Card.Img variant="top" src={castMember.person?.image?.medium} />
      <Card.Body>
        <Card.Title>{castMember.person.name}</Card.Title>
      </Card.Body>
    </Card>
  );
}

function Cast({castlist}) {
  const row = castlist.map((member) => (
    <CastCard
      castMember={member}
      />
  ));

  return (
    <Container>
      <Row>
        {row}
      </Row>
    </Container>
  );
}
function SeasonCard ({season}) {
  return (
    <Card style={{ width: '10rem' }}>
       <Card.Img variant="top" src={season?.image?.medium} />
       <Card.Body>
         <Card.Title>{season.name? season.name : season.number}</Card.Title>
       </Card.Body>
     </Card>
  );
}
function Seasons({seasonList}) {
  if (!seasonList) {
    return(<div>none</div>);
  }
  const row = seasonList.map((item) => (
    <SeasonCard
      season={item}
      />
  ));

  return (
    <Container>
      <Row>
        {row}
      </Row>
    </Container>
  );
}

export function ShowDetails ({show, close})  {
  return (<div>
    <Button onClick={close}>Back</Button>
    <Container>
      <Row>
        <Col sm={4}><Image src={show?.image?.medium} fluid /></Col>
        <Col sm={8}><Jumbotron fluid><h1>{show.name}</h1></Jumbotron></Col>
      </Row>
      <Row>
        <Col>{show.summary.replace(/<[^>]+>/g, '')}</Col>
      </Row>
      <Row>
        <h2>Cast</h2>
      </Row>
      <Row>
        <Col><Cast castlist={show?._embedded?.cast} /></Col>
      </Row>
      <Row>
        <h2>Seasons</h2>
      </Row>
      <Row>
        <Col><Seasons seasonList={show?._embedded?.seasons} /></Col>
      </Row>

    </Container>

  </div>);
}
