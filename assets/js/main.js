$(function() {
    var game = $(".game")
    var numeriCasuali=[];
    var numeriAnswer=[];
    var numeriRicordati=[];
    var numeriNonRicordati=[];

    while (numeriCasuali.length < 5) {
        var randomNumber = Math.floor((Math.random() * 100) + 1);
        if(!(numeriCasuali.includes(randomNumber))){
           numeriCasuali.push(randomNumber);
        }
    }
    //console.log(numeriCasuali);
    //Un alert espone 5 numeri casuali diversi.
    document.getElementById("game").innerHTML =  numeriCasuali;

    var seconds = 30;
    var interval = setInterval(function(){

        document.getElementById("secondi").innerHTML = seconds;
        if( seconds === 0){
            clearInterval(interval);
        }else{
            seconds--;
        }
        if (seconds < 10){
            $("h3").css("color","red");
        }
    },1000);
    
    setTimeout(function () {
        game.addClass("remove");//Faccio scomparire i numeri generati dal pc
    }, 31000);

    //Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    setTimeout(function(){

        while (numeriAnswer.length < 5) {
            var numberUser = Number(prompt("Scrivi uno alla volta i numeri che ricordi"));
            while (isNaN(numberUser)){
                alert("Attenzione, questo non è un numero");
                numberUser = Number(prompt("Dai che lo ricordi.. è il numero.."));
            }
            if(!(numeriAnswer.includes(numberUser)) && numberUser <= 100 && numberUser > 0){
                numeriAnswer.push(numberUser);
            }else {
                alert("Hey ricorda, hai già inserito questo numero oppure non è compreso tra 1 e 100, prova con un altro numero");
            }
        }
        //console.log(numeriAnswer);
        // //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */
        for (var j = 0; j < numeriAnswer.length; j++) {
            if(numeriCasuali.includes(numeriAnswer[j])){
                numeriRicordati.push(numeriAnswer[j]);
            }else{
                numeriNonRicordati.push(numeriCasuali[j]);
            }
        }
        //console.log(numeriRicordati);
        //console.log(numeriNonRicordati);

        if(numeriRicordati.length==0){
            alert("Non hai ricordato nessun numero, dai non disperare fra poco avrai dimenticato tutto");
        }else if (numeriNonRicordati.length==0){
            alert("Bravissimo hai ricordato tutti i numeri");
        }else /* if(numeriCasuali != numeriRicordati[j]) */{
            alert("Hai ricordato " + numeriRicordati.length + " numeri " + numeriRicordati);
            alert("Però non hai ricordato " + numeriNonRicordati.length + " numeri " + numeriNonRicordati);
        }
    },31500);
});