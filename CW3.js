//button
$("button").on("click", background);
//function
function background() {
    $("tr:even").addClass("grayback");
}