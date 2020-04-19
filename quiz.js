function check(){
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct=0;

    if(question1=="kamalesh"||question1=="kamlesh"){
        correct++;
    }
    if(question2=="India Pakistan Match"){
        correct++;
    }
    if(question3=="Babu Bhaiya" || question3=="babu bhaiya"){
        correct++;
    }
    if(question4=="Khudai" || question4=="khudai"){
        correct++;
    }
    if(question5=="bewafa" || question5=="Bewafa" || question5=="Bevafa" || question5=="bevafa"){
        correct++;
    }

    var messages=["Go get a life, dude!!", "That was ok!", "You're DOPE!"];
    var pictures=["https://i.imgflip.com/tvfvk.jpg","https://catplanet.org/wp-content/uploads/2014/07/meh.jpg","https://www.memecreator.org/static/images/memes/4090350.jpg",];

    var range;
    if(correct==0){
        range=0;
    }
    else if(correct>0 && correct<4){
        range=1;
    }
    else{
        range=2;
    }

    document.getElementById("after_submit").style.visibility="visible";
    document.getElementById("messages").innerHTML = messages[range];
    document.getElementById("number_correct").innerHTML = "You got " + correct + " correct!!";
    document.getElementById("image").src = pictures[range];
}
