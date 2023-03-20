function crapGame(){
    let images = new Array("dice/dice_1.gif", "dice/dice_2.gif","dice/dice_3.gif","dice/dice_4.gif","dice/dice_5.gif","dice/dice_6.gif");

    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    var total = dice1 + dice2;

    let result = "<h3 the result is:</h3>"
    result += "<p> DICE 1 ROLL: " + dice1 + "<p><img src=" + images[dice1-1] + "><p>";
    result += "<p> DICE 2 ROLL: " + dice2 + "<p><img src=" + images[dice2-1] + "><p>";
    result += "<p> THE SUM IS " + total + "<p>";


    // comparisons

    if(total == 7 || total == 11){
        result += "YOU WON THE GAME!";
    }
    if(total == 2 || total == 3 || total == 12){
        result += "YOU LOST! BETTER LUCK NEXT TIME.";
    }

    // DOCUMENT 
    let HTMLHEAD =" <!DOCTYPE html><html><head><link rel='stylesheet' href='main.css' type='text/css'></head> <body>";

    // open a new document  
    document.open();
   
    document.write(HTMLHEAD);
   
    // add the title 
    document.title = "Welcome to a Game of Crap!";

    document.write("<link href='../asg3/css/crapGame.css' type='text/css' rel='stylesheet' />")

    document.write("<body><div id='wrap'><header><h1 align='center'> A GAME OF CRAP </h1></header><div class='container'>")
   
    document.write(result);
   
    document.write("<p><button align='center' onclick='crapGame()'> play again!</button>");
   
    document.write("</div><div class='footer'><br><p class='copyright'> © Janet Pan</p></div></div></div></body></html>")
    document.write("<script type='text/javascript' src='crapGame.js'> </script>");
   
}