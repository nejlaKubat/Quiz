(function main () {
    const statement = document.getElementById("statement");
    const optionButtons = document.querySelector("#options").children;
    const nextButton = document.getElementById("next");
    const explanation = document.getElementById("explanation");
    const scoreParagraph = document.getElementById("score");

    let currentQuestion = 0;
    let score = 0;

    const facts = [
        {
            statement: "What is Ricks most famous alter ego?",
            answer: "Pickle Rick",
            options: ["Tiny Rick", "Pickle Rick", "Wasp Rick"],
            explanation: "It's been over six years since Pickle Rick premiered on Adult Swim, and he's still talked about, referenced, and seen on t-shirts everywhere."
        },
        {
            statement: "Who was not at any point Morty's girlfriend?",
            answer: "Arthricia",
            options: ["Arthricia", "Annie", "Planetina"],
            explanation: "Arthricia appeared in only one episode and had a boyfriend at a time."
        },
        {
            statement: "What dimension do Rick and Morty primarily reside in?",
            answer: "C-137",
            options: ["Prime Dimension", "C-131", "C-137"],
            explanation: "Prime Dimension gets taken over by Cronenbergs, so Rick and Morty went to Dimension C-131 where everyone turned into Cronenbergs."
        },
        {
            statement: "What alcoholic beverage is Rick often seen drinking?",
            answer: "Flask of Vodka",
            options: ["Flask of Whiskey", "Flask of Vodka", "Alien Urine"],
            explanation: "Rick is depressed and drinks solely for the effect of the booze and doesn't mind the flavourless."
        },
        {
            statement: "What is the full name of the character Mr. PB?",
            answer: "Mr. Poopybutthole",
            options: ["Mr. Poopybut", "Mr. Peanutbutter", "Mr. Poopybutthole"],
            explanation: "Mr. Peanutbutter is BoJack Horseman's friend."
        },
        {
            statement: "What alien race is Phoenixperson from?",
            answer: "Birdpeople",
            options: ["Birdpeople", "Gromflomites", "Bulbhead"],
            explanation: "Birdperson, briefly known as Phoenixperson, is of Birdpeople species."
        },
        {
            statement: "What’s the name of the universe created by Rick to power his car battery?",
            answer: "Microverse",
            options: ["Teenyverse", "Miniverse", "Microverse"],
            explanation: "Rick made Microverse extracting energy via goobleboxe."
        }
    ]
    function setPage() {
        statement.textContent = facts[currentQuestion].statement;
        for(let i=0; i<3; i++) {
            optionButtons[i].textContent=facts[currentQuestion].options[i];
        }
        explanation.textContent="";
        scoreParagraph.textContent=`Score: ${score}/${facts.length*2}`;
    }

    setPage();

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
            if(isCorrect(button.textContent)) {
                button.classList.add("correct");
                score+=2;
            }  
            else {
                button.classList.add("incorrect");
                score-=1;
            }
            scoreParagraph.textContent=`Score: ${score}/${facts.length*2}`;
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
            setPage();
        }
        else {
            disable(nextButton);
            explanation.textContent="No more questions!";
            if(score>=facts.length*2-1) {
                console.log("Amazing! You are a true fan!");
            }
            else if(score>facts.length) {
                console.log("Go and rewatch the show you disgust me!");
            }
            else {
                console.log("WTF have you even watched one episode? Where do you live??");
            }
        }
        
    })

    
})();
