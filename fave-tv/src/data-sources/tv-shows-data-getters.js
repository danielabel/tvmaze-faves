
async function getShows (searchTerm) {
  let response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  if (response.status !== 200) {
    throw new Error('no data');
  }
  return response.json();
}

async function getShowDetails (showId) {
  let response = await fetch(`https://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast`);
  if (response.status !== 200) {
    throw new Error('no data');
  }
  return response.json();
}

export {
  getShows,
  getShowDetails,
};
