function randomNumber1 (min,max){
    return Math.floor(Math.random() * (max-min) +1)
}


const random= randomNumber1(1,7);
const random2= randomNumber1(1,7);
var randomdiceImage= "dice"+random+".png";
var randomSource= "images/"+ randomdiceImage;
// for right image
var randomdiceImage2= "dice"+random2+".png";
var randomSource2= "images/"+ randomdiceImage2;
var image1= document.querySelectorAll("img")[0]  
image1.setAttribute("src",randomSource)

var image2= document.querySelectorAll("img")[1]
image2.setAttribute("src",randomSource2)


if (random > random2){
    document.querySelector("h1").innerHTML="Play 1 Win"

}
else if (random === random2){
    document.querySelector("h1").innerHTML="We are draww!!"
}
else {
    document.querySelector("h1").innerHTML="Player 2 Win!"
}