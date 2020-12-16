import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import SearchBar from "./search.js";
import { ShowsTable } from "./shows-table.js";
import { ShowDetails } from "./show-details.js";

import {getShows, getShowDetails} from '../data-sources/tv-shows-data-getters';
import * as favourites from '../data-store/favourites-store';

export default function FindTVShows() {
  const [shows, setShows] = useState([]);
  const [showDetails, setShowDetails] = useState(null);
  const [erredSearch, setErredSearch] = useState(null);


  function showSearch() {
    setShowDetails(null);
  }

  async function doSearch (searchString) {
    try {
      const showsResult = await getShows(searchString);
      setShows(showsResult);
    } catch(e) {
      console.log('failed to search for shows', e.message);
      setErredSearch(e.message);
    }
  }

  async function retrieveShowDetails (showId) {
    try {
      const details = await getShowDetails(showId);
      setShowDetails(details);
    } catch(e) {
      console.log('failed to fetch show details', e.message);
      setErredSearch(e.message);
    }
  }

  // and now the render!
  if (erredSearch) {
    return (<div>Failed to get result of search: {erredSearch}</div>)
  }

  if (showDetails) {
    return (<ShowDetails show={showDetails}
                         close={showSearch}
                         isFavourite={favourites.has}
                         setFavourite={favourites.save}
                         removeFavourite={favourites.unsave}
    />)
  }

  return (
    <Container>
      <SearchBar searchTrigger={ doSearch }/>
      <ShowsTable shows={shows} selectTrigger={retrieveShowDetails} />

    </Container>
  );
}
