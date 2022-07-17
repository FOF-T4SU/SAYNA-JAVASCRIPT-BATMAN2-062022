// $(document).ready(function() {
//     $.ajax({
//         url: "https://octopus-app-2u6og.ondigitalocean.app/questions/all",
//         dataType: "json",
//         succes: function(questions) {
//             console.log(questions);
//         },
//         error: function() {
//             console.log("impossible de se connecter");
//         },
//     });
//     // console.log("good");
// });

// const xhttp = new XMLHttpRequest();
// xhttp.onload = function(question) {
//     console.log(question.currentTarget.response);
// };

// xhttp.open(
//     "GET",
//     "https://octopus-app-2u6og.ondigitalocean.app/questions/all",
//     true
// );
// xhttp.send();

fetch("https://octopus-app-2u6og.ondigitalocean.app/questions/all")
    .then(function(question) {
        console.log(question.json(Promise));
    })
    .then(function(result) {
        console.log(result);
    });