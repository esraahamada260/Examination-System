////////////////  LOG IN  ////////////////
let logIn = document.getElementById("log-in");

logIn.addEventListener("submit" , function (e) {
    e.preventDefault();

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value
    let emailWarn = document.getElementById("emailWarn");
    let passwordWarn = document.getElementById("passwordWarn");


    emailWarn.textContent = "";
    emailWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    passwordWarn.textContent = "";
    passwordWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");
    

    let valid = false;
    let emailExist = false;
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users.forEach((user) => {
        if(user.email === email) {
            emailExist = true;
            if(user.password === password) {
                valid = true;
            }
            else {
                passwordWarn.textContent = "Password is wrong!"
            }
        }
    });

    if(!emailExist) {
            emailWarn.textContent = "Email Doesn't Exist!"
        }

    if(valid) {
            let currentUser = users.find(u => u.email === email);
            localStorage.setItem("currentUser", JSON.stringify(currentUser));
            window.location.replace("quistions.html");
        }
})

