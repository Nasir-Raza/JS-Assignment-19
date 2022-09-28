/*Coded by 
     Name	: Nasir Raza
     Roll #	: KH01210813250
*/
let profileImage = document.getElementById("profileImage");
let userObjectArr = [];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let male = "", female = "";
let count = 0;
let isValidRecord;
let isAuthenticated;
let isAlreadyRegistered;
let loggedinUserId = "";
let localStorageUserobj = "";
// let messageText = "";

// Retrieving users data saved in local storage
function getUsersData() {
    localStorageUserobj = window.localStorage.getItem("userObjects");

    if (localStorageUserobj) {
        localStorageUserobj = JSON.parse(localStorageUserobj);
    }
}


/* creating constructor for user object*/

function UserObject(id, username, email, password, confPassword, contact, dob, gender, address, postcode, profilepicture, isAuthUser) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.confPassword = confPassword;
    this.contact = contact;
    this.dob = dob;
    this.gender = gender;
    this.address = address;
    this.postcode = postcode;
    this.profilepicture = profilepicture;
    this.isAuthUser = isAuthUser;
}

function createAndAddObjToArray() {
    console.log("Inside createAndAddObjToArray function Block")
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var confPassword = document.getElementById("conf-password").value;
    var contact = document.getElementById("contact").value;
    var dob = setDob(document.getElementById("dob").value);
    male = document.getElementById("male");
    female = document.getElementById("female");
    var gender = getGender(male.checked);
    var address = document.getElementById("address").value;
    var postcode = document.getElementById("postcode").value;
    var profilepicture = document.getElementById("profileImage").src;

    //Getting previously saved user data from local storage

    let prevUsers = window.localStorage.getItem("userObjects");
    if (prevUsers) {
        prevUsers = JSON.parse(prevUsers);
        userObjectArr = [...prevUsers];
        console.log("Previous Users: ", userObjectArr);
        count = userObjectArr[userObjectArr.length - 1].id + 1;
        console.log("count ", count)
        for (let key in prevUsers) {
            if (prevUsers[key].email === email) {
                isAlreadyRegistered = true;
                break;
            }
            else {
                isAlreadyRegistered = false;
            }
        }
    }

    if (password !== confPassword) {
        isValidRecord = false;
    }
    else {
        isValidRecord = true;
    }

    if (isAlreadyRegistered) {
        showMessageBox("The email id is already registered. Please enter other email id...");
    }
    else if (!isValidRecord) {
        showMessageBox("Password and Confirm Password are not matched. Please enter again...")
        document.getElementById("password").value = "";
        document.getElementById("conf-password").value = "";
        document.getElementById("password").focus();
    }

    console.log("Is Valid Record", isValidRecord);

    if (isValidRecord && !isAlreadyRegistered) {

        console.log("count ", count)
        userObjectArr.push(new UserObject(count, username, email, password, confPassword, contact, dob, gender, address, postcode, profilepicture, false));
        count++;
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("conf-password").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("dob").value = "";
        male.checked = true;
        female.checked = false;
        document.getElementById("address").value = "";
        document.getElementById("postcode").value = "";
        document.getElementById("profileImage").src = "./assets/upload-user.jpg";

        //Saving user objects to local storage 
        window.localStorage.setItem("userObjects", JSON.stringify(userObjectArr));
        console.log(userObjectArr);
        showMessageBox("Congratulations! you have successfully registered.");
    }
}

function setDob(pDob) {
    if (pDob === "") {
        return pDob;
    }
    else {
        pDob = new Date(pDob);
        var dd = pDob.getDate() < 10 ? "0" + pDob.getDate() : "" + pDob.getDate();
        var mm = months[pDob.getMonth()];
        var yyyy = pDob.getFullYear();
        return (dd + "-" + mm + "-" + yyyy);
    }
}

function getDob(pDob) {
    if (pDob === "") {
        return pDob;
    }
    else {
        pDob = new Date(pDob);
        var dd = pDob.getDate() < 10 ? "0" + pDob.getDate() : "" + pDob.getDate();
        var mm = (pDob.getMonth() + 1) < 10 ? "0" + (pDob.getMonth() + 1) : "" + (pDob.getMonth() + 1);
        var yyyy = pDob.getFullYear();
        return (yyyy + "-" + mm + "-" + dd);
    }
}

function getGender(p_male) {
    if (p_male) {
        return male.value;
    }
    else {
        return female.value;
    }
}

// Converting profile picture to base64 string
function loadFile(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        var imageData = reader.result;
        var profPict = document.getElementById("profileImage");
        profPict.src = imageData;
    }
    reader.readAsDataURL(file);
}

/* Show the loader control */

var myVar;
var page;

// var localStorageUserobj = window.localStorage.getItem("userObjects");
// localStorageUserobj = JSON.parse(localStorageUserobj);

function myFunction(p_page) {

    page = p_page;
    console.log("Inside myFunction")
    document.getElementById("myDiv").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("loader").style.display = "block";
    myVar = setTimeout(showDiv, 1000);
}


function showDiv() {
    if (page === "index") {
        document.getElementById("myDivPara").innerText = "Thanks for registered with us. Now redirecting to Sign In page..."
    }
    else {
        document.getElementById("myDivPara").innerText = "Authentication is successful. Loading the main application page..."
    }
    document.getElementById("main").style.display = "none";
    document.getElementById("loader").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
    myVar = setTimeout(hideDiv, 2000);
}

function hideDiv() {
    if (page === "index") {
        document.getElementById("myDiv").style.display = "none";

        // Simulate an HTTP redirect:
        window.location.replace("./signin.html");
    }
    else {
        document.getElementById("myDiv").style.display = "none";

        // Simulate an HTTP redirect:
        window.location.replace("./dashboard.html");
    }
}

function verifyPassword() {
    console.log(localStorageUserobj);

    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "") {
        showMessageBox("Please enter your email id...");
        document.getElementById("email").focus();
    }
    else if (password === "") {
        showMessageBox("Please enter your password...");
        document.getElementById("password").focus();
    }
    else {
        for (var key in localStorageUserobj) {
            console.log("key", key)
            console.log(email);
            console.log(password);

            if (email === localStorageUserobj[key].email && password === localStorageUserobj[key].password) {
                console.log("inside if")
                isAuthenticated = true;
                localStorageUserobj[key].isAuthUser = true;
                console.log(localStorageUserobj[key].isAuthUser)
            }
            else {
                localStorageUserobj[key].isAuthUser = false;
                console.log(localStorageUserobj[key].isAuthUser)
            }

        }

        if (isAuthenticated) {
            isAuthenticated = false;
            window.localStorage.setItem("userObjects", JSON.stringify(localStorageUserobj));
            myFunction("signin");
        }
        else {
            showMessageBox("Incorrect email id or password. Please enter again...");
            document.getElementById("password").focus();
        }
    }
}


/* Start - JS related to dashboard application  */

//Function for getting currently logged in user id

function getLoggedinUserId() {
    getUsersData();
    for (let key in localStorageUserobj) {
        if (localStorageUserobj[key].isAuthUser === true) {
            loggedinUserId = localStorageUserobj[key].id;
            console.log("Logged in user id -> ", loggedinUserId);
            break;
        }

    }
    if (loggedinUserId === "") {
        showAuthorizePage();
    }
    else {
        fillUserInfo();
    }
}

function fillUserInfo() {
    document.getElementById("username").innerText += " " + localStorageUserobj[loggedinUserId].username;

    document.getElementById("logout").src = localStorageUserobj[loggedinUserId].profilepicture;

    document.getElementById("profile-pic").src = localStorageUserobj[loggedinUserId].profilepicture;

    var gen = localStorageUserobj[loggedinUserId].gender === "m" ? "Male" : "Female";

    if (gen === "Female") {
        document.getElementById("genderimg").src = "./assets/female.png";
    }

    document.getElementById("gender").innerHTML += " " + gen;

    document.getElementById("dob").innerHTML += " " + localStorageUserobj[loggedinUserId].dob;

    document.getElementById("address").innerHTML += " " + localStorageUserobj[loggedinUserId].address;

    document.getElementById("postcode").innerHTML += " " + localStorageUserobj[loggedinUserId].postcode;

    document.getElementById("contact").innerHTML += " " + localStorageUserobj[loggedinUserId].contact;

    document.getElementById("email").innerHTML += " " + localStorageUserobj[loggedinUserId].email;
    
    loadTodoDetails();
}

//  for loading todo application

function loadTodo() {
    window.location.replace("./Apps/Todo/todo.html");
}

//Get todo object details for logged in user from local storage

function loadTodoDetails() {

        var localStorageTodoobj = window.localStorage.getItem("todoObjects");
        localStorageTodoobj = JSON.parse(localStorageTodoobj);
    
        var todoComplete = 0, todoNotComplete = 0;
        var unorderList = document.createElement("ul");
        for (var key in localStorageTodoobj) {
            if (parseInt(localStorageTodoobj[key].userId) === loggedinUserId) {
    
    
                if (localStorageTodoobj[key].isCompleted === 0) {
                    todoNotComplete++;
                    var unoListItems = document.createElement("li");
                    var unoListItemsText = document.createTextNode(localStorageTodoobj[key].description);
                    unoListItems.appendChild(unoListItemsText);
                    unoListItems.setAttribute("class", "todo-notcomplete")
                    unorderList.appendChild(unoListItems);
                }
                else {
                    todoComplete++;
                    var unoListItems = document.createElement("li");
                    var unoListItemsText = document.createTextNode(localStorageTodoobj[key].description);
                    unoListItems.appendChild(unoListItemsText);
                    unoListItems.setAttribute("class", "todo-complete")
                    unorderList.appendChild(unoListItems);
                }
    
            }
        }
    
        document.getElementById("todohead").innerHTML += " " + "Completed: " + todoComplete + " " + "Not Completed: " + todoNotComplete;
    
        document.getElementById("tododetail").appendChild(unorderList);
}

//  for loading movie ticket application

function loadMovie() {
    window.location.replace("./Apps/BuyMovieTickets/movie.html");
}

//  for loading news application

function loadNews() {
    window.localStorage.setItem("countryCode", document.getElementById("country").value);
    window.location.replace("./Apps/News/news.html");
}

//  for logging out from dashboard

function logoutDashboard() {
    console.log("Inside logoutDashboard() -> loggedinUserId", loggedinUserId);
    console.log(localStorageUserobj);

    localStorageUserobj[loggedinUserId].isAuthUser = false;
    window.localStorage.setItem("userObjects", JSON.stringify(localStorageUserobj));
    window.localStorage.removeItem("countryCode");
    window.location.replace("./signin.html");
}

/* End - JS related to dashboard application  */

/* Start -> function for showing / hiding message box */

function showMessageBox(p_messageText) {
    console.log("Inside showMessageBox()");
    console.log(p_messageText);
    document.getElementById("message").innerText = p_messageText;
    document.getElementById("message").style.display = "flex";
    myVar = setTimeout(hideMessageBox, 2000);
}

function hideMessageBox() {
    console.log("Inside hideMessageBox()");
    document.getElementById("message").style.display = "none";
}

/* End -> function for showing / hiding message box */


/* Function for redirecting to authorize page */

function showAuthorizePage() {
    window.location.replace("./authorize.html");
}
