var reverse_path;
var reverse_active = false;

function run_reverse() {
  clearInterval(timer);
  context.fillRect(0, 0, canvas.width, canvas.height);

  if (reverse_active) {
    reverse_active = false;
    run();
    return;
  }

  reverse_active = true;
  reverse_path = target.slice();
  reverse_path.reverse();

  timer = setInterval(function() {
    for (i=0; i < source.length; i++) {
      context.drawImage(vid, source[i][0], source[i][1], source[i][2], source[i][3], reverse_path[i][0], reverse_path[i][1], reverse_path[i][2], reverse_path[i][3]);
    }
  }, 1000 / fps);
}

window.addEventListener("load", function() {
  var button = document.createElement('button');
  button.id = "btn_reverse";
  button.innerHTML = "Reverse (V)";
  other.append(button);
  button.addEventListener("click", function() {
    run_reverse();
  });
  document.addEventListener("keydown", function(e) {
    if (e.code == "KeyV") {
      run_reverse();
    }
  });
});
