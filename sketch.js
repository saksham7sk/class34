const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var box1, box2, box3, box4, box5, box6, box7, box8, box9, box10;
var ball;
var rope





function setup() {

    var canvas = createCanvas(1200, 600);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600, 590, 1200, 30);
    box1 = new Box(700, 550)
    box2 = new Box(700, 500)
    box3 = new Box(700, 450)
    box4 = new Box(700, 400)
    box5 = new Box(700, 350)
    box6 = new Box(700, 300)
    box7 = new Box(700, 250)
    box8 = new Box(700, 200)
    box9 = new Box(700, 150)
    box10 = new Box(700, 100)

    box11 = new Box(750, 550)
    box12 = new Box(750, 500)
    box13 = new Box(750, 450)
    box14 = new Box(750, 400)
    box15 = new Box(750, 350)
    box16 = new Box(750, 300)
    box17 = new Box(750, 250)
    box18 = new Box(750, 200)
    box19 = new Box(750, 150)
    box20 = new Box(750, 100)

    ball = new Ball(500, 500);
    rope = new Rope(ball.body, { x: 500, y: 10 })


}

function draw() {
    background("lightblue");

    Engine.update(engine);
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();

    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();

    ball.display();
    rope.display();




}
function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}