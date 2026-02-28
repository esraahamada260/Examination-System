
function login() {
    window.location.href ="login.html";
}


function signUp() {
    window.location.href = "SignUp.html";
}




// ////////////////  SIGN UP  ////////////////

// let signUpForm = document.getElementById("sign-up-form");
// signUpForm.addEventListener("submit",function (e) {
//     e.preventDefault()

//     let firstName = document.getElementById("firstName").value.trim();
//     let lastName = document.getElementById("lastName").value.trim();
//     let email = document.getElementById("emailInput").value.trim();
//     let password = document.getElementById("passwordInput").value;
//     let repassward = document.getElementById("re-enterPassword").value;
    
//     let firstNameWarn = document.getElementById("first-name");
//     let lastNameWarn = document.getElementById("last-name");
//     let emailWarn = document.getElementById("emailWarning");
//     let passwardWarn = document.getElementById("passwordWarning");
//     let repasswardWarn = document.getElementById("re-enterPasswordWarning");
    
    
//     let nameRegex = /^[A-Za-z]{3,}$/;
//     let emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
//     let allRequired = document.getElementById("all-required");
//     let valid = true;

//         allRequired.textContent = ""
//         firstNameWarn.textContent = "";
//         lastNameWarn.textContent = "";
//         emailWarn.textContent = "";
//         passwardWarn.textContent = "";
//         repasswardWarn.textContent = "";


//     if(firstName === "" || lastName === "" || email === "" || password === "" || repassward === "") {
//         allRequired.textContent = "All fields are required!!"
//             valid = false;
//     }
//     if (nameRegex.test(firstName) == false) {
//         firstNameWarn.textContent = "Write a vaild name.";
//             valid = false;
//     }
//     if (nameRegex.test(lastName) == false) {
//         lastNameWarn.textContent = "Write a vaild name.";
//             valid = false;
//     }
//     if (emailRegex.test(email) == false){
//         emailWarn.textContent = "Write a valid email."
//             valid = false;
//     }
//     if (password.length < 8) {
//         passwardWarn.textContent = "Passward should be at lest 8 characters.";
//             valid = false;
//     }
//     if (password != repassward) {
//         repasswardWarn.textContent = "Do not match the passward."
//             valid = false;
//     }
//     if(valid) {
//         let users = JSON.parse(localStorage.getItem("users")) || [];
//         let emailIsEsist = users.some(user => user.email === email);
//         if(emailIsEsist) {
//             emailWarn.textContent = "Email is Exist!";
//             return;
//         }

//         let user = {
//             id: Date.now(),
//             firstName: firstName,
//             lastName: lastName,
//             email: email,
//             password: password,
//             examTaken: false,
//             score: null
//         };

//         users.push(user);
//         localStorage.setItem("users",JSON.stringify(users));
//         window.location.replace("quistions.html");
        
//     }

// });


// ////////////////  LOG IN  ////////////////
// let logIn = document.getElementById("log-in");

// logIn.addEventListener("submit" , function (e) {
//     e.preventDefault();

//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value
//     let emailWarn = document.getElementById("emailWarn");
//     let passwordWarn = document.getElementById("passwordWarn");


//     emailWarn.textContent = "";
//     passwordWarn.textContent = "";

//     let valid = false;
//     let emailExist = false;
//     let users = JSON.parse(localStorage.getItem("users")) || [];
//     users.forEach((user) => {
//         if(user.email === email) {
//             emailExist = true;
//             if(user.password === password) {
//                 valid = true;
//             }
//             else {
//                 passwordWarn.textContent = "Password is wrong!"
//             }
//         }
//     });

//     if(!emailExist) {
//             emailWarn.textContent = "Email Doesn't Exist!"
//         }

//     if(valid) {
//             window.location.replace("quistions.html");
//         }
// })
// console.log("hello")
  





















// function firstNameValidation(){
//     var nameInput=document.getElementById("firstName")
//     var invalidInput=/[^a-zA-Z\u0600-\u06FF\s]/g
//     nameInput.value=nameInput.value.replace(invalidInput,"")
// }

// function lastNameValidation(){
//     var nameInput=document.getElementById("lastName")
//     var invalidInput=/[^a-zA-Z\u0600-\u06FF\s]/g
//     nameInput.value=nameInput.value.replace(invalidInput,"");
// }

// function checkEmail(){
//     var emailInput=document.getElementById("emailInput")
//     var validInput=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
//     if(!validInput.test(emailInput.value)){
//         return false
//     }
//     else{
//         return true
//     }
// }

// function emailValidation(){
//     if(!checkEmail()){
//         var emailWarning=document.getElementById("emailWarning")
//         emailWarning.textContent="Not a valid Email"
//     }
//     else{
//         var emailWarning=document.getElementById("emailWarning")
//         emailWarning.textContent=""
//     }
// }

// function passwordChange(){
//     var pass=document.getElementById("passwordInput").value
//     if (pass.length<8){
//         var passwordWarning=document.getElementById("passwordWarning")
//         passwordWarning.textContent="Password must be at least 8 characters"
//     }
//     else{
//         var passwordWarning=document.getElementById("passwordWarning")
//         passwordWarning.textContent=""
//     }
// }

// function reEnterPasswordChange(){
//     var passwordInput=document.getElementById("passwordInput").value
//     var reEnterPassword=document.getElementById("re-enterPassword").value
//     var reEnterPasswordWarning=document.getElementById("re-enterPasswordWarning")

//     if (reEnterPassword!=passwordInput){
//         reEnterPasswordWarning.textContent="The password you re-entered is not match with your password"
//     }
//     else if (reEnterPasswordWarning.textContent!=""){
//         reEnterPasswordWarning.textContent=""
//     }
// }

// function formCheck(event){
//     var fNameInput=document.getElementById("firstName").value
//     var fNameWarning=document.getElementById("fNameWarning")
//     if (fNameInput==""){
//         fNameWarning.textContent="First Name is required"
//         event.preventDefault()
//     }
//     else if (fNameWarning.textContent!=""){
//         fNameWarning.textContent=""
//     }

//     var lNameInput=document.getElementById("lastName").value
//     var lNameWarning=document.getElementById("lNameWarning")
//     if (lNameInput==""){
//         lNameWarning.textContent="Last Name is required"
//         event.preventDefault()
//     }
//     else if (lNameWarning.textContent!=""){
//         lNameWarning.textContent=""
//     }

//     var emailInput=document.getElementById("emailInput").value
//     var emailWarning=document.getElementById("emailWarning")
//     if (emailInput==""){
//         emailWarning.textContent="Email is required"
//         event.preventDefault()
//     }
//     else if (!checkEmail()){
//         var emailWarning=document.getElementById("emailWarning")
//         emailWarning.textContent="Not a valid Email"
//         event.preventDefault()
//     }
//     else if (emailWarning.textContent!=""){
//         emailWarning.textContent=""
//     }

//     var passwordInput=document.getElementById("passwordInput").value
//     var reEnterPassword=document.getElementById("re-enterPassword").value
//     var passwordWarning=document.getElementById("passwordWarning")
//     var reEnterPasswordWarning=document.getElementById("re-enterPasswordWarning")
//     if (passwordInput.length<8){
//         passwordWarning.textContent="Password must be at least 8 characters"
//         event.preventDefault()
//     }
//     else if (reEnterPassword!=passwordInput){
//         reEnterPasswordWarning.textContent="The password you re-entered is not match with your password"
//         event.preventDefault()
//     }
//     else if (passwordWarning.textContent!=""||reEnterPasswordWarning.textContent!=""){
//         passwordWarning.textContent=""
//         reEnterPasswordWarning.textContent=""
//     }
// }


