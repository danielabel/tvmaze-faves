import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CardDeck from 'react-bootstrap/CardDeck';
import shows from './shows-search-data.json';

console.log(shows);

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );



class Show extends React.Component {
  render() {
    const show = this.props.show;
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={show.show.image.medium} />
        <Card.Body>
          <Card.Title>{show.show.name}</Card.Title>
          <Card.Text>
            {show.show.genres.toString()}
          </Card.Text>
          {/*<Button variant="primary">Go somewhere</Button>*/}


        </Card.Body>
      </Card>
    );
  }
}
class ShowsTable extends React.Component {
  render() {
    const rows = [];

    this.props.shows.forEach((show) => {
      rows.push(
        <Show
          show={show}
          key={show.show.id} />
      );
    });

    return (
      <Container>
        <Row>
        {rows}
          </Row>
      </Container>
    );
  }
}

class LiShowsTable extends React.Component {
  render() {
    const rows = [];

    this.props.shows.forEach((show) => {
      rows.push(
        <li><Show
          show={show}
          key={show.show.id} /></li>
      );
    });

    return (
      <ul>
        {rows}
      </ul>
    );
  }
}

class SearchBar extends React.Component {
  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." />
      </form>
    );
  }
}

class FindTVShow extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ShowsTable shows={this.props.shows} />
      </div>
    );
  }
}


const SHOWS = [
  {
    score: 1,
    "show": {
      "id": 20303,
      "url": "http://www.tvmaze.com/shows/20303/doctor-doctor",
      "name": "Doctor Doctor",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Medical"
      ],
    },
  },
  {
    "score": 16.302355,
    "show": {
      "id": 21845,
      "url": "http://www.tvmaze.com/shows/21845/the-good-doctor",
      "name": "The Good Doctor",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Medical"
      ],
      "status": "Running",
    }
  },
  {
    "score": 16.250797,
    "show": {
      "id": 210,
      "url": "http://www.tvmaze.com/shows/210/doctor-who",
      "name": "Doctor Who",
      "type": "Scripted",
      "language": "English",
      "genres": [
        "Drama",
        "Adventure",
        "Science-Fiction"
      ],
      "status": "Running",
    }
  }
];

ReactDOM.render(
  <FindTVShow shows={shows} />,
  document.getElementById('container')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
