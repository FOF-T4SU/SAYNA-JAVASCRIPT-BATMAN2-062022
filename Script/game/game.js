$(document).ready(function() {
    $.ajax({
        url: "https://octopus-app-2u6og.ondigitalocean.app/questions/all",
        datatype: "json",
        success: function(questions) {
            console.log(questions);
        },
        error: function() {
            console.log("impossible de se connecter");
        },
    });
});