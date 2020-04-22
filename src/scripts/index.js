import "../styles/index.css";

const headlinesURL =
  "https://newsapi.org/v2/top-headlines?country=in&apiKey=79e34a907fea407abf18357531170f5b";

function getSearchURL(searchKey = "india") {
  return `https://newsapi.org/v2/everything?q=${searchKey}&sortBy=relevance&apiKey=79e34a907fea407abf18357531170f5b`;
}

var ul = document.createElement("ul");
ul.id = "news-articles";
var news = document.querySelector("#news");
news.appendChild(ul);

async function getArticles(url) {
  let response = await fetch(url);
  let data = await response.json();
  return data;
}

// Creating HTML Elements Dynamically

getArticles(headlinesURL).then(print);

function print(data) {
  console.log(data);
  for (let i = 0; i < data.articles.length; i++) {
    var li = document.createElement("li");
    li.className = "article";
    ul.appendChild(li);
    var a = document.createElement("a");
    a.setAttribute("href", data.articles[i].url);
    a.className = "article-link";
    li.appendChild(a);
    var img = document.createElement("img");
    img.className = "article-img";
    img.setAttribute("src", data.articles[i].urlToImage);
    li.appendChild(img);
    var h2 = document.createElement("h2");
    h2.innerHTML = data.articles[i].title;
    h2.className = "article-title";
    li.appendChild(h2);
    var p = document.createElement("p");
    p.innerHTML = data.articles[i].description;
    p.className = "article-description";
    li.appendChild(p);
    var span = document.createElement("span");
    span.innerHTML = data.articles[i].author;
    span.className = "article-author";
    li.appendChild(span);

    li.addEventListener("click", liHandler);

    // Adding Styles Dynamically

    li.style.cssText =
      "width:290px;margin:15px;color:white; background-color:rgb(96,96,96);";
    img.style.cssText = "width:240px;height:auto;margin:20px 0px 0px 20px;";
    h2.style.cssText = "padding:10px 20px 10px 20px;";
    p.style.cssText = "padding:0px 20px 10px 20px; color:black";
    span.style.cssText =
      "float:right;padding:0px 20px 20px 0px; text-decoration:none; position:relative; bottom:0px; color:lightblue; font-weight:600;";
    a.style.cssText =
      "float:right;padding:0px 20px 20px 0px; text-decoration:none; position:relative; bottom:0px; color:white; font-weight:600;";
  }
  ul.style.cssText =
    "list-Style:none;display:flex; flex-wrap:wrap;padding:20px;justify-content:center; ";
}

getArticles().then((data) => {
  print(data);
});

function liHandler(event) {
  debugger;
  console.log(event);
  const url = event.currentTarget.querySelector("a").href;
  window.open(url);
}

function searchHandler(event) {
  if (event.keyCode === 13) {
    searchPrint(event.target.value);
  }
}
var search = document.querySelector("#search");
search.addEventListener("keyup", searchHandler);
function searchPrint(searchKey) {
  document.querySelector("#news-articles").innerHTML = "";

  getArticles(getSearchURL(searchKey)).then((data) => {
    if (data.articles.length < 1) {
      var h1 = document.createElement("h1");
      h1.className = "not-found";
      h1.innerHTML = "No article was found based on the search.";
      ul.appendChild(h1);
      h1.style.cssText = "color:white;";
    } else {
      print(data);
    }
  });
}
