import express from "express";
import exphbs from "express-handlebars";
import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
import paginationResults from "./util/index.js";
import path from "path";
const __dirname = path.resolve();

const apiKey = process.env.APIKEY;
const apiUrl = process.env.URL;
const app = express();
app.use(express.static(__dirname + "/public"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  exphbs({
    extname: "hbs",
    defaultLayout: "index",
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
  })
);

const port = process.env.PORT || 3000;
const listener = app.listen(port, function () {
  console.log("server is listening to the prot: " + listener.address().port);
});

let result={};

app.get("/", async (req, res) => {
  const { searchKey, page } = req.query;
if (!page || parseInt(page)<= 0){
  const data = {
    queryString: searchKey,
    resultContext: {
      aspects: ["title", "location", "summary", "editorial", "images"],
    },
  };
  const headers = { "content-type": "application/json", "X-Api-Key": apiKey };

  await axios
    .post(apiUrl, data, { headers: headers })
    .then((response) => {
      result = response.data;
    })
    .catch((err) => {
      console.log("AXIOS ERROR: ", err);
    });
}
  if (result.results[0].indexCount) {
    let results = paginationResults(page, result);
    results.searchKey = searchKey;
    res.render("main", results);
  } else {
    res.render("main", { message: "Sorry, content not found!" });
  }
});

app.get("*", (req, res) => {
  res.render("notFound", { message : "The page was not found, please try again!" });
});
