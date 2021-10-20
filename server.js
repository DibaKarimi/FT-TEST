const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

app.use(express.static(__dirname + "/public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const pagination = require("./util/paginationResults");

const apiKey = process.env.API_KEY;
const apiUrl = process.env.API_URL;

app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    helpers: {
      json: function (context) {
        return JSON.stringify(context);
      },
      next: function (currentPage) {
        return currentPage+1;
      },
      setHandler: function (newData) {
        console.log(newData);
        return getPage(6, "searchKey");
      },
    },
  })
);

const port = process.env.PORT || 3000;
const listener = app.listen(port, function () {
  console.log("server is listening to the prot: " + listener.address().port);
});

// cache the latest search for pagination
let latestSearch = {};

// fetch data
const newSearch = async (searchKey) => {
  const data = {
    queryString: searchKey,
    resultContext: {
      aspects: ["title", "location", "summary", "editorial", "images"],
    },
  };
  const headers = { "content-type": "application/json", "X-Api-Key": apiKey };
  try {
    const response = await axios.post(apiUrl, data, { headers: headers });
    return response.data;
  } catch (error) {
    console.log("AXIOS ERROR: ", err);
  }
};

// get content of requested page
const getPage = (requestedPage, searchKey) => {
  let results = pagination(requestedPage, latestSearch);
  results.searchKey = searchKey;
  return results;
};
app.get("/load", async (req, res) => {
  const { searchKey, page } = req.query;
  const isFirstPage = !page || parseInt(page) <= 0;
  if (isFirstPage) {
    latestSearch = await newSearch(searchKey);
  }
  res.json(latestSearch);
});

app.get("/", async (req, res) => {
  const { searchKey, page } = req.query;
  const isFirstPage = !page || parseInt(page) <= 0;
  if (isFirstPage) {
    latestSearch = await newSearch(searchKey);
  }

  const isResult = latestSearch.results[0].indexCount;
  if (isResult) {
    const data = getPage(page, searchKey);
    res.render("main", { data, latestSearch });
  } else {
    res.render("main", { message: "Sorry, content not found!" });
  }
});

app.get("*", (req, res) => {
  res.render("notFound", {
    message: "The page was not found, please try again!",
  });
});
