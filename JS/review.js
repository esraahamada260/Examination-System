const storedUser = localStorage.getItem("currentUser");
if (!storedUser) {
    window.location.replace("firstPage.html");
}

const currentUser = JSON.parse(storedUser);
const questions = currentUser.shuffledQuestions;
const userAnswers = currentUser.answers;
const container = document.getElementById("reviewContainer");

const backBtn = document.getElementById("backBtn");
backBtn.addEventListener("click", () => {
    window.location.replace("results.html");
});

const logOutBtn = document.getElementById("logOutBtn");
logOutBtn.addEventListener("click", () => {
    localStorage.removeItem("currentUser"); 
    window.location.replace("firstPage.html");
});

questions.forEach((q, index) => {
    let userAnswerIndex = userAnswers[index];
    let correctIndex = q.correct;
    let blockContent = '';
    let questionState;
    
    q.options.forEach((opt, i) => {
        let style = "p-3 rounded-lg mb-2 border";

        if (i === correctIndex && userAnswerIndex !== -1) {
            style += " bg-green-100 border-green-500";
            questionState = "<p class=text-green-500>Correct Answer✔️</p>"
        }
        else if (i === correctIndex && userAnswerIndex === -1) { 
            style += " bg-yellow-100 border-yellow-500"; 
            questionState = "<p class=text-yellow-500>Not Answered⁉️</p>" 
        }
        if (i === userAnswerIndex && i !== correctIndex) { 
            style += " bg-red-100 border-red-500"; 
            questionState = "<p class=text-red-500>Wrong Answer✖️</p>" 
        }
        blockContent += `<div class="${style}">${opt}</div>`;
    }); 

    let block = `<div class="mb-6 p-6 border rounded-xl"> 
                    <h3 class="mb-4"> Question ${index + 1}: ${q.quistion} </h3> 
                    `; 
    block+=blockContent; 
    block +=`<p>${questionState}</p></div>`; 
    container.innerHTML += block;
});