document.getElementById("run").addEventListener("click", () => {
    var total = parseInt(document.getElementById('total').value, 10);
    var answered = parseInt(document.getElementById('answered').value, 10);
    var correctPoints = parseInt(document.getElementById('correct').value, 10);
    var wrongPoints = parseInt(document.getElementById('wrong').value, 10);
    var passPoints = parseInt(document.getElementById('pass').value, 10);

    var required = total / 2;
    var unanswered = total - answered;
    var maximum = answered * correctPoints + unanswered * passPoints;
    var minimum = answered * wrongPoints + unanswered * passPoints;

    for (i = 1; result < required; i++) {


        var result = (answered - i) * wrongPoints + i * correctPoints + unanswered * passPoints;






    }


    console.log("min. requis", required, "/", total);
    console.log("non répondues", unanswered);
    console.log("maximum", maximum);
    console.log("minimum", minimum);
    console.log("resultat", result);
    console.log((answered - i) * wrongPoints + i * correctPoints + unanswered * passPoints)




})
