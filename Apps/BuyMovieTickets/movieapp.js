/*Coded by 
     Name	: Nasir Raza
     Roll #	: KH01210813250
*/
var movieList = [
    {
        "id": 1,
        "name": "Drive",
        "genre": "Action",
        "poster": "",
        "isselected": 0
    },
    {
        "id": 2,
        "name": "Jurassic Park",
        "genre": "Action",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 3,
        "name": "Kick Boxer",
        "genre": "Action",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 4,
        "name": "Man of Steel",
        "genre": "Action",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 5,
        "name": "Memory",
        "genre": "Action",
        "poster": "",
        "isselected": 0
    },
    {
        "id": 6,
        "name": "Twister",
        "genre": "Action",
        "poster": "",
        "isselected": 0

        
        /*
        "avilableseats":[4, 5, 6, 7, 8, 9, 10, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49],
        "reservedseats": [0, 1, 2, 3, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 31, 32, 33, 34, 35, 36, 37],
        "bookdate": "",
        "bookinguserid": 2
        */
    },
    {
        "id": 7,
        "name": "Carrie",
        "genre": "Horror",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 8,
        "name": "Dracula",
        "genre": "Horror",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 9,
        "name": "Scream",
        "genre": "Horror",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 10,
        "name": "Seven",
        "genre": "Horror",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 11,
        "name": "Species",
        "genre": "Horror",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 12,
        "name": "The Mummy",
        "genre": "Horror",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 13,
        "name": "Ghostbusters",
        "genre": "Action",
        "poster": "",
        "isselected": 0

    },
    {
        "id": 14,
        "name": "Wild-At-Heart",
        "genre": "Crime / Drama",
        "poster": "",
        "isselected": 0

    },
];

let loggedinUserId = "";

console.log(movieList)

// Saving movies to local storage
window.localStorage.setItem("movies", JSON.stringify(movieList));

// Getting movies from local storage
let localStroageMovieList = window.localStorage.getItem(("movies"));
if (localStroageMovieList) {
    localStroageMovieList = JSON.parse(localStroageMovieList);
}

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

for (let key in localStroageMovieList) {
    console.log(localStroageMovieList[key].id)
    console.log(localStroageMovieList[key].name)
    console.log(localStroageMovieList[key].genre)
    console.log(localStroageMovieList[key].poster)
    console.log(localStroageMovieList[key].isselected)
}

function bookMovie(element){


    // let img = document.getElementsByTagName("img");

    // for (let i =0; i < img.length; i++){
    //     img.setAttribute("id", "id" + i);
    // }
console.log(img)
    
 alert(element)
}

/* Function for redirecting to authorize page */

function showAuthorizePage() {
    window.location.replace("../../authorize.html");
}
