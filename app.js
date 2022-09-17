/*Coded by 
     Name	: Nasir Raza
     Roll #	: KH01210813250
*/
var profileImage = document.getElementById("profileImage");
var userObjectArr = [];
var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var male = "", female = "";
var count = 0;
var isValidRecord;
var IsAuthenticated;

/* creating constructor for user object*/

function UserObject(id, username, email, password, confPassword,contact, dob, gender, address, postcode, profilepicture) {
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

    if (password !== confPassword) {
        alert("Password and Confirm Password are not matched.");
        isValidRecord = false;
        document.getElementById("password").value = "";
        document.getElementById("conf-password").value = "";
        document.getElementById("password").focus();
    }
    else {
        isValidRecord = true;
    }

    console.log("Is Valid Record", isValidRecord);

    if (isValidRecord) {
        userObjectArr.push(new UserObject(count, username, email, password, confPassword, contact, dob, gender, address, postcode, profilepicture));
        count++;
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("conf-password").value = "";
        document.getElementById("contact").value = "";
        document.getElementById("dob").value = "";
        male.checked = true ;
        female.checked = false;
        document.getElementById("address").value = "";
        document.getElementById("postcode").value = "";
        document.getElementById("profileImage").src = "./assets/upload-user.jpg";

        //Saving user objects to local storage 
        window.localStorage.setItem("userObjects", JSON.stringify(userObjectArr));

        console.log(userObjectArr);
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
        return(yyyy + "-" + mm + "-" + dd);
    }
}

function getGender(pmale) {
    if(pmale) {
        return male.value;
    }
    else
    {
        return female.value;
    }
}

function loadFile(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function() {
    var imageData = reader.result;
    var profPict = document.getElementById("profileImage");
    profPict.src = imageData;
    }
    reader.readAsDataURL(file);
}

/* Show the loader control */

var myVar;
var page;

var localStorageUserobj = window.localStorage.getItem("userObjects");
localStorageUserobj = JSON.parse(localStorageUserobj);

function myFunction(p_page) {

    page = p_page;
    console.log("Inside myFunction")
    document.getElementById("myDiv").style.display = "none";
    document.getElementById("main").style.display = "block";
    document.getElementById("loader").style.display = "block";
    myVar = setTimeout(showDiv, 2000);
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
    myVar = setTimeout(hideDiv, 4000);
}

function hideDiv() {
    if (page === "index"){
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
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    
    if(email === ""){
        alert("Enter your email.");
    }
    else if (password === "" ) {
        alert("Enter your password.");
    }
    else {
        for (var key in localStorageUserobj){
            
            // console.log("Key", key);
            console.log(email);
            console.log(password);

            if (email === localStorageUserobj[key].email && password === localStorageUserobj[key].password) {
                IsAuthenticated = true;
                break;
            }
            else {
                IsAuthenticated = false;
            }
        }
        
        if (IsAuthenticated) {
            window.localStorage.setItem("userId", key); 
            myFunction("signin");
         }
        else {
            alert("Incorrect Email or Password. Please enter again.");          
        }
    }
}

function fillUserInfo() {
    var loggedinUserId = window.localStorage.getItem("userId");
    
    document.getElementById("username").innerText += " " + localStorageUserobj[loggedinUserId].username;
    
    document.getElementById("profile-pic").src = localStorageUserobj[loggedinUserId].profilepicture;
    
    var gen = localStorageUserobj[loggedinUserId].gender === "m" ? "Male" : "Female";
    
    if (gen === "Female") {
        document.getElementById("genderimg").src  = "./assets/female.png" ;
    }

    document.getElementById("gender").innerHTML += " " + gen;

    document.getElementById("dob").innerHTML += " " + localStorageUserobj[loggedinUserId].dob;
   
    document.getElementById("address").innerHTML += " " + localStorageUserobj[loggedinUserId].address;
    
    document.getElementById("postcode").innerHTML += " " + localStorageUserobj[loggedinUserId].postcode;

    document.getElementById("contact").innerHTML += " " + localStorageUserobj[loggedinUserId].contact;
 
    document.getElementById("email").innerHTML += " " + localStorageUserobj[loggedinUserId].email;

    //Get todo objects from local storage
    var localStorageTodoobj = window.localStorage.getItem("todoObjects");
    localStorageTodoobj = JSON.parse(localStorageTodoobj);
    
    var todoComplete = 0, todoNotComplete = 0; 
    var unorderList = document.createElement("ul");
    for (var key in localStorageTodoobj) {
        if (localStorageTodoobj[key].userId === loggedinUserId) {
            

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