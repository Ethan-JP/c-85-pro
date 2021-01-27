var canvas=document.getElementById("mycanvas");
var ctx=canvas.getContext("2d");
var canvasbg="BG.jpg";
var car1img="car1.png"
var car2img="car2.png"
car1X=10
car1Y=10
car2X=10
car2Y=120

function add(){
    bg=new Image();
    bg.src=canvasbg;
    bg.onload=uploadBackground;

 car1=new Image();
 car1.src=car1img;
 car1.onload=uploadcar1;

 car2=new Image();
 car2.src=car2img;
 car2.omload=uploadcar2;
}
function uploadBackground(){
    ctx.drawImage(bg,0,0,canvas.width,canvas.height)
}

function uploadcar1(){
    ctx.drawImage(car1,car1X,car1Y,100,100)
}

function uploadcar2(){
    ctx.drawImage(car2,car2X,car2Y,100,100)
}

window.addEventListener("keydown",kd)
function kd(e){
  number=e.keyCode
  console.log(number)
  if (number==37) {
      console.log("left is pressed")
      left1()
  }

  if (number==39) {
      console.log("right is pressed")
      right1()
  }

    if (number==65) {
        console.log("left is pressed")
        left2()
    }
  
    if (number==68) {
        console.log("right is pressed")
        right2()
    }
  
    if (car1X>=700) {
        console.log("car1 has won")
        document.getElementById("lol").innerHTML="Car1 has WON!!"
    }

    if (car2X>=700) {
        console.log("car2 has won")
        document.getElementById("lol").innerHTML="Car2 has WON!!"
    }

}

function left1(){
    if (car1X>=0) {
      car1X=car1X-10;
      uploadBackground()
      uploadcar1()
      uploadcar2()
    }
}

function right1(){
    if (car1X<=700){
car1X=car1X+10;
uploadBackground()
uploadcar1()
uploadcar2()
    }
}

function left2(){
    if (car1X>=0) {
      car2X=car2X-10;
      uploadBackground()
      uploadcar1()
      uploadcar2()
    }
}

function right2(){
    if (car2X<=700){
car2X=car2X+10;
uploadBackground()
uploadcar1()
uploadcar2()
    }
}