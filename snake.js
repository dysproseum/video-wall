var snake_frame;
var snake_path;

function snakeadvance() {
  snake_frame++;
  context.fillRect(0, 0, canvas.width, canvas.height);
  if (snake_frame < source.length) {
    setTimeout(snakeadvance, 500);
    return;
  }
  clearInterval(timer);
  run();
}

function run_snake() {
  clearInterval(timer);
  context.fillRect(0, 0, canvas.width, canvas.height);

  snake_path = new Array();//gridWidth * gridHeight);
  for(i=0; i < gridHeight; i++) {
    var part = target.slice(i * gridWidth, i * gridWidth + gridWidth);
    if (i % 2 == 0) {
      // reverse odd rows
      part.reverse();
    }
    snake_path = snake_path.concat(part);
  }

  snake_frame = 0;
  snake_forward = false;
  timer = setInterval(function() {
    context.drawImage(vid, 0, 0, w, h, snake_path[snake_frame][0], snake_path[snake_frame][1], snake_path[snake_frame][2], snake_path[snake_frame][3]);
  }, 1000 / fps);

  setTimeout(snakeadvance, 500);

}

window.addEventListener("load", function() {
  var button = document.createElement('button');
  button.id = "btn_snake";
  button.innerHTML = "Snake (S)";
  other.append(button);
  button.addEventListener("click", function() {
    run_snake();
  });
  document.addEventListener("keydown", function(e) {
    if (e.code == "KeyS") {
      run_snake();
    }
  });
});
