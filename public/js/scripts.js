
//const paginationResults = require("../../util/paginationResults");



function nextPage( page ,oldData ) {
  console.log("oldData",oldData);
 const result=paginationResults(page,data)
  oldData=result;

}
// function fillTemplate() {
//   console.log("dss");
//   var template = Handlebars.compile(
//     document.querySelector("template").innerHTML
//   );
//   var filled = template(data);
//   document.querySelector("#output").innerHTML = filled;
// }
