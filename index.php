<html>
<head>
<style type="text/css">
body {
  background: #333333;
}
video {
  width: 30%;
  border: 1px solid white;
}
video.block::-webkit-media-controls {
 background: black; 
}

.container {
  position: relative;
  width: 512px;
  height: 384px;
  overflow: hidden;
}

.video {
  position: absolute;
  width: 100%;
  height: 100%;
  transform: scale(2);
  top: 50%;
  left: 50%;
  transform-origin: center;
}

</style>
</head>
<body>
<?php

$videos[] = '../ground.mp4';
$videos[] = '../ground.mp4';
$videos[] = '../ground.mp4';
$videos[] = '../ground.mp4';
$videos[] = '../ground.mp4';
$videos[] = '../ground.mp4';
$videos[] = '../ground.mp4';
$videos[] = '../ground.mp4';
$videos[] = '../ground.mp4';

?>

<?php foreach ($videos as $i => $video): ?>

  <div class="container">
  <video loop controls muted class="video <?php print $i; ?>" src="<?php print $video; ?>"></video>
  </div>

<?php endforeach; ?>

<button id="stop">Stop All</button>
<button id="play">Play All</button>
<button id="sync">Sync All</button>

<script type="text/javascript">

    //context.drawImage(source, 0, 0, canvas.width, canvas.height);

window.addEventListener("load", function() {
  const vids = document.querySelectorAll("video");
  const stop = document.getElementById("stop");
  const play = document.getElementById("play");
  stop.addEventListener("click", function() {
    console.log(vids);
    for(const v of vids) {
      console.log("stopping " + v.className);
      v.pause();
    }
  });
  play.addEventListener("click", function() {
    console.log(vids);
    for(const v of vids) {
      console.log("playing " + v.className);
      v.play();
    }
  });
  sync.addEventListener("click", function() {
    for(const v of vids) {
      console.log("syncing " + v);
      v.currentTime = 0;
    }
  });
});
</script>
</body>
</html>
