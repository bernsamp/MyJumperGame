window.onload = function() {
    let upBtn = document.getElementById('up');
    let count = 0;
    let canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 300;
    var y = 350;
    let t = Date.now();
    let speedInit = 40;
    let speed = speedInit;

    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle="red";
    context.fill(); 

    upBtn.onclick = function() {
        count += 1;
        y -= 25;
        speed = speedInit;
    }

    document.onkeyup = function() {
        count += 1;
        y -= 25;
        speed = speedInit;
    }

    upBtn.ontouchstart = function() {
        count += 1;
        y -= 25;
        speed = speedInit;
    } 

    function draw() {
        var timePassed = (Date.now() - t) / 1000;
        t = Date.now();

        if(y <= 350) {
            speed += 50 * timePassed;
            y += speed*timePassed;
        }

        if(y > 350) {
            count = 0
        } 

        context.clearRect(0, 0, 600, 400);
            
        context.beginPath();
        context.arc(x, y, 50, 0, 2 * Math.PI);
        context.fillStyle="red";
        context.fill();

        context.font = '25px Arial';
        context.fillStyle = 'white';
        context.fillText("Count: " + count, 20, 30);
        
        window.requestAnimationFrame(draw);
    }

    draw();
}