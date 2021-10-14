const paginationResults = require("./paginationResults");
const mockData = {
  query: {
    queryContext: {
      curations: ["ARTICLES", "BLOGS", "PAGES", "PODCASTS", "VIDEOS"],
    },
    resultContext: {
      maxResults: 100,
      offset: 0,
      aspects: ["title", "location", "summary", "editorial", "images"],
      contextual: true,
      highlight: false,
      suppressDefaultSort: false,
    },
  },
  results: [
    {
      indexCount: 950948,
      curations: ["ARTICLES", "BLOGS", "PAGES", "PODCASTS", "VIDEOS"],
      results: [
        {
          aspectSet: "article",
          modelVersion: "1",
          id: "5540d2fb-408f-4d3e-9789-c728036b3793",
          apiUrl:
            "https://api.ft.com/content/5540d2fb-408f-4d3e-9789-c728036b3793",
          title: {
            title:
              "Now for the ‘hard part’ of achieving quality education for all",
          },
          location: {
            uri: "https://www.ft.com/content/5540d2fb-408f-4d3e-9789-c728036b3793",
          },
          summary: {
            excerpt:
              "For three-quarters of a century, the world’s leaders have committed and recommitted to the goal of universal education...",
          },
          editorial: {
            subheading:
              "Getting more of the world’s children in school is the first step but how do we make it count?",
            byline: "Lant Pritchett",
          },
          images: [
            {
              url: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F53d186a1-bf14-4699-b7d5-f08dc50a1347?source=search&fit=scale-down&width=167",
              type: "secondary",
            },
          ],
        },
      ],
    },
  ],
};

test("loading home page", () => {
  requestedPage = 1;
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("pageCount", 7);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("next", 2);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("page", 1);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("previous", null);
});

test("loading home page", () => {
  requestedPage = "undefined";
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("pageCount", 7);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("next", 2);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("page", 1);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("previous", null);
});

test("request second page", () => {
  requestedPage = "2";
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("pageCount", 7);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("next", 3);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("page", 2);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("previous", 1);
});

test("request last page", () => {
  requestedPage = "7";
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("pageCount", 7);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("next", null);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("page", 7);
  expect(paginationResults(requestedPage, mockData)).toHaveProperty("previous", 6);
});
