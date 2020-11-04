//Create variables here
var hungryDog,happyDog,dog,database,foodStock

var foodS;

var feed,addFood

var fedTime,lastFed

function preload()
{
  //load images here
  hungryDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");

}

function setup() {
  createCanvas(500,500);
  

  dog = createSprite(250,300,20,20);
  dog.addImage(hungryDog)

  dog.scale = 0.4 ;

  database = firebase.database();

 database.ref("food").on("value",function(data){
  foodStock = data.val();
 });
                                          
 
 feed = createButton("Feed")
  feed.position(520,55);

  addFood = createButton("Add Food")
  addFood.position(580,55);

foodS= new FOOD(270,390,40,40);
  
 

}
  

function draw() {  

  background("yellow")
 
  foodS.display();


  fill("black");



  fedTime = database.ref("FeedTime");
  fedTime.on("value",function(data){
      lastFed = data.val();

  });
        textSize(15);
        if(lastFed>=12){
        text("Last Feed: "+ lastFed%12 + "PM",350,30);
        }else if(lastFed==0){
        text ("Last Feed : 12 AM",350,30);
        }else{
        text ("Last Feed : "+ lastFed + "AM",350,30);
        }

  drawSprites();
  //add styles here
textSize(25)
text("food remaining:" + foodStock,130,150);





}

function writeStock(x){

if(x<0){
  x = 0;
}
  else{
    x = x-1
  }

  database.ref("/").update({
    food:x
  })

}

function feedDog(){
dog.addImage (happyDog);

foodObj.updatefoodstock(foodobj.getfoodStock()-1)
database.ref("/" ).update({
Food:foodobj.getfoodStock(),
FeedTime:hour()
})
}

function addFoods(){
  foodStock++;
  database.ref("/").update({
    food:foodS
  })
}
