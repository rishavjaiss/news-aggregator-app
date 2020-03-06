const headlinesURL = "http://newsapi.org/v2/top-headlines?country=in&apiKey=79e34a907fea407abf18357531170f5b";

var ul=document.createElement("ul");
ul.id="news-articles";
var news=document.querySelector("#news");
news.appendChild(ul);

// Request API

var req=new Request(headlinesURL);

async function Async() {
    let response = await fetch(req);
    let data = await response.json();
    return data;
}

// Creating HTML Elements Dynamically

Async().then(data => {
    function print(){
        let i=0;
        for (i=0;i<data.articles.length;i++)
        {
            var li = document.createElement("li");
            li.className = "article";
            ul.appendChild(list);
            var a = document.createElement("a");
            a.setAttribute("href", data.articles[i].url);
            a.className = "article-link";
            list.appendChild(a);
            var img = document.createElement("img");
            img.className = "article-img";
            img.setAttribute("src", data.articles[i].urlToImage);
            a.appendChild(img);
            var h2 = document.createElement("h2");
            h2.innerHTML = data.articles[i].title;
            h2.className = "article-title";
            a.appendChild(h2);
            var p = document.createElement("p");
            p.innerHTML = data.articles[i].description;
            p.className = "article-description";
            a.appendChild(p);
            var span = document.createElement("span");
            span.innerHTML = data.articles[i].author;
            span.className = "article-author";
            a.appendChild(span);
            
            // Adding Styles Dynamically
            
            li.style.cssText = "width:290px;margin:15px;color:white; background-color:rgb(96,96,96);";
            img.style.cssText = "width:240px;height:auto;margin:20px 0px 0px 20px;";
            h2.style.cssText = "padding:10px 20px 10px 20px;";
            p.style.cssText = "padding:0px 20px 10px 20px;";
            span.style.cssText = "float:right;padding:0px 20px 20px 0px; text-decoration:none; position:relative; bottom:0px; color:lightblue; font-weight:600;";
            a.style.cssText ="float:right;padding:0px 20px 20px 0px; text-decoration:none; position:relative; bottom:0px; color:white; font-weight:600;";
        }
        ul.style.cssText = "list-Style:none;display:flex; flex-wrap:wrap;padding:20px;justify-content:center; ";
    }
    print();
});

function searchprint() {
    document.querySelector('#news-articles').innerHTML=""
    var search = document.querySelector("#search");
    var everything = search.value;
    url = 'http://newsapi.org/v2/everything?q='+everything+'&from=2020-02-24&sortBy=popularity&apiKey=79e34a907fea407abf18357531170f5b';
    var req = new Request(url);
    
    async function Async() {
    let response = await fetch(req);
    let data = await response.json();
    return data;
    }

    Async().then(data => {
        if (data.articles.length<1){
        var h1=document.createElement("h1");
        h1.className="not-found";
        h1.innerHTML='No article was found based on the search.';
        ul.appendChild(h1);
    }
    function print(){
        let i=0;
        for (i=0;i<data.articles.length;i++)
        {
            var li = document.createElement("li");
            li.className = "article";
            ul.appendChild(list);
            var a = document.createElement("a");
            a.setAttribute("href", data.articles[i].url);
            a.className = "article-link";
            list.appendChild(a);
            var img = document.createElement("img");
            img.className = "article-img";
            img.setAttribute("src", data.articles[i].urlToImage);
            a.appendChild(img);
            var h2 = document.createElement("h2");
            h2.innerHTML = data.articles[i].title;
            h2.className = "article-title";
            a.appendChild(h2);
            var p = document.createElement("p");
            p.innerHTML = data.articles[i].description;
            p.className = "article-description";
            a.appendChild(p);
            var span = document.createElement("span");
            span.innerHTML = data.articles[i].author;
            span.className = "article-author";
            a.appendChild(span);
            
            // Adding Styles Dynamically
            
            li.style.cssText = "width:290px;margin:15px;color:white; background-color:rgb(96,96,96);";
            img.style.cssText = "width:240px;height:auto;margin:20px 0px 0px 20px;";
            h2.style.cssText = "padding:10px 20px 10px 20px;";
            p.style.cssText = "padding:0px 20px 10px 20px;";
            span.style.cssText = "float:right;padding:0px 20px 20px 0px; text-decoration:none; position:relative; bottom:0px; color:lightblue; font-weight:600;";
            a.style.cssText ="float:right;padding:0px 20px 20px 0px; text-decoration:none; position:relative; bottom:0px; color:white; font-weight:600;";
        }
        ul.style.cssText = "list-Style:none;display:flex; flex-wrap:wrap;padding:20px;justify-content:center; ";
    }
    print();
});
}