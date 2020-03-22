let count = 0;
let numRight = 0;
let correctOne;
let numQuestions = 4;


btn1 = document.getElementById("btn0");
btn2 = document.getElementById("btn1");
btn3 = document.getElementById("btn2");
btn4 = document.getElementById("btn3");


let createQuestion = function(questionText, choice1, choice2, choice3, choice4, correctChoice){

  let Thequestion = document.getElementById("question");
  Thequestion.innerText = questionText;

    let answer1 = document.getElementById("choice0");
    answer1.innerText = choice1;
    let answer2 = document.getElementById("choice1");
    answer2.innerText = choice2;
    let answer3 = document.getElementById("choice2");
    answer3.innerText = choice3;
    let answer4 = document.getElementById("choice3");
    answer4.innerText = choice4;


    correctOne = correctChoice;


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
  }else if(count === 2){
    createQuestion("What letter in the alphabet comes after 'H'?", "I", "Q", "A", "D", "I");
  }else if(count === 3){
    createQuestion("What is the best game?", "Red Dead Redemtion 2", "Super Mario Galaxy 2", "Lego Star Wars: The Complete Saga", "Dragon Ball Z: Kakarot", "Lego Star Wars: The Complete Saga");
  }else{
    let question = document.getElementById("question");
    question.innerText = "You got " + numRight + " correct out of " + numQuestions;
    document.getElementById("btn0").innerHTML = " ";
    document.getElementById("btn1").innerHTML = " ";
    document.getElementById("btn2").innerHTML = " ";
    document.getElementById("btn3").innerHTML = " ";
    document.getElementById("progress").innerHTML = " ";
  }

document.getElementById("progress").innerText = "Question " + (count + 1) + "  of  " + numQuestions;

};

correctClick = function(button){
    if(button.innerText === correctOne){
       numRight++;
    }
   count++;
    Begin();
};
