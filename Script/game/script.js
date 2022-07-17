// console.log((document.getElementById("choix1").innerHTML = "Joker"));
// console.log(document.getElementById("valider").setAttribute("value", "question suivante"));
// console.log((document.getElementById("Q1").style.visibility = "visible"));
// document.getElementById("quizz").style.visibility = "visible";

let suivant = document.getElementById("valider");
let quiz = document.getElementById("quizz");
let begin = document.getElementById("begin");
let Q1 = document.getElementById("q1i1");
let Q2 = document.getElementById("q2i1");
let Q3 = document.getElementById("q3i1");
let Q4 = document.getElementById("q4i1");
let Q5 = document.getElementById("q5i1");
let Q6 = document.getElementById("q6i1");
let Q6_2 = document.getElementById("q6i2");
let Q6_3 = document.getElementById("q6i3");
let Q7 = document.getElementById("q7i1");
let Q8 = document.getElementById("q8i1");
let Q9 = document.getElementById("q9i1");
let Q9_2 = document.getElementById("q9i2");
let Q9_3 = document.getElementById("q9i3");
let Q10 = document.getElementById("q10i1");
let Q10_2 = document.getElementById("q10i2");
let Q10_3 = document.getElementById("q10i3");
let Q11 = document.getElementById("q11i1");
let Q12 = document.getElementById("q12i1");
let Q13 = document.getElementById("q13i1");
let Q14 = document.getElementById("q14i1");
let Q15 = document.getElementById("q15i1");

let change = function() {
    if (suivant.value == "Demarrer le quiz") {
        begin.style.visibility = "hidden";
        quiz.style.visibility = "visible";
        Q2.style.visibility = "visible";
        // Q10.style.visibility = "visible";
        // Q10_2.style.visibility = "visible";
        // Q10_3.style.visibility = "visible";
        suivant.value = "Question suivante";
    } else {
        suivant.value = "Voir mon resultat";
    }
};