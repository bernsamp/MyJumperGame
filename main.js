window.onload = function() {
    let upButton = document.getElementById('up');
    let leftButton = document.getElementById('left')
    let downButton = document.getElementById('down');
    let rightButton = document.getElementById('right')
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

    upButton.onclick = function() {
        count += 1;
        y -= 25;
        speed = speedInit;
    }

    leftButton.onclick = function() {
        count += 1;
        x -= 25;
        speed = speedInit;
    }

    rightButton.onclick = function() {
        count += 1;
        x += 25;
        speed = speedInit;
    }

    downButton.onclick = function() {
        count += 1;
        y += 25;
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