const paginationResults = require("./paginationResults");
const example = jest.createMockFromModule("./data");
const data = {
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
        {
          aspectSet: "article",
          modelVersion: "1",
          id: "2252f198-8e1a-4bfa-af00-a608c69ca945",
          apiUrl:
            "https://api.ft.com/content/2252f198-8e1a-4bfa-af00-a608c69ca945",
          title: {
            title:
              "UK gas shipping company to stop delivering to retail suppliers",
          },
          location: {
            uri: "https://www.ft.com/content/2252f198-8e1a-4bfa-af00-a608c69ca945",
          },
          summary: {
            excerpt:
              "A UK company backed by Glencore that supplies natural gas to utility companies has said it can no longer continue its...",
          },
          editorial: {
            subheading:
              "Move by CNG adds to pressure on consumer energy market already reeling from failures",
            byline: "Nathalie Thomas in Edinburgh and David Sheppard in London",
          },
          images: [
            {
              url: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F6ed2facd-78e9-491f-b872-5546f2a1048e?source=search&fit=scale-down&width=167",
              type: "secondary",
            },
          ],
        },
        {
          aspectSet: "article",
          modelVersion: "1",
          id: "3b2d3e57-1575-47ed-8442-9b4ee00b36d5",
          apiUrl:
            "https://api.ft.com/content/3b2d3e57-1575-47ed-8442-9b4ee00b36d5",
          title: {
            title:
              "Wall Street stocks and Treasuries make gains even as inflation data top 5% again",
          },
          location: {
            uri: "https://www.ft.com/content/3b2d3e57-1575-47ed-8442-9b4ee00b36d5",
          },
          summary: {
            excerpt:
              "Wall Street stock and bond prices climbed on Wednesday despite data confirming a surge in inflation and the Federal...",
          },
          editorial: {
            subheading:
              "US figures on consumer prices released on Wednesday come in slightly higher than forecast",
            byline: "Naomi Rovnick and Nicholas Megaw",
          },
          images: [
            {
              url: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2F795fcec3-09dc-4d8c-b63d-4c526b7e1469?source=search&fit=scale-down&width=167",
              type: "secondary",
            },
          ],
        },
        {
          aspectSet: "article",
          modelVersion: "1",
          id: "a8cad0f1-fd85-40ed-aa19-e71728f10825",
          apiUrl:
            "https://api.ft.com/content/a8cad0f1-fd85-40ed-aa19-e71728f10825",
          title: {
            title:
              "Pension savers face risk of higher fees as Sunak seeks billions for ‘levelling up’",
          },
          location: {
            uri: "https://www.ft.com/content/a8cad0f1-fd85-40ed-aa19-e71728f10825",
          },
          summary: {
            excerpt:
              "Ministers are looking to relax rules shielding tens of millions of UK retirement savers from high charges as they step...",
          },
          editorial: {
            subheading:
              "Treasury-driven review of UK workplace pension charge cap hopes to boost investment in areas such as private equity",
            byline: "Josephine Cumbo and George Parker",
          },
          images: [
            {
              url: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2Fc5383f06-9be3-4f8d-8761-6d57c2d9672c?source=search&fit=scale-down&width=167",
              type: "secondary",
            },
          ],
        },
        {
          aspectSet: "article",
          modelVersion: "1",
          id: "8055d806-3166-48c9-9786-9bdea0e2d806",
          apiUrl:
            "https://api.ft.com/content/8055d806-3166-48c9-9786-9bdea0e2d806",
          title: {
            title:
              "Big US businesses pledge to extend working hours to ease supply chain backlogs",
          },
          location: {
            uri: "https://www.ft.com/content/8055d806-3166-48c9-9786-9bdea0e2d806",
          },
          summary: {
            excerpt:
              "Joe Biden has secured pledges from Walmart, UPS and FedEx to extend their working hours in a bid to ease supply chain...",
          },
          editorial: {
            subheading:
              "Biden administration secures commitment from Walmart, UPS and FedEx to work round the clock",
            byline:
              "James Politi in Washington and Andrew Edgecliffe-Johnson in New York",
          },
          images: [
            {
              url: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2Faea2e8bc-375a-4d69-96a1-8902f6d3f0c9?source=search&fit=scale-down&width=167",
              type: "secondary",
            },
          ],
        },
        {
          aspectSet: "article",
          modelVersion: "1",
          id: "053c3a21-166a-4c2f-b6f3-335ba70ef6c8",
          apiUrl:
            "https://api.ft.com/content/053c3a21-166a-4c2f-b6f3-335ba70ef6c8",
          title: {
            title: "Can UK and EU resolve their post-Brexit dispute?",
          },
          location: {
            uri: "https://www.ft.com/content/053c3a21-166a-4c2f-b6f3-335ba70ef6c8",
          },
          summary: {
            excerpt:
              "Almost three months after the UK demanded far-reaching reform of the Brexit deal’s trading arrangements for Northern...",
          },
          editorial: {
            subheading:
              "Brussels and London remain far apart on key aspects of Northern Ireland’s trading arrangements ",
            byline: "Peter Foster in London and Andy Bounds in Brussels",
          },
          images: [
            {
              url: "https://www.ft.com/__origami/service/image/v2/images/raw/http%3A%2F%2Fprod-upp-image-read.ft.com%2Fd45c4dd7-da39-4675-806c-66a06d403375?source=search&fit=scale-down&width=167",
              type: "secondary",
            },
          ],
        },
      ],
    },
  ],
};

// test("", () => {
//   requestedPage = 1;
//   expect(paginationResults(requestedPage, data)).toHaveProperty("pageCount");
// });
test("", () => {
  requestedPage = 1;
  expect(paginationResults(requestedPage, data)).toHaveProperty("pageCount");
  expect(paginationResults(requestedPage, data)).toHaveProperty("next",2);

});
