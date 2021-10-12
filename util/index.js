const paginationResults = (requestPage, data) => {
  const resultData = data.results[0].results;
  const indexCount = data.results[0].indexCount;
  const { maxResults } = data.query.resultContext;

  const totalHeadlines = indexCount >= maxResults ? maxResults : indexCount;
  const page = parseInt (requestPage) > 0 ? parseInt(requestPage) : 1;
  const perPage = 10;

  const start = (page - 1) * perPage;
  const end = start + perPage;
  const results = {};
  results.pageCount = Math.ceil(totalHeadlines / perPage);
  results.page = page;
  results.next = end < indexCount ? page + 1 : null;
  results.previous = start > 0 ? page - 1 : null;
  results.results = perPage >= totalHeadlines ? resultData : resultData.slice(start, end);

  return results;
};

export default paginationResults;


