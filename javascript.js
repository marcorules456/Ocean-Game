var score=0;
var counter=1;
var nextCounter=0;
var s= $(".gify");
var questionCounter=0;
	s.attr("margin-top",200);
var number=0;

var buttonCounter=0;

var gifCounter=0;

$(".gify").hide(100);
var ocean = ["ocean1.jpg","ocean2.jpg","ocean3.jpg","ocean4.jpg","ocean5.jpg","ocean6.jpg","ocean7.jpg","ocean8.jpg","ocean9.jpg","ocean10.jpg"];
var oceangif = ["ocean1.gif","ocean2.gif","ocean3.gif","ocean4.gif","ocean5.gif","ocean6.gif","ocean7.gif","ocean8.gif","ocean9.gif","ocean10.gif"];
var oceanCounter=0;

var animate= ["fro.jpg","fro.jpg","fro.jpg","fro.jpg","fro.jpg","fro.jpg","fro.jpg","fro.jpg","fro.jpg","fro.jpg",];

var box1=$("<button>");

var box2=$("<button>");

var box4=$("<button>");

var box3=$("<button>");

var box4=$("<button>");

var questions= [{
	question: "What country is home to the Great Barrier Reef?",
	answer1: "Australia",
	answer2: "South Africa",
	answer3: "Thailand",
	answer4:"U.S",
	right: "Australia"
	
},
{
	question: "What animal is not found at reefs",
	answer1: "Sharks",
	answer2:"Whales",
	answer3:"Salmon",
	answer4:"Stingrays",

	right: "Salmon"
},

{
	question: "What  does coral produce out of the following?",
	answer1: "Sunscreen",
	answer2:"energy from sunlight",
	answer3:"Healthy sea bacteria",
	answer4:"Oxygen",

	right: "Sunscreen"
},
{
	question: "Which of the following is true about the seas and ocean",
	answer1: "25% has been explored by man",
	answer2: "30% of the fish are sharks",
	answer3:"Some parts glow at night",
	answer4: "Mankind knows more about space than the oceans",

	right: "Some parts glow at night"
},
{
	question: "What percent of the ocean's pollution is caused by man",
	answer1:"20%",
	answer2:"60%",
	answer3:"40%",
	answer4:"80%",
	
	right:"80%"
},{
	question:"What is the deepest part of the Ocean",
	answer1:"Mariana Trench",
	answer2:"Gulf of Mexico",
	answer3:"Indian Sea",
	answer4:"San Diego",
	wrong: "wrong",
	right: "Mariana Trench"
},
{
	question: "What is false about the Deep Sea",
	answer1:"There is thousands of tons of medical waste dumped into the trenches",
	answer2:"It is 98% dark",
	answer3:"There is no life",
	answer4:"Only 4 people have gone into the deep sea",
	wrong: "wrong",
	right: "There is no life"
},

{
	question: "What animal is found in the Deep Sea",
	answer1:"Angular Fish",
	answer2:"Electric Stingrays",
	answer3:"Bioluminecent Sharks",
	answer4:"Giant Worms",
	
	right: "Angular Fish"
},
{
	question:"How many fish are killed by man every year",
	answer1:"20 million",
	answer2:"3 billion",
	answer3:"240 billion",
	answer4:"a trillion",

	right: "240 billion"
},
{
	question: "How many sea mammals ie.whales,seals are killed by pollution",
	answer1: "300 thousand",
	answer2:"a million",
	answer3:"200 thousand",
	answer4:"40 million",

	right: "a million"
},







];






$("#answer").hide(100);
$("#time").hide(100);
$("#buttons").hide(100);
$("#comment").hide(100);
$("#quizContent").hide(100);
$("#quizContent").text(questions[questionCounter].question);
$("#questionNumber").text("Question:"+counter);
$("#questionNumber").hide(100);
$("#qA").text(questions[questionCounter].answer1);
$("#qB").text(questions[questionCounter].answer2);
$("#qC").text(questions[questionCounter].answer3);
$("#qD").text(questions[questionCounter].answer4);


function right (){
	
$("#answer").text("Answer: "+questions[questionCounter].right);
$("#answer").show(100);
$(".gify").show(100);
	$("#time").hide(100);
	$("#buttons").hide(100);
$("#comment").show(100);
$("#quizContent").hide(100);
$("#questionNumber").hide(100);
$("#comment").text("Good Job!");
score++;
sea= $("<img>");
sea.attr("src",oceangif[questionCounter]);

$(".gify").append(sea);
}
function  wrong(){
	
$("#answer").text("Answer: "+questions[questionCounter].right);
$("#answer").show(100);
	$(".gify").show(100);
	$("#time").hide(100);

	$("#buttons").hide(100);
$("#comment").show(100);
$("#quizContent").hide(100);
$("#questionNumber").hide(100);
$("#comment").text("Wrong");
sea= $("<img>");
sea.attr("src",oceangif[questionCounter]);
$(".gify").append(sea);

}
function next(){
	$("#answer").hide(100);
	oceanCounter++;
	sea.remove();
	$(".gify").hide(100);
	questionCounter++;
	counter++;
	$("#qA").text(questions[questionCounter].answer1);
$("#qB").text(questions[questionCounter].answer2);
$("#qC").text(questions[questionCounter].answer3);
$("#qD").text(questions[questionCounter].answer4);
	$("#time").show(100);
	$("#buttons").show(100);
$("#comment").hide(100);
$("#quizContent").show(100);
$("#questionNumber").show(100);
$("body").css("background", "url("+ocean[oceanCounter]+")");
$("#quizContent").text(questions[questionCounter].question);
$("#questionNumber").text("Question:"+counter);

}

function end(){
	$("#buttons").hide(100);
	$("#time").hide(100);
	$("#quizContent").hide(100);
	$("#comment").text("You Scored a "+score+"/10");
	$(".gify").hide(100);
	$("#start").show(100);
	$("#answer").hide(100);
	$("#start").text("Restart");
	
	
	
}


function start(){
	
	$("#prepare").hide(100);
	$("#time").show(100);
	$("#start").hide(100);
	$("#buttons").show(100);
$("#comment").hide(100);
$("#quizContent").show(100);
$("#questionNumber").show(100);


	
}

$("#start").on("click",function(){
	if(nextCounter=10){
		nextCounter=0;
		questionCounter=0;
		oceanCounter=0;
		score=0;
		counter=1;
		
		$("#quizContent").text(questions[questionCounter].question);
		$("#questionNumber").text("Question "+counter);
		
	}
	start();
	
	
});

$("#qA").on("click",function(){
	nextCounter++;
if(($("#qA").text())===questions[questionCounter].right){
	right();
	
	
}else{
	wrong();
	
	
}
   if(nextCounter<10){
  setTimeout(next,2000);
}else {
	end();
	
	
}
});

$("#qB").on("click",function(){
	nextCounter++;
if(($("#qB").text())===questions[questionCounter].right){
	right();
}else{
	wrong();
}
if(nextCounter<10){
  setTimeout(next,2000);
}else {
	end();
	
	
}
	
});
$("#qC").on("click",function(){
	nextCounter++;
if(($("#qC").text())===questions[questionCounter].right){
	right();
}else{
	wrong();
}
if(nextCounter<10){
  setTimeout(next,2000);
}else {
	end();
	
	
}
	
});
$("#qD").on("click",function(){
	nextCounter++;
if(($("#qD").text())===questions[questionCounter].right){
	right();
}else{
	wrong();
}
if(nextCounter<10){
  setTimeout(next,2000);
}else {
	end();
	
	
}
	
});

