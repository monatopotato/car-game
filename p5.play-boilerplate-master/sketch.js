var car, car2, car3;
var speed, weight;



function setup() {
    createCanvas(1200, 400);


    car = createSprite(50, 30, 30, 10);
    car2 = createSprite(50, 130, 30, 10);
    car3 = createSprite(50, 230, 30, 10);
    speed = random(223, 321);
    weight = random(30, 52);
    car.velocityX = 0.5(speed / weight);
    car2.velocityX = 0.5(speed / weight);
    car3.velocityX = 0.5(speed / weight);

}

function draw() {


    background = ("white");


    drawSprites();



}