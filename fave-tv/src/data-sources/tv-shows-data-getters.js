
async function transform(rawJsonArray) {
  return rawJsonArray.map((item) => {
    if (item.show?.summary) item.show.summary = item.show.summary.replace(/<[^>]+>/g, ' ');
    return item;
  });
}

async function getShows (searchTerm) {
  let response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  if (response.status !== 200) {
    throw new Error('no data');
  }
  return transform(await response.json());
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
