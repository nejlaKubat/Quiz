(function main () {
    const statement = document.getElementById("statement");
    const optionButtons = document.querySelector("#options").children;
    const nextButton = document.getElementById("next");
    const explanation = document.getElementById("explanation");

    let currentQuestion = 0;

    const facts = [
        {
            statement: "Question 1",
            answer: true,
            explanation: "Explanation"
        },
        {
            statement: "Question 2",
            answer: false,
            explanation: "Explanation"
        },
        {
            statement: "Question 3",
            answer: false,
            explanation: "Explanation"
        },
        {
            statement: "Question 4",
            answer: true,
            explanation: "Explanation"
        },
        {
            statement: "Question 5",
            answer: false,
            explanation: "Explanation"
        }
    ]

    statement.textContent = facts[currentQuestion].statement;

    function disable(button) {
        button.setAttribute("disabled", "")
    }

    function enable(button) {
        button.removeAttribute("disabled")
    }

    function isCorrect(guessString) {
        return guessString === facts[currentQuestion].answer.toString();
    }

    function f(e) {
        const button = e.target;
        console.log("clicked");
        explanation.textContent = facts[currentQuestion].explanation;
        disable(button);
        if(isCorrect(button.textContent)) { 
            button.style.color = "green";
        }
        else button.style.background = "hsla(9, 100%, 64%, 0.8)";
    }

    for(let button of optionButtons) {
        button.addEventListener("click", (e) => {
            console.log("clicked");
            explanation.textContent = facts[currentQuestion].explanation;
            for(let button of optionButtons) {
                disable(button);
            }
            //const button = e.target;
            isCorrect(button.textContent) ? button.classList.add("correct") : button.classList.add("incorrect");
        })
    };

    nextButton.addEventListener("click", (e) => {
        console.log("next clicked");
        if(currentQuestion<facts.length-1) {
            currentQuestion++;
            for(let button of optionButtons) {
                enable(button);
                button.classList.remove("correct");
                button.classList.remove("incorrect");
            }
            statement.textContent = facts[currentQuestion].statement;
            explanation.textContent="";
        }
        else {
            disable(nextButton);
            explanation.textContent="No more questions!";
        }
        
    })
    
})();
