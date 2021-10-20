
function nextPage(page, totalData, newData) {
 let currentPage =parseInt (change.innerText);
  console.log(page, change.innerText);
  newData = paginationResults(currentPage, totalData);
  change.innerHTML = newData.next;
  paginationtext.innerHTML = `Page <strong>${newData.page}</strong> of ${newData.pageCount}`;
  console.log(newData.results);
  ulContent.innerHTML = "";
  newData.results.map((element) => {
    let sectionElem = `<li id="${element.id}"> <section class="headLine" role="contentinfo" aria-label=${element.title.title} >`;
    sectionElem += `<div class="img-container">`;
    sectionElem +=
      element.images[0].url ?
      ` <img alt="image of title" src="${element.images[0].url}" />` : `<></>`;
    sectionElem += `</div><div><div class="byline-container"><a href="${element.location.uri}" class="byline-link" aria-label="line link"> ${element.editorial.byline}</a></div>`;
    sectionElem += `<a href="location.uri"  class="title" id=${element.id}> ${element.title.title}</a> `;
    sectionElem += `<p><a href="location.uri" class="summary-link" >${element.summary.excerpt}</a></p>  </div> </section> </li>`;
    ulContent.innerHTML += sectionElem;
  });
}
// function ajaxGet(url, callback) {
//   let xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function () {
//     if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//       // console.log(xmlhttp.responseText);
//       try {
//         var data = JSON.parse(xmlhttp.responseText);
//       } catch (err) {
//         console.log(err.message + " Getting: " + url);

//         return;
//       }
//       callback(data);
//     }
//   };
//   xmlhttp.open("GET", url, true);
//   xmlhttp.send();
// }
// // ajaxGet("/load", function (data) {
// //   const page=1;
// //   const perPageData = paginationResults(page, data);
// //   console.log(data);
// //   var compileTemplate = Handlebars.compile(document.querySelector("#headlinesTemplate").innerHTML);

// //   var filled =compileTemplate(data);

// //    document.querySelector("#headlines-container").innerHTML=filled;

// // });

// function runHandlebars(id, dataSrc, src) {
//    console.log(document.getElementById(id));
// // if (document.getElementById(id) != null) {
//     let content = document.getElementById(id);
//     ajaxGet(dataSrc, function (data) {
//       const page = 1;
//       const perPageData = paginationResults(page, data);
//       console.log(perPageData.results);
//       let source = document.getElementById(src).innerHTML;
//       let  template = Handlebars.compile(source);
//       content.html = template(  perPageData );
//        console.log(content);
//     });
//   }
// //}
//  runHandlebars("headlinesTemplate", "/load", "page-wrap");

// //text/x-handlebars-template
// // function fillTemplate() {
// //   console.log("dss");
// //   var template = Handlebars.compile(
// //     document.querySelector("template").innerHTML
// //   );
// //   var filled = template(data);
// //   document.querySelector("#output").innerHTML = filled;
// // }
