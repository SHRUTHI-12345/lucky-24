const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var stone, rubber,hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    
    plane = new Plane(600,height,1200,20)
    iron= new iron(300,350)
    stone = new stone(700,320,100,100)
    rubber= new rubber(900,450,70)
    hammer = new Plane(10,100)



    // same way ; jaise line 15 mein plane create kiya hai waise hi iron,stone,rubber,hammer create karna hai
    // create iron with position(300,350) 
    // create stone with position(700,320,100,100) 
    // create rubber with position(900,450,70) 
    // create hammer with position(10,100) 
   

  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    stone.display();
    iron.display();
    rubber.display(); 
    plane.display();
    hammer.display();


    // display rubber
    // display iron
    // display plane
    // display hammer
 
}
