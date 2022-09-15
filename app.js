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

/* creating constructor for user object*/

function UserObject(id, username, email, password, confPassword, dob, gender, address, postcode, profilepicture) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.password = password;
    this.confPassword = confPassword;
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
        userObjectArr.push(new UserObject(count, username, email, password, confPassword, dob, gender, address, postcode, profilepicture));
        count++;
        document.getElementById("username").value = "";
        document.getElementById("email").value = "";
        document.getElementById("password").value = "";
        document.getElementById("conf-password").value = "";
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

function loadFile(event) {
    profileImage.setAttribute("src", URL.createObjectURL(event.target.files[0]));
}

/* Show the loader control */

var myVar;
var page;
var userObjectKey;
// var localStorageUserobj;

var localStorageUserobj = window.localStorage.getItem("userObjects");
localStorageUserobj = JSON.parse(localStorageUserobj);
// console.log(localStorageUserobj);


function myFunction(p_page, id) {
    page = p_page;
    userObjectKey = id;
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
            
            console.log("Key", key);
            if (email !== localStorageUserobj[key].email) {
                alert("Email not found.");
            }
            else if (password !== localStorageUserobj[key].password) {
                alert("Incorrect password. Please enter correct password.");
            }
            else {
                // var userObjectKey = localStorageUserobj[key].id;    
                // console.log("userObjectkey",userObjectKey)
                myFunction("signin", key);
            }
        }
    
    }
}
console.log(localStorageUserobj)
function fillUserInfo() {
 console.log(localStorageUserobj[userObjectKey].profilepicture )
 document.getElementById("profile-pic").src = localStorageUserobj[userObjectKey].profilepicture;
    alert("hello");
}