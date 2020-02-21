let bruv = "off";
let theWrongNumber = document.getElementById("isItwrong");
let count=0;


let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice, wrongChoice1, wrongChoice2, wrongChoice3){

    choice1 = document.getElementById("btn0");
    choice2 = document.getElementById("btn1");
    choice3 = document.getElementById("btn2");
    choice4 = document.getElementById("btn3");


  questionText = document.getElementById("question");

    let correctClick = function(){
        correctChoice.onclick = count++;
    };

    let badClick1 = function(){
        wrongChoice1.onclick = theWrongNumber.innerText = "That is wrong!";
    };

    let badClick2 = function(){
        wrongChoice2.onclick = theWrongNumber.innerText = "That is wrong!";
    };

    let badClick3 = function(){
        wrongChoice3.onclick = theWrongNumber.innerText = "That is wrong!";
    };

    if(count === 0){

        questionText.innerText = "What is the square root of 4?";
        choice1.innerText = "Wrong";
        choice2.innerText = "Right";
        choice3.innerText = "Wrong";
        choice4.innerText = "Wrong";

        choice2 = correctChoice;
        choice1 = wrongChoice1;
        choice3 = wrongChoice2;
        choice4 = wrongChoice3;



    }



};

let inButton = function(){

  createQuestion();

  theFirstquestion();


};

let theFirstquestion = function(){



    if(choice2.onclick){
        theSecondquestion();
    }else if(choice1.onclick){
        theWrongNumber.innerText = "That is wrong!";
    }else if(choice3.onclick){
        theWrongNumber.innerText = "That is wrong!";
    }else if(choice4.innerText){
        theWrongNumber.innerText = "That is wrong!";
    }

};

let theSecondquestion = function(){

    theWrongNumber.innerText = " ";

    questionText.innerText = "Reddit";

    choice1.innerText = "Br";
    choice2.innerText = "uh";
    choice3.innerText = "Mo";
    choice4.innerText = "ment";

};