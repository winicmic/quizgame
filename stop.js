let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;


btn1 = document.getElementById("btn0");
btn2 = document.getElementById("btn1");
btn3 = document.getElementById("btn2");
btn4 = document.getElementById("btn3");


let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice){

  questionText = document.getElementById("question");

    choice1 = document.getElementById("choice0");
    choice2 = document.getElementById("choice1");
    choice3 = document.getElementById("choice2");
    choice4 = document.getElementById("choice3");


    correctOne = correctChoice.innerText;


};


let Begin = function(){

    btn1.onclick = function(){correctClick(this)};
    btn2.onclick = function(){correctClick(this)};
    btn3.onclick = function(){correctClick(this)};
    btn4.onclick = function(){correctClick(this)};

  if(count === 0){
      createQuestion("What is the square root of 4?", "Wrong", "Right", "Wrong", "Wrong", "Right");
  }else if(count === 1){
      createQuestion("What is 2-2?", "34", "4", "2", "0", "0");
  }


};

correctClick = function(button){
    if(button === correctOne){
       numRight++;
    }
   count++;
    Begin();
};