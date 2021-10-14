 import paginationResults from "../util/paginationResults";
const data =require ("../util/data.json")
test("", () => {
    requestedPage = "undefined";
  expect(paginationResults(requestedPage, null)).toHaveProperty("pageCount");
});
