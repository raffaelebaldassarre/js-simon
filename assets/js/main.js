$(function() {


    //Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
    //Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.


    //Un alert espone 5 numeri casuali diversi.
    var numeriCasuali=[];

    for (var i = 0; i < 5; i++) {
        var randomNumber = Math.floor((Math.random() * 100) + 1);
        numeriCasuali.push(randomNumber);
    }
    alert("Hai 30 secondi per memorizzare questa sequenza di  numeri \n\n" + numeriCasuali);



});