var randomNumber1=Math.floor(Math.random()*6)+1;
var randomimg="dice"+randomNumber1+".png";

var img1=document.querySelectorAll("img")[0];

img1.setAttribute("src",randomimg);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomimg2="dice"+randomNumber2+".png";
var img2=document.querySelectorAll("img")[1];
img2.setAttribute("src",randomimg2);


if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player1 Won!!";
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player2 Won!!";
}
else{
    document.querySelector("h1").innerHTML="Draw!!";
}