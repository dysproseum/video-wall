var random_path;
var random_active = false;

function shuffle(array) {
  let currentIndex = array.length;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    let randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }
}

function run_random() {
  clearInterval(timer);
  context.fillRect(0, 0, canvas.width, canvas.height);

  if (random_active) {
    random_active = false;
    run();
    return;
  }

  random_active = true;
  random_path = target.slice();
  shuffle(random_path);

  timer = setInterval(function() {
    for (i=0; i < source.length; i++) {
      context.drawImage(vid, source[i][0], source[i][1], source[i][2], source[i][3], random_path[i][0], random_path[i][1], random_path[i][2], random_path[i][3]);
    }
  }, 1000 / fps);
}

window.addEventListener("load", function() {
  var button = document.createElement('button');
  button.id = "btn_random";
  button.innerHTML = "Random (R)";
  other.append(button);
  button.addEventListener("click", function() {
    run_random();
  });
  document.addEventListener("keydown", function(e) {
    if (e.code == "KeyR") {
      run_random();
    }
  });
});
