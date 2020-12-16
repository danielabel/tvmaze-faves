import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ShowCard from "./show-card";

export function ShowsTable ({shows, selectTrigger})  {
  if (!shows || shows.length === 0) {
    return (<div></div>
    )
  }

  const rows = shows.map((show) => (
    <ShowCard
      show={show}
      key={show?.show.id}
      selectTrigger={selectTrigger}/>
    ));

  return (
    <Container>
      <Row>
        {rows}
      </Row>
    </Container>
  );
}
