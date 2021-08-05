

// or document.querySelector("button").addEventListener("click",function(){
// alert("Anonymous function");
// });


var number = document.querySelectorAll(".drum").length;   //To get the length of number of elemnts of class Drum
//For loop is to  loop through all the elements of the class drum
for (var i=0;i<number;i++)
{
  document.querySelectorAll(".drum")[i]/*This is used to select that particular button*/.addEventListener("click",  function ()/* This is sused when the button is clicked the function gets executed*/{
    var content=this.innerHTML; //This is used to get the content text of the button which is w a s d j k l


    makeSound(content);
    addAnimation(content);


  });
}
  document.addEventListener("keypress",function(event) /*This is a callback function*/  //An object gets created say event which basically stores the event type and what key was pressed and so on
{
  makeSound(event.key); //This is event which basically is done like mousevent and keyboard evenet and so on and returns a lot of those vriables
});
/* basically addEventListener(typeofEvent,callback)
{
  var eventhappened={
    type=keypress;
    so on
  }
  function callback(eventhappened)
  {
    console.log(eventhappened.type);
    It will be keypress
  }
  only if typeofEventand eventhtat happened is same only then executes
  */



function makeSound(content)
{
switch(content)
{
  case "w":
  var audio1=new Audio("sounds/tom-1.mp3");
  audio1.play();
  break;
  case "a":
  var audio2=new Audio("sounds/tom-2.mp3");
  audio2.play();
  break;
  case "s":
  var audio3=new Audio("sounds/tom-3.mp3");
  audio3.play();
  break;
  case "d":
  var audio4=new Audio("sounds/tom-4.mp3");
  audio4.play();
  break;
  case "j":
  var audio5=new Audio("sounds/snare.mp3");
  audio5.play();
  break;
  case "k":
  var audio6=new Audio("sounds/crash.mp3");
  audio6.play();
  break;
  case "l":
  var audio7=new Audio("sounds/kick-bass.mp3");
  audio7.play();
  break;
  default:
  console.log(content);
}
}

function addAnimation(key)
{
  var activeButton=document.querySelector("."+key);
  activeButton.classList.add("pressed");

  setTimeout(function()
{
  activeButton.classList.remove("pressed");

},100);

}
