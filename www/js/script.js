
var $random = $("#random"),
    $youtubeAudio = $("#youtube-audio"),
    $youtubeAudioI = $("#youtube-audio i");

// randomly chose one of the 151 first gen pokemon
$(document).ready(function() {
  $random.click(function() {
    // always reset pokeball as image
    $random.attr("src", "https://res.cloudinary.com/beumsk/image/upload/v1506068916/pokeball.png").css("padding","0");

    // start animation
    $random.addClass("animated");
    setTimeout( function () {
      // replace image with one random pokemon after the animation (1s length)
      $random.attr('src', pokemons[Math.floor(Math.random() * pokemons.length)]);
      $random.removeClass("animated").css("padding", "10px");
      $random.fadeTo(0, 0.2).fadeTo(1000, 1);
    }, 1000);
  });

  // change youtube audio icon on play
  $youtubeAudio.on('click', function() {
    $youtubeAudioI.toggleClass('fa-volume-up fa-volume-off')
  });
});

// array with 151 pokemons

var pokemons = [
  'https://www.pkparaiso.com/tcg/xy0/es_512/001.jpg',
  'https://www.pkparaiso.com/tcg/promo_sm/es_256/076.jpg',
  'https://www.pkparaiso.com/tcg/bw2/es_256/001.jpg',
  'https://www.pkparaiso.com/tcg/xy0/es_512/003.jpg',
  'https://www.pkparaiso.com/tcg/xy0/es_512/004.jpg',
  'https://www.pkparaiso.com/tcg/sl/es_256/001.jpg',
  'https://www.pkparaiso.com/tcg/sl/es_256/002.jpg',
  'https://www.pkparaiso.com/tcg/sl/es_256/039.jpg',
  'https://www.pkparaiso.com/tcg/sl/es_256/036.jpg',
  'https://www.pkparaiso.com/tcg/sl/es_256/029.jpg',
  'https://www.pkparaiso.com/tcg/sl/es_256/030.jpg',
  'https://www.pkparaiso.com/tcg/sl/es_256/046.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/003.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/005.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/008.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/010.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/018.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/019.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/020.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/048.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/057.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/068.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/101.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/106.jpg',
  'https://www.pkparaiso.com/tcg/sm3/es_256/109.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/001.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/003.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/007.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/006.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/014.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/017.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/040.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/063.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/065.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/067.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/088.jpg',
  'https://www.pkparaiso.com/tcg/sm2/es_256/103.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/001.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/002.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/003.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/003.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/006.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/005.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/021.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/022.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/023.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/025.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/028.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/029.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/030.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/034.jpg',
  'https://www.pkparaiso.com/tcg/sm1/es_256/035.jpg',






];
    var scene= new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);

    var renderer = Detector.webgl? new THREE.WebGLRenderer( { antialias: true } ): new THREE.CanvasRenderer();

    var blue = 0x84D0F0;
    var yellow = 0xFED162;
    var purple = 0x651E59;

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.body.appendChild(renderer.domElement);

  camera.position.z = 20;

  var tubeGeometry = new THREE.CylinderGeometry(0.3,0.3,6,32);
  var ballGeometry = new THREE.SphereGeometry(0.8,32,32);
  var blueMaterial = new THREE.MeshBasicMaterial( { color: blue } );
  var yellowMaterial = new THREE.MeshBasicMaterial( { color: yellow } );
  var purpleMaterial = new THREE.MeshBasicMaterial( { color: purple } );

  var dna = new THREE.Object3D();
  var holder = new THREE.Object3D();


  for (var i = 0; i <= 40; i++) {
  var blueTube = new THREE.Mesh(tubeGeometry, blueMaterial);
  blueTube.rotation.z = 90 * Math.PI/180;
  blueTube.position.x = -3;

  var yellowTube = new THREE.Mesh(tubeGeometry, yellowMaterial );
  yellowTube.rotation.z = 90 * Math.PI/180;
  yellowTube.position.x = 3;


  var ballRight = new THREE.Mesh( ballGeometry, purpleMaterial );
  ballRight.position.x = 6;

  var ballLeft = new THREE.Mesh( ballGeometry, purpleMaterial );
  ballLeft.position.x = -6;

  var row = new THREE.Object3D();
  row.add(blueTube);
  row.add(yellowTube);
  row.add(ballRight);
  row.add(ballLeft);

  row.position.y = i*2;
  row.rotation.y = 30*i * Math.PI/180;

  dna.add(row);

  };


  dna.position.y = -40;

  scene.add(dna);

  dna.position.y = -40;
  holder.add(dna)
  scene.add(holder);

  var CubeConfigData = function() {
  this.zoom = 20;
  };

  var view = new CubeConfigData();
  var gui = new dat.GUI();
  gui.close();

  gui.add( view, 'zoom', 0, 20 ).onChange( function(value) {
  camera.position.z = value;
  });


  var render = function () {

  requestAnimationFrame(render);

  holder.rotation.x += 0.01;
  holder.rotation.y += 0.01;
  renderer.render(scene, camera);
  }

  render();
