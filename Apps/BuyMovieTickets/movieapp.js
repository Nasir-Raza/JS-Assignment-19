/*Coded by 
     Name	: Nasir Raza
     Roll #	: KH01210813250
*/
var movieList = [
    {
        "id": 1,
        "name": "Drive",
        "genre": "Action",
        "poster": "./assets/action-drive-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 2,
        "name": "Jurassic Park",
        "genre": "Action",
        "poster": "./assets/action-jurassic-park-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 3,
        "name": "Kick Boxer",
        "genre": "Action",
        "poster": "./assets/action-kickboxer-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 4,
        "name": "Man of Steel",
        "genre": "Action",
        "poster": "./assets/action-man-of-steel-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 5,
        "name": "Memory",
        "genre": "Action",
        "poster": "./assets/action-memory-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 6,
        "name": "Twister",
        "genre": "Action",
        "poster": "./assets/action-twister-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 7,
        "name": "Carrie",
        "genre": "Horror",
        "poster": "./assets/horror-carrie-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 8,
        "name": "Dracula",
        "genre": "Horror",
        "poster": "./assets/horror-dracula-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 9,
        "name": "Scream",
        "genre": "Horror",
        "poster": "./assets/horror-scream-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 10,
        "name": "Seven",
        "genre": "Horror",
        "poster": "./assets/horror-seven-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 11,
        "name": "Species",
        "genre": "Horror",
        "poster": "./assets/horror-species-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 12,
        "name": "The Mummy",
        "genre": "Horror",
        "poster": "./assets/horror-the-mummy-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 13,
        "name": "Ghostbusters",
        "genre": "Action",
        "poster": "./assets/recommended-ghostbusters-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
    {
        "id": 14,
        "name": "Wild-At-Heart",
        "genre": "Crime / Drama",
        "poster": "./assets/recommended-wild-at-heart-movie-poster.jpg",
        "isSelected": 0,
        "seats": ["avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl", "avl"]
    },
];

let loggedinUserId = "";
let noOfSeatsSelected = 0;
let selectedMovieId = "";
let localStroageMovieList;
let selectedSeats = [];

console.log(movieList)

function saveMoviesLocalStorage() {
    localStroageMovieList = window.localStorage.getItem("movies");
    if (!localStroageMovieList) {
        // Saving movies to local storage
        window.localStorage.setItem("movies", JSON.stringify(movieList));
    }
    // Getting movies from local storage
    localStroageMovieList = window.localStorage.getItem("movies");
    if (localStroageMovieList) {
        localStroageMovieList = JSON.parse(localStroageMovieList);
    }
}

//Function for getting currently logged in user id

function getLoggedinUserId(p_page) {

    let localStorageUserobj = window.localStorage.getItem("userObjects");
    if (localStorageUserobj) {
        localStorageUserobj = JSON.parse(localStorageUserobj);

        for (let key in localStorageUserobj) {
            if (localStorageUserobj[key].isAuthUser === true) {
                loggedinUserId = localStorageUserobj[key].id;
                console.log("Logged in user id -> ", loggedinUserId);
                break;
            }
        }
    }
    if (loggedinUserId === "") {
        showAuthorizePage();
    }
    else {
        if (p_page === "movie") {
            saveMoviesLocalStorage();
            fillMoviePosters();
        }
        else if (p_page === "movieb") {
            showMovie();
            markSeatsReseved();
        }
    }
}

function fillMoviePosters() {
    for (let key in localStroageMovieList) {
        document.getElementById("movie" + key).src = localStroageMovieList[key].poster;
        if (localStroageMovieList[key].name === "Twister") {
            document.getElementById("movie" + 14).src = localStroageMovieList[key].poster;
        }
        if (localStroageMovieList[key].name === "Scream") {
            document.getElementById("movie" + 15).src = localStroageMovieList[key].poster;
        }
    }
}

function selectSeats(p_id) {
    let divClass = document.getElementById(p_id).className;
    if (divClass.indexOf(" ") === -1 ) {
        document.getElementById(p_id).setAttribute("class", document.getElementById(p_id).className += " selected");
        noOfSeatsSelected++;
        console.log("Selected seat Id: ", p_id);
        selectedSeats.push(p_id);
        console.log(selectedSeats);
    }
    else {
        divClass = divClass.slice(0, divClass.indexOf(" "));
        document.getElementById(p_id).setAttribute("class", document.getElementById(p_id).className = divClass);
        noOfSeatsSelected--;
        console.log("Unselected seat Id: ", p_id);
        unselectSeat(p_id);
        console.log(selectedSeats);
    }
    document.getElementById("tot-seats").innerText = `# of seats selected: ${noOfSeatsSelected}`;
    let totalAmount = noOfSeatsSelected * 4.99;
    totalAmount = totalAmount.toFixed(2);
    document.getElementById("tot-amount").innerText = `Total amount: $${totalAmount}`;
}

function unselectSeat(p_seatId) {
    let index = selectedSeats.findIndex(
        (seatid) => {
            return seatid === p_seatId;
        });
    selectedSeats.splice(index, 1);
}

function selectMovie(p_id) {
    console.log("Parameter id in selectMovie: ", p_id)
    localStroageMovieList[p_id].isSelected = 1;
    // Saving movies updated data to local storage
    window.localStorage.setItem("movies", JSON.stringify(localStroageMovieList));
}

function unselectMovie() {
    for (let key in localStroageMovieList) {
        localStroageMovieList[key].isSelected = 0;
    }
    window.localStorage.setItem("movies", JSON.stringify(localStroageMovieList));
}

function showMovie() {
    localStroageMovieList = window.localStorage.getItem("movies");
    if (localStroageMovieList) {
        localStroageMovieList = JSON.parse(localStroageMovieList);
        for (let key in localStroageMovieList) {
            if (localStroageMovieList[key].isSelected === 1) {
                selectedMovieId = localStroageMovieList[key].id;
                document.getElementById("moviename").innerText = "Movie name: " + localStroageMovieList[key].name;
                document.getElementById("movieimage").src = localStroageMovieList[key].poster;
                break;
            }

        }
    }
}

function markSeatsReseved() {
    let selectedSeat = "";
    for (let i = 0; i < localStroageMovieList[selectedMovieId - 1].seats.length; i++) {
        if (localStroageMovieList[selectedMovieId - 1].seats[i] !== "avl") {
            let seatNum = localStroageMovieList[selectedMovieId - 1].seats[i];
            seatNum = seatNum.slice(0, seatNum.indexOf("#"));
            selectedSeat = document.getElementById(seatNum);
            selectedSeat.setAttribute("class", "reserved");
            selectedSeat.innerHTML = `<span> ${seatNum.toUpperCase()} Res.</span>`;
        }
    }
}

function confirmBooking() {
    console.log("User id: ", loggedinUserId);
    console.log("Movie Id: ", selectedMovieId);
    console.log("Selected seats: ", selectedSeats);

    for (let i = 0; i < selectedSeats.length; i++ ) {
        let arrIndex = selectedSeats[i].slice(2);
        localStroageMovieList[selectedMovieId - 1].seats[arrIndex - 1] = selectedSeats[i] + "#usr-" + loggedinUserId;
    }
    // Saving movies updated data to local storage
    window.localStorage.setItem("movies", JSON.stringify(localStroageMovieList));
    // Getting updated movies data from local storage
    localStroageMovieList = window.localStorage.getItem("movies");
    localStroageMovieList = JSON.parse(localStroageMovieList);
    markSeatsReseved();
}

function cancelSelection() {
    // alert("Cancel Booking");

    window.location.reload();
    // showMovie();
    // markSeatsReseved();

}

/* Function for redirecting to authorize page */
function showAuthorizePage() {
    window.location.replace("../../authorize.html");
}
