//j query for each class/id
$(".red").addClass("red1");

$("#myElement").addClass("blue1")
    .click(function () {
        alert("myElement was Clicked")
    });
//children of parent div
$("#myElement div:nth-child(1)").addClass("green1");
$("#myElement div:nth-child(2)").addClass("orange1");

