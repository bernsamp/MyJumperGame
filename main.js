window.onload = function() {

    let btn = document.getElementById("jump");

    let count = 0;

    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 350;

    

    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle="red";
    context.fill();

    btn.onclick = function() {

        function draw(){

    count += 1;

    //changing the y position
    y -= 25;

    //clearing the canvas
    context.clearRect(0, 0, 600, 400);
   
    //redrawing the circle   
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle="red";
    context.fill();

    //drawing the count value
    context.font = '25px Arial';
    context.fillStyle = 'white';
    context.fillText("Count: " + count, 20, 30);

    if(y<=0+50){
        y=375
    }

    var timePassed = (Date.now() - t) / 1000;

t = Date.now();

if(y <= 350) {

  speed += 50 * timePassed;

  y += speed*timePassed;

} 

if(y > 350) {

  count = 0

} 
        }
    window.requestAnimationFrame(draw);
        }

    document.onkeydown = function() {

        function drawother(){

  count += 1;

  y -= 25;

  context.clearRect(0, 0, 600, 400);
   
    //redrawing the circle   
    context.beginPath();
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle="red";
    context.fill();

    //drawing the count value
    context.font = '25px Arial';
    context.fillStyle = 'white';
    context.fillText("Count: " + count, 20, 30);

    if(y<=0+50){
        y=375

}
window.requestAnimationFrame(drawother);

        }
    }
    }  