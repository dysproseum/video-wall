var individual_active = false;

function run_individual() {
  clearInterval(timer);

  if (individual_active) {
    individual_active = !individual_active;
    run();
    return;
  }

  individual_active = true;
  timer = setInterval(function() {
    for (i=0; i < source.length; i++) {
      context.drawImage(vid, 0, 0, w, h, target[i][0], target[i][1], target[i][2], target[i][3]);
    }
  }, 1000 / fps);
}

window.addEventListener("load", function() {
  var button = document.createElement('button');
  button.id = "btn_individual";
  button.innerHTML = "Individual (I)";
  other.append(button);
  button.addEventListener("click", function() {
    run_individual();
  });
  document.addEventListener("keydown", function(e) {
    if (e.code == "KeyI") {
      run_individual();
    }
  });
});
