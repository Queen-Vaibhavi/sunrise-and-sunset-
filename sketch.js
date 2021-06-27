const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg ;

function preload() {
    // create ImagenDeFondo() here
    ImagenDeFondo();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg){
        background(backgroundImg);
    }

    Engine.update(engine);

    //creativity-
    textSize(25);
    fill("black");
    
    text("if it is the morning hour,",500,100);
    text("make your plans by seeing a blooming flower!",500,130);

    
    text("it is just around noon,",500,160);//500,200
    text("switch on the tv and watch cartoon!",500,190);//500,160

    text("if you are watching this project at night,",500,230);
    text("tell me how is it as quick as you might!😊😊",500,260);

    
}

async function ImagenDeFondo(){

    // write code to fetch time from API
    var response = await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
    
    //change the data in JSON format
    var responseJSON = await response.json();
    var dateTime = responseJSON.datetime;
    
    // write code slice the datetime
    var hour = dateTime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour >= 04 && hour <= 06){
        bg = "sunrise1.png";
      }else if(hour >= 04 && hour <= 06){
        bg = "sunrise1.png";
      }else if(hour >= 06 && hour <= 08){
        bg = "sunrise2.png";
      }
      else if(hour >= 08 && hour <= 10){
        bg = "sunrise3.png";
      }
      else if(hour >= 10 && hour <= 12){
        bg = "sunrise4.png";
      }
      else if(hour >= 12 && hour <= 14){
        bg = "sunzeezrise5.png";
      }
      else if(hour >= 14 && hour <= 16){
        bg = "sunrise6.png";
      }
      else if(hour >= 16 && hour <= 18){
        bg = "sunset7.png";
      }
      else if(hour >= 18 && hour <= 20){
        bg = "sunset8.png";
      }
      else if(hour >= 20 && hour <= 22){
        bg = "sunset9.png";
      }
      else if(hour >= 23 && hour == 0){
        bg = "sunset10.png";
      }
      else if(hour == 0 && hour <= 03){
        bg = "sunset11.png";
      } else {
        bg = "sunset12.png";
      }
    
//load the image in backgroundImg variable here
   backgroundImg = loadImage(bg);

}
