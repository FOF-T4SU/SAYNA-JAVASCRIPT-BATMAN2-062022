let suivant = document.getElementById("valid");
let quiz = document.getElementById("quizz");
let begin = document.getElementById("begin");
let numquiz = document.getElementById("numquest");

suivant.addEventListener("click", () => {
    if (suivant.value == "Demarrer le quiz") {
        begin.style.visibility = "hidden";
        quiz.style.visibility = "visible";
        suivant.value = "Question suivante";
        let i = 1;
        while (i < 11) {
            suivant.value = "Question suivante";
            numquiz.innerHTML = i;
            i++;
        }
    } else {
        suivant.value = "Voir mon resultat";
    }
});