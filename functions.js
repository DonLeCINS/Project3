var choice;
var compchoice = ["Rock", "Paper", "Scissors"];
var youWin;
var current;
var numtimes;

function checkAnswer()
{
var answerEntered = document.getElementById("theirAnswer").value;
if(answerEntered == "rock" || answerEntered =="Rock")
{
  document.getElementById("compareChoice").disabled = false;
  document.getElementById("choice").innerHTML="You chose rock";
  document.getElementById("choice").classList.remove("hidden-message");
  document.getElementById("choice").classList.add("shown-message");
  choice = 1;
  document.getElementById("picture").src="https://outdoordesignbylucas.files.wordpress.com/2011/01/1-10-11-charcter-rocks.jpg";
}
else if(answerEntered == "paper" || answerEntered =="Paper")
{
  document.getElementById("compareChoice").disabled = false;
  document.getElementById("choice").innerHTML="You chose paper";
  document.getElementById("choice").classList.remove("hidden-message");
  document.getElementById("choice").classList.add("shown-message");
  choice = 2;
  document.getElementById("picture").src="http://www.avebe.com/friksbeheer/wp-content/uploads/2015/05/paper-01.jpg";
//courtesy of google images
}
else if(answerEntered == "scissors" || answerEntered == "Scissors")
{
  document.getElementById("compareChoice").disabled = false;
  document.getElementById("choice").innerHTML="You chose scissors";
  document.getElementById("choice").classList.remove("hidden-message");
  document.getElementById("choice").classList.add("shown-message");
  choice = 3;
  document.getElementById("picture").src="https://usercontent2.hubstatic.com/4493816_f520.jpg";
  //courtesy of google images
}
else {
  document.getElementById("compareChoice").disabled = true;
}
}
var currentChoice;
function generateRandom(){
var random;
do{
random = Math.floor(Math.random() * compchoice.length);
} while(compchoice[random] == currentChoice);
currentChoice = compchoice[random];
numtimes=Number(getCookie("gamesPlayed"));
numtimes++;
setCookie("gamesPlayed", numtimes, 30);
if(choice == 1 && random == 0 || choice == 2 && random == 1 || choice == 3 && random == 2)
{
  document.getElementById("compareChoice").innerHTML="It is a tie";
}
else if(choice == 1 && random == 1)
{
  document.getElementById("compareChoice").innerHTML="You lose";
}
else if(choice == 1 && random == 2)
{
 document.getElementById("compareChoice").innerHTML="Congratulations you win!";
 current=Number(getCookie("points"));
 current++;
 setCookie("points", current , 30);

}
else if(choice == 2 && random == 0)
{
  document.getElementById("compareChoice").innerHTML="Congratulations you win!";
  current=Number(getCookie("points"));
  current++;
  setCookie("points", current , 30);
}
else if(choice == 3 && random == 0)
{
document.getElementById("compareChoice").innerHTML="You lose";
}
else if(choice == 2 && random == 2)
{
  document.getElementById("compareChoice").innerHTML="You lose";
}
else if(choice == 3 && random == 1)
{
document.getElementById("compareChoice").innerHTML="Congratulations you win!";
current=Number(getCookie("points"));
current++;
setCookie("points", current , 30);
}
else
{
document.getElementById("compareChoice").innerHTML="Invalid choice, please enter in rock, paper or scissors";
}
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
//courtesy of w3schools, from: http://www.w3schools.com/js/js_cookies.asp
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
      }
}
function initializeCorrect()
{
  current = 0;
  numtimes = 0;
  setCookie("gamesPlayed" , 0 , 30);
  setCookie("points", 0 , 30);
}

function yourScore()
{
  var games= Number(getCookie("gamesPlayed"));
  var score = Number(getCookie("points"));
  var lastScore = Number(score/games);
  var endScore = lastScore * 100;
  document.getElementById("tot").innerHTML = (endScore) + "%";
}
