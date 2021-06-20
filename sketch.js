const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var bg,consolve

function preload(){
	
    bg = loadImage("bg.jpg")
   

}

function setup() {
	createCanvas(2000,displayHeight);

	engine = Engine.create();
	world = engine.world;

	
hex = new Hexa()
slingshot = new Band(hex.body,{x:370,y:150})
// normal ground
ground = new Ground(width/2,height-50,width,15)	
ground1 = new Ground(700,500,475,5)
ground2 = new Ground(1300,300,400,5)
// wall
lwall = new Ground(0,height/2,15,height)
rwall = new Ground(width,height/2,15,height)
twall = new Ground(width/2,0,width,15)

 
// stage 1 
//4th row
box1 = new Box(550,480)
box2 = new Box(600,480)
box3 = new Box(650,480)
box4 = new Box(700,480)
box5 = new Box(750,480)
box6 = new Box(800,480)
box7 = new Box(850,480)
//3rd row
box8 = new Box(600,400)
box9 = new Box(650,400)
box10 = new Box(700,400)
box11 = new Box(750,400)
box12 = new Box(800,400)
//2nd row
box13 = new Box(650,350)
box14 = new Box(700,350)
box15 = new Box(750,350)
// stage 2 
//3rd row
box21 = new Box(1200,280)
box22 = new Box(1250,280)
box23 = new Box(1300,280)
box24 = new Box(1350,280)
box25 = new Box(1400,280)
//2nd row
box18 = new Box(1250,250)
box19 = new Box(1300,250)
box20 = new Box(1350,250)
//1st row
box17 = new Box(1300,200)
box16 = new Box(700,300)
	Engine.run(engine);

   
  
}

function draw() {
  rectMode(CENTER);
  background(bg);
  textSize(25);
  
 


 hex.display()
 slingshot.display()
 // stage 1 
 //4th row
 fill("skyblue")
 box1.display()
 box2.display()
 box3.display()
 box4.display()
 box5.display()
 box6.display()
 box7.display()
 //stage 2 
 //3rd row
box21.display()
box22.display()
box23.display()
box24.display()
box25.display()
//2nd row
 fill("lightgreen")
 box13.display()
 box14.display()
 box15.display()
 box18.display()
 box19.display()
 box20.display()
 // stage 1 3rd row
 fill("lightpink")
 box8.display()
 box9.display()
 box10.display()
 box11.display()
 box12.display()
 box17.display()
 //1st row

//1st row
fill("grey")
box16.display()
 //grounds
 fill("brown")
 stroke("brown")

ground1.display()
ground2.display()
//wall


}

function mouseDragged(){
    Matter.Body.setPosition(hex.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
