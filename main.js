var inputs= [];

function getParagraph1(){
for(var i=1; i <=6; i++){
    inputs.push(document.getElementById("para1_input_box_"+i).value);
}
document.getElementById("showParagraph1").innerHTML=inputs.join(". ");
}

function getParagraph2(){
    for(var j=1; j<=6; j++){
    inputs.push(document.getElementById("para2_input_box_"+j).value);
    }
    document.getElementById("showParagraph2").innerHTML=inputs.join(". ");
    }