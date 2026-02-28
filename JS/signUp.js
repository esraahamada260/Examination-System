////////////////  SIGN UP  ////////////////

let signUpForm = document.getElementById("sign-up-form");
signUpForm.addEventListener("submit",function (e) {
    e.preventDefault()



    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let email = document.getElementById("emailInput").value.trim();
    let password = document.getElementById("passwordInput").value;
    let repassward = document.getElementById("re-enterPassword").value;
    
    let firstNameWarn = document.getElementById("first-name");
    let lastNameWarn = document.getElementById("last-name");
    let emailWarn = document.getElementById("emailWarning");
    let passwardWarn = document.getElementById("passwordWarning");
    let repasswardWarn = document.getElementById("re-enterPasswordWarning");
    
    
    let nameRegex = /^[A-Za-z]{3,}$/;
    let emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
    let allRequired = document.getElementById("all-required");
    let valid = true;

        allRequired.textContent = ""
        allRequired.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");
    
    firstNameWarn.textContent = "";
    firstNameWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    lastNameWarn.textContent = "";
    lastNameWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    emailWarn.textContent = "";
    emailWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    passwardWarn.textContent = "";
    passwardWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    repasswardWarn.textContent = "";
    repasswardWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");


    if(firstName === "" || lastName === "" || email === "" || password === "" || repassward === "") {
        allRequired.textContent = "All fields are required!!"
            valid = false;
    }
    if (nameRegex.test(firstName) == false) {
        firstNameWarn.textContent = "Write a vaild name.";
            valid = false;
    }
    if (nameRegex.test(lastName) == false) {
        lastNameWarn.textContent = "Write a vaild name.";
            valid = false;
    }
    if (emailRegex.test(email) == false){
        emailWarn.textContent = "Write a valid email."
            valid = false;
    }
    if (password.length < 8) {
        passwardWarn.textContent = "Passward should be at lest 8 characters.";
            valid = false;
    }
    if (password != repassward) {
        repasswardWarn.textContent = "Do not match the passward."
            valid = false;
    }
    if(valid) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        let emailIsEsist = users.some(user => user.email === email);
        if(emailIsEsist) {
            emailWarn.textContent = "Email is Exist!";
            return;
        }

        let user = {
            id: Date.now(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password,
            score: null,
            hasExamined: false,
            answers:[],
            shuffledQuestions:[]
        };

        users.push(user);
        localStorage.setItem("users",JSON.stringify(users));
        localStorage.setItem("currentUser", JSON.stringify(user));
        window.location.replace("quistions.html");
        
    }

});




document.addEventListener("DOMContentLoaded", function() {


    let firstNameInput = document.getElementById("firstName");
    let lastNameInput = document.getElementById("lastName");
    let emailInput = document.getElementById("emailInput");
    let passwordInput = document.getElementById("passwordInput");
    let rePasswordInput = document.getElementById("re-enterPassword");


    let firstNameWarn = document.getElementById("first-name");
    let lastNameWarn = document.getElementById("last-name");
    let emailWarn = document.getElementById("emailWarning");
    let passwardWarn = document.getElementById("passwordWarning");
    let repasswardWarn = document.getElementById("re-enterPasswordWarning");
    
    
        let nameRegex = /^[A-Za-z]{3,}$/;
        let emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
        
    firstNameWarn.textContent = "";
    firstNameWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    lastNameWarn.textContent = "";
    lastNameWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    emailWarn.textContent = "";
    emailWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    passwardWarn.textContent = "";
    passwardWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    repasswardWarn.textContent = "";
    repasswardWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");





   function setValid(input, messageElement) {
    input.classList.remove("outline-red-500");
    input.classList.add("outline-green-500");
    messageElement.textContent = "";
}

function setInvalid(input, messageElement, message) {
    input.classList.remove("outline-green-500");
    input.classList.add("outline-red-500");
    messageElement.textContent = message;
}


firstNameInput.addEventListener("input", function () {

    if (nameRegex.test(firstNameInput.value.trim())) {
        setValid(firstNameInput, firstNameWarn);
    } else {
        setInvalid(firstNameInput, firstNameWarn, "Write a valid name.");
    }
    });



lastNameInput.addEventListener("input", function () {
    if (nameRegex.test(lastNameInput.value.trim())) {
        setValid(lastNameInput, lastNameWarn);
    } else {
        setInvalid(lastNameInput, lastNameWarn, "Write a valid name.");
    }
});

emailInput.addEventListener("input", function () {
    if (emailRegex.test(emailInput.value.trim())) {
        setValid(emailInput, emailWarn);
    } else {
        setInvalid(emailInput, emailWarn, "Write a valid email.");
    }
});

passwordInput.addEventListener("input", function () {
    if (passwordInput.value.length >= 8) {
        setValid(passwordInput, passwardWarn);
    } else {
        setInvalid(passwordInput, passwardWarn, "Password must be at least 8 characters.");
    }
});

rePasswordInput.addEventListener("input", function () {
    if (rePasswordInput.value === passwordInput.value && rePasswordInput.value !== "") {
        setValid(rePasswordInput, repasswardWarn);
    } else {
        setInvalid(rePasswordInput, repasswardWarn, "Passwords do not match.");
    }
});

});





// ////////////////  SIGN UP  ////////////////

// document.addEventListener("DOMContentLoaded", function () {

//     // ================== Elements ==================
//     let signUpForm = document.getElementById("sign-up-form");

//     let firstNameInput = document.getElementById("firstName");
//     let lastNameInput = document.getElementById("lastName");
//     let emailInput = document.getElementById("emailInput");
//     let passwordInput = document.getElementById("passwordInput");
//     let rePasswordInput = document.getElementById("re-enterPassword");

//     let firstNameWarn = document.getElementById("first-name");
//     let lastNameWarn = document.getElementById("last-name");
//     let emailWarn = document.getElementById("emailWarning");
//     let passwordWarn = document.getElementById("passwordWarning");
//     let rePasswordWarn = document.getElementById("re-enterPasswordWarning");
//     let allRequired = document.getElementById("all-required");


    
//         allRequired.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");
//     firstNameWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    
//     lastNameWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

//     emailWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    
//     passwordWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

    
//     rePasswordWarn.classList.add("text-red-500","text-[10px]","ml-[20px]","w-[100%]", "text-start");

//     // ================== Regex ==================
//     let nameRegex = /^[A-Za-z]{3,}$/;
//     let emailRegex = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;

//     // ================== Helper Functions ==================
//     function setValid(input, messageElement) {
//         input.classList.remove("border-red-500");
//         input.classList.add("border-green-500");
//         messageElement.textContent = "";
//     }

//     function setInvalid(input, messageElement, message) {
//         input.classList.remove("border-green-500");
//         input.classList.add("border-red-500");
//         messageElement.textContent = message;
//     }

//     // ================== Validation Functions ==================
//     function validateFirstName() {
//         if (!nameRegex.test(firstNameInput.value.trim())) {
//             setInvalid(firstNameInput, firstNameWarn, "Write a valid name.");
//             return false;
//         }
//         setValid(firstNameInput, firstNameWarn);
//         return true;
//     }

//     function validateLastName() {
//         if (!nameRegex.test(lastNameInput.value.trim())) {
//             setInvalid(lastNameInput, lastNameWarn, "Write a valid name.");
//             return false;
//         }
//         setValid(lastNameInput, lastNameWarn);
//         return true;
//     }

//     function validateEmail() {
//         if (!emailRegex.test(emailInput.value.trim())) {
//             setInvalid(emailInput, emailWarn, "Write a valid email.");
//             return false;
//         }
//         setValid(emailInput, emailWarn);
//         return true;
//     }

//     function validatePassword() {
//         if (passwordInput.value.length < 8) {
//             setInvalid(passwordInput, passwordWarn, "Password must be at least 8 characters.");
//             return false;
//         }
//         setValid(passwordInput, passwordWarn);
//         return true;
//     }

//     function validateRePassword() {
//         if (rePasswordInput.value !== passwordInput.value || rePasswordInput.value === "") {
//             setInvalid(rePasswordInput, rePasswordWarn, "Passwords do not match.");
//             return false;
//         }
//         setValid(rePasswordInput, rePasswordWarn);
//         return true;
//     }

//     // ================== Live Validation ==================
//     firstNameInput.addEventListener("input", validateFirstName);
//     lastNameInput.addEventListener("input", validateLastName);
//     emailInput.addEventListener("input", validateEmail);
//     passwordInput.addEventListener("input", validatePassword);
//     rePasswordInput.addEventListener("input", validateRePassword);

//     // ================== Submit ==================
//     signUpForm.addEventListener("submit", function (e) {
//         e.preventDefault();

//         allRequired.textContent = "";

//         let isValid =
//             validateFirstName() &&
//             validateLastName() &&
//             validateEmail() &&
//             validatePassword() &&
//             validateRePassword();

//         if (!isValid) {
//             allRequired.textContent = "Please fix errors first.";
//             allRequired.classList.add("text-red-500", "text-sm", "mt-2");
//             return;
//         }

//         // ================== Save User ==================
//         let users = JSON.parse(localStorage.getItem("users")) || [];

//         let emailExists = users.some(user => user.email === emailInput.value.trim());

//         if (emailExists) {
//             setInvalid(emailInput, emailWarn, "Email already exists.");
//             return;
//         }

//         let user = {
//             id: Date.now(),
//             firstName: firstNameInput.value.trim(),
//             lastName: lastNameInput.value.trim(),
//             email: emailInput.value.trim(),
//             password: passwordInput.value,
//             score: null,
//             hasExamined: false,
//             answers: [],
//             shuffledQuestions: []
//         };

//         users.push(user);
//         localStorage.setItem("users", JSON.stringify(users));
//         localStorage.setItem("currentUser", JSON.stringify(user));

//         window.location.replace("quistions.html");
//     });

// });