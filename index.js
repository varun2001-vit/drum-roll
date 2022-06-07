document.addEventListener('keypress',function (event) {
    makesound(event.key);
    animation(event.key);


} );
var tot= document.querySelectorAll(".drum").length;
for (var i =0;i<tot;i++)
{
    document.querySelectorAll("Button")[i].addEventListener("click",function () {
        makesound(this.innerHTML);
        animation(this.innerHTML);
    });
}



function animation(event)
{
    document.querySelector("." +event).classList.add("pressed");
    setTimeout(function () {
        document.querySelector("." +event).classList.remove("pressed");
    },100);
}
function makesound(event) {
    switch (event)
    {
       case "w":
           var tom1= new Audio("sounds/tom-1.mp3");
           tom1.play();
           break;
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            break;
        case "k":
            var kicks= new Audio("sounds/kick-bass.mp3");
            kicks.play();
            break;
        case "l":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            break;
    }


}