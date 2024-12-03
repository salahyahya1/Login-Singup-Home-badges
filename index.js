var LogoutButton = document.getElementById("LogoutButton");
var loginButton = document.getElementById("loginButton");
var SignupButton = document.getElementById("SignupButton");

// banars
var Success = document.getElementById("Success");
var fail = document.getElementById("fail");
var failToLogin = document.getElementById("failToLogin");


var UserName = document.querySelector("#UserName");
var UserEmail = document.querySelector("#UserEmail");
var password = document.querySelector("#password");
var UserEmail_login = document.querySelector("#UserEmail_login");
var password_login = document.querySelector("#password_login");

LogoutButton?.addEventListener("click", () => {
    location.href = "index.html";
})

loginButton?.addEventListener("click", () => {
    getDataFromLogIn();
})

SignupButton?.addEventListener("click", () => {
    getDataFromSignUp();
})
var usersList = [];
if (localStorage.getItem("usersList") != null) {
    var usersList = JSON.parse(localStorage.getItem("usersList"));
}


function getDataFromSignUp() {
    if ((UserName.value && UserEmail.value && password.value) !== "") {
        var user = {
            UserName: UserName.value,
            UserEmail: UserEmail.value,
            password: password.value
        }
        usersList.push(user);
        console.log(usersList);
        localStorage.setItem("usersList", JSON.stringify(usersList));
        clear();
        if (fail.classList.contains("d-block")) {
            fail.classList.replace("d-block", "d-none");
        }
        Success.classList.replace("d-none", "d-block")
    }
    else {
        if (Success.classList.contains("d-block")) {
            Success.classList.replace("d-block", "d-none");
        }
        fail.classList.replace("d-none", "d-block")
    }

}

function getDataFromLogIn() {
    if ((UserEmail_login.value && password_login.value) !== "") {
        for (let index = 0; index < usersList?.length; index++) {
            if (UserEmail_login.value === usersList[index].UserEmail && password_login.value === usersList[index].password) {
                location.href = "home.html";
                sessionStorage.setItem("name", usersList[index].UserName)
                console.log(usersList[index].UserName);
                // namee()
                // console.log(usersList[index]);
                clear();
                var x = true
                return x;
            }
        }
        if (!x) {
            if (fail.classList.contains("d-block")) {
                fail.classList.replace("d-block", "d-none");
            }
            failToLogin.classList.replace("d-none", "d-block")
        }
    }
    else {
        //still like that
        if (failToLogin.classList.contains("d-block")) {
            failToLogin.classList.replace("d-block", "d-none");
        }
        fail.classList.replace("d-none", "d-block")
    }

}
// document.querySelector(".homeCard").innerHTML = `<p class="mb-0">Welcome 11 ${JSON.parse(localStorage.getItem("usersList"))[index].UserName}</p>`
function namee() {
    document.querySelector(".homeCard").innerHTML = `<p class="mb-0">Welcome ${sessionStorage.getItem("name")}</p>`
    // document.querySelector(".homeCard").innerHTML = `<p class="mb-0">Welcome ${sessionStorage.getItem("name")}</p>`
}
function clear() {
    UserName.value = ""
    UserEmail.value = ""
    password.value = ""
}
