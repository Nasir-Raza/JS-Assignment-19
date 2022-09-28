/*Coded by 
     Name	: Nasir Raza
     Roll #	: KH01210813250
*/
let newsArray = ""
let loggedinUserId = "";

console.log(newsArray);

//Function for getting currently logged in user id

function getLoggedinUserId() {
    
    let localStorageUserobj = window.localStorage.getItem("userObjects");
    if (localStorageUserobj) {
        localStorageUserobj = JSON.parse(localStorageUserobj);
        
        for (let key in localStorageUserobj) {
            if (localStorageUserobj[key].isAuthUser === true) {
                loggedinUserId = localStorageUserobj[key].id;
                console.log("Logged in user id -> ",loggedinUserId);
                break;
            }
        }
    }
    if (loggedinUserId === "") {
        showAuthorizePage();
    }
}

let message = document.getElementById("message");
message.innerText = "Loading news data. Please wait.....";

let countryCode = window.localStorage.getItem("countryCode");

let myCustomPromise = async () => {
    try {
        let url = "https://newsdata.io/api/1/news?apikey=pub_11563835b52c1d979d36bdfb40f15fafc6f2f&country=" + countryCode + "&language=en";
        console.log(url);
        let a = await fetch(url);

        console.log(a)
        if (a) {
            let b = a.json()
            b.then((value) => {
                newsArray = value.results;
                console.log(newsArray);
                message.style.display = "none";
                showNewsData();
            })
        } else {
            throw "Problem in fetching data. Please check your network connectivity."
        }
    } catch (error) {
        document.getElementById("message").innerHTML = error;
        console.log(error)
    }
}

myCustomPromise();

let newsDetailDiv = document.getElementById("newsdetail");
function showNewsData() {
    let Country = "";

    switch (countryCode) {
        case "pk":
            Country = "Pakistan";
            break;
        case "au":
            Country = "Australia";
            break;
        case "gb":
            Country = "United Kingdom";
            break;
        case "us":
            Country = "United States of America";
            break;
        default:
            break;
    }

    for (let key in newsArray) {
        document.getElementById("country").innerHTML = "News from: " + Country ;
        let newsDetail = document.createElement("table");
        let newsDetailtr1 = document.createElement("tr");
        let newsDetailtr2 = document.createElement("tr");
        let newsDetailtr3 = document.createElement("tr");
        let newsDetailtr4 = document.createElement("tr");

        let newsDetailtd11 = document.createElement("td");
        let newsDetailtd12 = document.createElement("td");

        let newsDetailtdText11 = document.createTextNode("Category: ");
        let newsDetailtdText12 = document.createTextNode(newsArray[key].category);

        let newsDetailtd21 = document.createElement("td");
        let newsDetailtd22 = document.createElement("td");

        let newsDetailtdText21 = document.createTextNode("Title: ");
        let newsDetailtdText22 = document.createTextNode(newsArray[key].title);

        let newsDetailtd31 = document.createElement("td");
        let newsDetailtd32 = document.createElement("td");

        let newsDetailtdText31 = document.createTextNode("Description: ");
        let shortDescription = "";

        if (newsArray[key].description !== null) {
            console.log("Description Length: ", newsArray[key].description.length)
            if (newsArray[key].description.length > 200) {
                shortDescription = newsArray[key].description.slice(0, 200);
                console.log("Last character", shortDescription.charAt(shortDescription.length - 1));
                if (shortDescription.charAt(shortDescription.length - 1) !== ".") {
                    shortDescription += "...";
                }
            }
            else {
                shortDescription = newsArray[key].description;
            }
        }

        let newsDetailtdText32 = document.createTextNode(shortDescription);
        let newsDetailtdLink32 = document.createElement("a");
        let newsDetailtdLinkText32 = document.createTextNode(" View Details");
        let newsDetailtd41 = document.createElement("td");
        let newsDetailtd42 = document.createElement("td");
        let newsDetailtdText41 = document.createTextNode("News Date / Time: ");
        let newsDetailtdText42 = document.createTextNode(formatDate(newsArray[key].pubDate));

        newsDetailtd11.setAttribute("class", "key");
        newsDetailtd12.setAttribute("class", "value");

        newsDetailtd21.setAttribute("class", "key");
        newsDetailtd22.setAttribute("class", "value");

        newsDetailtd31.setAttribute("class", "key");
        newsDetailtd32.setAttribute("class", "value");

        newsDetailtdLink32.setAttribute("onClick", `showNewsDetail(${key})`)

        newsDetailtdLink32.setAttribute("href", "#");
        newsDetailtd41.setAttribute("class", "key");
        newsDetailtd42.setAttribute("class", "value");
        newsDetailtd11.appendChild(newsDetailtdText11);
        newsDetailtd12.appendChild(newsDetailtdText12);

        newsDetailtd21.appendChild(newsDetailtdText21);
        newsDetailtd22.appendChild(newsDetailtdText22);

        newsDetailtd31.appendChild(newsDetailtdText31);
        newsDetailtd32.appendChild(newsDetailtdText32);

        newsDetailtd32.appendChild(newsDetailtdLink32);
        newsDetailtdLink32.appendChild(newsDetailtdLinkText32);

        newsDetailtd41.appendChild(newsDetailtdText41);
        newsDetailtd42.appendChild(newsDetailtdText42);

        newsDetailtr1.appendChild(newsDetailtd11)
        newsDetailtr1.appendChild(newsDetailtd12)

        newsDetailtr2.appendChild(newsDetailtd21)
        newsDetailtr2.appendChild(newsDetailtd22)

        newsDetailtr3.appendChild(newsDetailtd31)
        newsDetailtr3.appendChild(newsDetailtd32)

        newsDetailtr4.appendChild(newsDetailtd41)
        newsDetailtr4.appendChild(newsDetailtd42)

        newsDetail.appendChild(newsDetailtr1)
        newsDetail.appendChild(newsDetailtr2)
        newsDetail.appendChild(newsDetailtr3)
        newsDetail.appendChild(newsDetailtr4)

        newsDetailDiv.appendChild(newsDetail)
    }
}

function formatDate(date) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear(),
        hours = '' + d.getHours(),
        minutes = '' + d.getMinutes(),
        seconds = '' + d.getSeconds();

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }
    if (hours.length < 2) {
        hours = '0' + hours;
    }
    if (minutes.length < 2) {
        minutes = '0' + minutes;
    }
    if (seconds.length < 2) {
        seconds = '0' + seconds;
    }
    return [day, month, year].join('-') + " " + hours + ":" + minutes + ":" + seconds;
}

/* Display modal box */

let mh = document.getElementById("modalheader");

function showNewsDetail(p_key) {

    let mb = document.getElementById("modalbody");

    mb.innerText = "";

    let mhead = document.getElementById("h2");
    mhead.innerText = "News Details"

    let mfoot = document.getElementById("h3");
    mfoot.innerHTML = "Developed by: <em>Nasir Raza</em>";

    let newsDetailPara = document.createElement("p");
    let newsDetailParaText = "";

    if (newsArray[p_key].description !== null) {
        newsDetailParaText = document.createTextNode(newsArray[p_key].description);
    }
    else {
        newsDetailParaText = document.createTextNode("Details not found for this news.");
    }

    let newsDetailParaImage = "";

    if (newsArray[p_key].image_url !== null) {
        newsDetailParaImage = document.createElement("img");
        newsDetailParaImage.setAttribute("src", `${newsArray[p_key].image_url}`);
        newsDetailParaImage.setAttribute("alt", "Error loading image..." );
    }
    newsDetailPara.appendChild(newsDetailParaText);
    if (newsArray[p_key].image_url !== null) {
        newsDetailPara.appendChild(newsDetailParaImage);
    }
    mb.appendChild(newsDetailPara);
    modal.style.display = "block";
}

/* For closing the modal box */
let modal = document.getElementById("myModal");
let span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
}

/* Function for redirecting to authorize page */

function showAuthorizePage() {
    window.location.replace("../../authorize.html");
}