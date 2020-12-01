$(function() {
    var game = $(".game")
    var numeriCasuali=[];
    var numeriAnswer=[];

    for (var i = 0; i < 5; i++) {
        var randomNumber = Math.floor((Math.random() * 100) + 1);
    numeriCasuali.push(randomNumber);
    }
    console.log(numeriCasuali);
    //Un alert espone 5 numeri casuali diversi.
    document.getElementById("game").innerHTML =  numeriCasuali;
    
    setTimeout(function () {
        game.addClass("remove");//Faccio scomparire i numeri generati dal pc
    }, 4500);

    //Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    setTimeout(function(){
        for (var i = 0; i < 5; i++) {
            var numberQuestion = Number(prompt("Scrivi uno alla volta i numeri che ricordi"));
            numeriAnswer.push(numberQuestion);
        }
        console.log(numeriAnswer);
    },5000);

    //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati. */

});