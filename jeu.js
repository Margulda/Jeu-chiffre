var nbrD = document.getElementById('propInp') //User input number
nbrD.readOnly = true; //input field, Default: readOnly



// Function for new game
function newJeu (){

    alert('Choisissez un chiffre entre 0 et 100 et rentrez le dans "Proposition", vous avez 30 secondes seulement !') //New game alert


    nbrX = Math.floor(Math.random() * 100); // Random number generation
    var indiceInp = document.querySelector("#indInp"); // Input for clues
    var repInp = document.querySelector("#repInp"); // Input for already typed answers
    var tryInp = document.querySelector("#tryInp"); // Input for number of tries
    var chances = 2; //Var for chances
    var propo = document.querySelector('#propBtn'); // Proposition Button
    var soluce = document.querySelector('#solBtn'); // Solution Button
    var t = 0; //Visible timer
    var c = 0;
    var t2 = 0; // Hidden timer
    
    //Clear all input and disable readOnly
    indiceInp.value=""; 
    repInp.value="";
    tryInp.value="";
    nbrD.readOnly = false;
    clearTimeout(t); //reset timer for game ending
    clearTimeout(t2);
    
    // Disable / enable buttons 
    document.querySelector('#solBtn').disabled = false;
    document.querySelector('#propBtn').disabled = false;
    document.querySelector('#newBtn').disabled = true;


    //Function for game ending
    function finDuGame() {
        
        // Clear and reset all
        indiceInp.value="";
        repInp.value="";
        tryInp.value="";
        chances=2;
        nbrD.value = '';
        document.querySelector('#solBtn').disabled = true;
        document.querySelector('#propBtn').disabled = true;
        document.querySelector('#newBtn').disabled = false;
        nbrD.readOnly = true;
        clearTimeout(t); //reset timer for game ending
        clearTimeout(t2); // reset visible timer
    
    }





    // Function for Visible timer
    function timedCount() {
        document.getElementById("timer").innerHTML = c;
        c = c + 1;
        t = setTimeout(timedCount, 1000);
    }

    //Function for ending
    function stopCount() {
       
        alert("Temps écoulé, le nombre mystère était " + nbrX);
        finDuGame();
    }

    //Function for hidden timer
    timedCount();
    t2 = setTimeout(stopCount, 30000);


 
    // Function for 1 try
    function proposition(){


        nbrD = document.getElementById('propInp');

        //if number between 0 and 100
        if ((parseInt(nbrD.value) > 0) && (parseInt(nbrD.value) < 100)) {

            
            // If win
            if ((parseInt(nbrD.value) == nbrX)) {

            finDuGame();
            clearTimeout(t);
            clearTimeout(t2);
            alert("C'est gagné !");
            

            }
            //if lose
            if (chances > 7 ) { 

                finDuGame();
                clearTimeout(t);
                clearTimeout(t2);
                alert('perdu, le nombre mystère était : ' + nbrX)
                
            }
            //If too high
            else if ((parseInt(nbrD.value) > nbrX)) {

            indiceInp.value = "Trop grand, c'est moins !";
            repInp.value += nbrD.value + " , ";
            tryInp.value = chances;
            nbrD.value = '';
            chances++;

            }
            //if too low
            else if ((parseInt(nbrD.value) < nbrX)) {

            indiceInp.value = "Trop petit, c'est plus !";
            repInp.value += nbrD.value + " , ";
            tryInp.value = chances;
            nbrD.value = '';
            chances++;
            }

        
        

        }
        //If number NOt between 0 and 100
        else if ((parseInt(nbrD.value) < 0) || (parseInt(nbrD.value) >= 101)) {

            alert("Entre 0 et 100 on a dit");
            tryInp.value = chances;
            nbrD.value = '';
            chances++;
        } 
        
        

    }

    

    //Function for clicking solution
    function solution(){
        alert('Le chiffre mystère était ' + nbrX);
        finDuGame();
    }
    
    
    var soluce = document.querySelector('#solBtn'); // Solution Button
    soluce.addEventListener("click", solution); // Clicking solution
    soluce.addEventListener("click", finDuGame); // Clicking solution
    propo.addEventListener("click", proposition); // Clicking Proposition


 
}


document.querySelector('#solBtn').disabled = true;  //Disable solution button out of a game
document.querySelector('#propBtn').disabled = true; //Disable proposition button out of a game


var newBtn = document.querySelector('#newBtn'); // Button for New game
newBtn.addEventListener("click", newJeu); // Clicking for a New Game
