//set intervalID variable
var intervalID;
//set boolean
var hidden = false;
//define function
function setID(){
    intervalID = setInterval(toggleimg, 500);
}
function toggleimg(){
    if(hidden === true){
        $("#gallery li:nth-child(2)").hide();
        hidden = false
    }
    else{
        $("#gallery li:nth-child(2)").show();
        hidden = true
    }
}
//call function on the second child of the gallery id
$("#gallery li:nth-child(2)").on("click",setID());

