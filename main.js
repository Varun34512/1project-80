function getParagraph1(){
    var inputs2 = [];
    for(var j = 1; j <=6 ; j++)
    {
        inputs2.push(document.getElementById("paral_input_box" + j).value);
        console.log (inputs2)
    }
    document.getElementById("showParagraph1").innerHTML = inputs2.join(". ");
}
function getParagraph2(){
    var inputs2 = [];
    for(var j = 1; j <=6 ; j++)
    {
        inputs2.push(document.getElementById("para2_input_box" + j).value);
        console.log (inputs2)
    }
    document.getElementById("showParagraph2").innerHTML = inputs2.join(". ");
}