function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

var st = new Date().getTime();

function move() {
    var left;
    var top;
    var wh;
    left = Math.random() * 300;
    top = Math.random() * 300; // Fix for top
    wh = ((Math.random() * 400) + 100);

    var shape = document.getElementById("shape");
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    shape.style.display = "block";
    shape.style.backgroundColor = getRandomColor();

    st = new Date().getTime();
}

move();

document.getElementById("shape").onclick = function () {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timetaken = (end - st) / 1000;
    alert(timetaken.toFixed(3) + " seconds"); // <-- unit added
    move();
}
