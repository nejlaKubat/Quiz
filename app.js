(function main () {
    const statement = document.getElementById("statement");
    const optionButtons = document.querySelector("#options").children;
    const explanation = document.getElementById("explanation");

    const fact = {
        statement: "Guess if this is true",
        answer: true,
        explanation: "Explanation"
    }

    statement.textContent = fact.statement;

    function disable(button) {
        button.setAttribute("disabled", "")
    }

    function isCorrect(guessString) {
        return guessString === fact.answer.toString();
    }

    function f(e) {
        const button = e.target;
        console.log("clicked");
        explanation.textContent = fact.explanation;
        disable(button);
        if(isCorrect(button.textContent)) { 
            button.style.color = "green";
        }
        else button.style.background = "hsla(9, 100%, 64%, 0.8)";
    }

    for(let button of optionButtons) {
        button.addEventListener("click", (e) => {
            console.log("clicked");
            explanation.textContent = fact.explanation;
            for(let button of optionButtons) {
                disable(button);
            }
            //const button = e.target;
            isCorrect(button.textContent) ? button.classList.add("correct") : button.classList.add("incorrect");
        })
    };
    
})();
