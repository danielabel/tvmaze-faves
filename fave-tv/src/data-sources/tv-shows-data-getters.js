
async function searchResultTransform(rawJsonArray) {
  return rawJsonArray.map((item) => {
    if (item.show?.summary) item.show.summary = item.show.summary?.replace(/<[^>]+>/g, ' ');
    return item;
  });
}

async function showTransform(rawShowJson) {
  let trans = Object.assign({}, rawShowJson);
  if (rawShowJson.summary) trans.summary = rawShowJson.summary.replace(/<[^>]+>/g, ' ');
  return trans;
}

async function fetcher(url) {
  let response;
  try {
    response = await fetch(url);
  } catch (fetchError) {
    throw new Error('failed to get data');
  }

  if (response.status !== 200) {
    throw new Error('failed to get data');
  }
  return response;
}

async function getShows (searchTerm) {
  const response = await fetcher(`https://api.tvmaze.com/search/shows?q=${searchTerm}`);
  return searchResultTransform(await response.json());
}

async function getShowDetails (showId) {
  const response = await fetcher(`https://api.tvmaze.com/shows/${showId}?embed[]=seasons&embed[]=cast`);
  return showTransform(await response.json());
}

export {
  getShows,
  getShowDetails,
};
