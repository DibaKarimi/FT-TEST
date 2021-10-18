function ajaxGet(url, callback) {
  let xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // console.log(xmlhttp.responseText);
      try {
        var data = JSON.parse(xmlhttp.responseText);
      } catch (err) {
        console.log(err.message + " Getting: " + url);

        return;
      }
      callback(data);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
// ajaxGet("/load", function (data) {
//   const page=1;
//   const perPageData = paginationResults(page, data);
//   console.log(data);
//   var compileTemplate = Handlebars.compile(document.querySelector("#headlinesTemplate").innerHTML);
 
//   var filled =compileTemplate(data);

//    document.querySelector("#headlines-container").innerHTML=filled;
 
// });


function runHandlebars(id, dataSrc, src) {
   console.log(document.getElementById(id));
// if (document.getElementById(id) != null) {
    let content = document.getElementById(id);
    ajaxGet(dataSrc, function (data) {
      const page = 1;
      const perPageData = paginationResults(page, data);
      console.log(perPageData.results);
      let source = document.getElementById(src).innerHTML;
      let  template = Handlebars.compile(source);
      content.innerHTML = template({ headlines: perPageData.results });
       console.log(content);
    });
  }
//}
 runHandlebars("page-wrap", "/load", "headlinesTemplate");

function nextPage(page, oldData) {
  console.log("oldData", oldData);
  const result = paginationResults(page, data);
  oldData = result;
}
//text/x-handlebars-template
// function fillTemplate() {
//   console.log("dss");
//   var template = Handlebars.compile(
//     document.querySelector("template").innerHTML
//   );
//   var filled = template(data);
//   document.querySelector("#output").innerHTML = filled;
// }
