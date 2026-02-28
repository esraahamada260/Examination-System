let storedUser = localStorage.getItem("currentUser"); 
if (!storedUser) { 
    window.location.replace("login.html"); 
} 
let currentUser = JSON.parse(storedUser); 
if (currentUser.hasExamined) { 
    window.location.replace("results.html"); 
}

var current = 0;
var answers = [];
var res = 0;
var flagged = [];
var minutes = 1;
var seconds = 0;
var timer = document.getElementById("timer");
var timerRemainding = document.getElementById("timerRemainding");
var timeOut = document.getElementById("timeUpModal");
var result = document.getElementById("result");
var questions = [
    {
        quistion: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyperlink and Text Markup Language",
            "Home Tool Markup Language"
        ],
        correct: 0
    },
    {
        quistion: "What is HTML?",
        options: ["Programming language", "Markup language", "Database", "Framework"],
        correct: 1
    },
    {
        quistion: "CSS stands for?",
        options: ["Creative Style Sheet", "Cascading Style Sheets", "Computer Style", "Color Style"],
        correct: 1
    },
    {
        quistion: "JS is used for?",
        options: ["Design", "Structure", "Logic", "Database"],
        correct: 2
    },
    {
        quistion: "Which is NOT frontend?",
        options: ["HTML", "CSS", "JS", "SQL"],
        correct: 3
    },
    {
        quistion: "Tailwind is?",
        options: ["Framework", "Library", "Utility CSS", "Database"],
        correct: 2
    },
    {
        quistion: "Which creates API?",
        options: ["HTML", "ASP.NET", "CSS", "Bootstrap"],
        correct: 1
    },
    {
        quistion: "DOM means?",
        options: ["Document Object Model", "Data Object Map", "Design Object", "None"],
        correct: 0
    },
    {
        quistion: "LocalStorage is?",
        options: ["Backend", "Browser storage", "Server", "Cookie"],
        correct: 1
    },
    {
        quistion: "Which handles routing?",
        options: ["Controller", "View", "CSS", "HTML"],
        correct: 0
    }
];


//عشان الخبط الاسئلة والاجابات
shuffleQuestions();

// عشان اعرض اول سؤال
render();

function shuffleQuestions() {
    for (var i = questions.length - 1; i > 0; i--) {

        for (let x = 3; x > 0; x--) {
            var y = Math.floor(Math.random() * (x + 1));
            if (questions[i].correct === x) {
                questions[i].correct = y
            }
            else if (questions[i].correct === y) {
                questions[i].correct = x
            }
            var tempAn = questions[i].options[x];
            questions[i].options[x] = questions[i].options[y];
            questions[i].options[y] = tempAn;
        }

        var j = Math.floor(Math.random() * (i + 1));
        var temp = questions[i];
        questions[i] = questions[j];
        questions[j] = temp;
    }
}


function render() {
    // عشان اعرض السؤال
    document.querySelector("h3").innerText = questions[current].quistion;
    var container = document.getElementById("answers");
    container.innerHTML = "";

    //اعرض اجابات السؤال
    questions[current].options.forEach((opt, i) => {
        //اشوف اذا كان السؤال متجاوب قبل كدا ولا لا
        var checked = (answers[current]) == i ? "checked" : "";
        container.innerHTML += `<label class="mb-2 flex items-center gap-3 p-4 border rounded-xl cursor-pointer hover:bg-blue-50">
                                <input type="radio" name="exam" ${checked} onchange="save(${i})" class="radio radio-primary"/>
                                <p>${opt}</p></label>`;
    });

    //اعدل العداد
    document.getElementById("questionCounter").innerText = "Question " + (current + 1) + " of " + questions.length;
}

function save(i) {
    answers[current] = i;
}

function next() {
    if (current < questions.length - 1) {
        current++;
        if (current === questions.length - 1) {
            var nextBtn = document.getElementById("nextBtn")
            nextBtn.textContent = "End Exam"
            nextBtn.addEventListener("click", () => {
                var radios = document.querySelectorAll("input[type='radio']");
                radios.forEach((r, i) => {
                    if (r.checked) {
                        save(i);
                    }
                });
                calcRes();
                saveResultForUser();
                window.location.replace("results.html");
            })
        }
        render();
    }
    if (current === questions.length - 1) {
        calcRes()
    }
}




function prev() {
    if (current === questions.length - 1) {
        var nextBtn = document.getElementById("nextBtn")
        nextBtn.onclick(next())
        nextBtn.textContent = "Next"
    }
    if (current > 0) {
        current--;
        render();
    }
}

function calcRes() {
    res = 0;
    questions.forEach(
        function (quistion, i) {
            if (quistion.correct === answers[i]) {
                res++
            }
            if (answers[i] === undefined) {
            answers[i] = -1;
           }
        }
    )
    console.log(res)
}

function goToFlagQues(ques) {
    current = ques
    render()
}

function flagQuestion() {
    if (flagged.includes(current)) return;
    flagged.push(current);

    var ques = current;
    var div = `<div class="bg-[#fecf02] text-white rounded-xl p-3 shadow text-sm mb-2 transition transform hover:scale-105 hover:cursor-pointer" onclick="goToFlagQues(${ques})">
                Question ${current + 1}
               </div>`;

    document.getElementById("flaggedContainer").innerHTML += div;
}

function unflagQuestion() {
    var question = "Question " + (current + 1);
    var container = document.getElementById("flaggedContainer");
    var items = container.children;
    for (var i = 0; i < items.length; i++) {
        if (items[i].innerText === question) {
            items[i].remove();
            flagged.splice(i, 1);
            break;
        }
    }
}
var totalTime = minutes * 60 + seconds;
var timerDown = setInterval(function () {
    var remainingTime = minutes * 60 + seconds;
    var percentage = (remainingTime / totalTime) * 100;
    timer.value = percentage;
    if (seconds === 0) {
        if (minutes === 0) {
            // alert("Time Over!!!");
            timeOut.classList.remove("hidden")
            clearInterval(timerDown);
            calcRes();
            saveResultForUser();
            setTimeout(() => {
                window.location.replace("results.html")
            }, 5000);
        } else {
            minutes--;
            seconds = 59;
        }
    } else {
        seconds--;
    }

    if (seconds <= 30) {
    timer.classList.remove("progress-info");
    timer.classList.add("progress-error");
    }

    timerRemainding.innerText = "Time Remaining " + minutes + ":" + seconds;
}, 1000);


result.addEventListener("click", () => {
    window.location.replace("results.html");
})

function saveResultForUser() {
    if (!currentUser) return;
    currentUser.score = res;
    currentUser.answers = answers;
    currentUser.shuffledQuestions = questions;
    currentUser.hasExamined = true;
    localStorage.setItem("currentUser", JSON.stringify(currentUser));
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let index = users.findIndex(u => u.email === currentUser.email);

    if (index !== -1) {
        users[index] = currentUser;
        localStorage.setItem("users", JSON.stringify(users));
    }
}
