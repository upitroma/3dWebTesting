//https://codepen.io/burlapjack/pen/BQOObR

var MyMaterials = new Materials()

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var spotLight = new THREE.SpotLight( 0xffffff);
spotLight.position.set( 5, 15, 1 );
spotLight.rotation.x = 0.05;
spotLight.angle = 0.5; 
scene.add( spotLight );

//var lHelp = new THREE.SpotLightHelper(spotLight);
//scene.add(lHelp);

var renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var scale = 1;
var rotSpd = 0.1;
var spd = 0.1;

//TODO: generate map in seporate file

var room = [
  [
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ],
  [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ],
  [
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1]
  ]
];

function createLevel(lvl) {
  var currentMaterial = MyMaterials.normal

  for (var i = 0; i < lvl.length; i++) {
    for (var j = 0; j < lvl[i].length; j++) {
      for (var k = 0; k < lvl[i][j].length; k++){
        if (lvl[i][j][k] === 1) {
          createWall(j, i, k, currentMaterial);
        }
      }
    }
  }
}

function createWall(x, y, z, material) {
  var geometry = new THREE.BoxGeometry(scale, scale, scale);
  
  var cube = new THREE.Mesh(geometry, material);
  cube.position.x = x;
  cube.position.y = y; 
  cube.position.z = z;
  scene.add(cube);
}

function init() {
  createLevel(room);
  update();
  camera.position.y = 0;
  camera.position.z = 0;
}

function update() {// TODO: add deltaTime mechanic
  renderer.render(scene, camera);
  movePlayer();
  
  requestAnimationFrame(update);
} 

//keyboard inputs
var input = {left:0,right:0, up: 0, down: 0};

//grab mouse
document.addEventListener("mousedown", function(){
  document.body.requestPointerLock()
})

//mouse movement
var deltaMouseX=0
var deltaMouseY=0
document.onmousemove = function(){
  deltaMouseX=event.movementX
  deltaMouseY=event.movementY
}

//player movement
camera.rotation.order = "YXZ";
function movePlayer(){
  //FIXME: replace .01 with deltaTime-rotSpeed
  camera.rotation.y-=deltaMouseX*.01 
  camera.rotation.x-=deltaMouseY*.01 
  camera.rotation.x= Math.min(Math.max(camera.rotation.x, -1.5708), 1.5708)

  deltaMouseX=0
  deltaMouseY=0
  
  if(input.right == 1){
    camera.position.z -= Math.cos(camera.rotation.y-1.5708) * spd;
    camera.position.x -= Math.sin(camera.rotation.y-1.5708) * spd;
  }
  if(input.left == 1){
    camera.position.z -= Math.cos(camera.rotation.y+1.5708) * spd;
    camera.position.x -= Math.sin(camera.rotation.y+1.5708) * spd;
  }
  if(input.up == 1){
    camera.position.z -= Math.cos(camera.rotation.y) * spd;
    camera.position.x -= Math.sin(camera.rotation.y) * spd;
  }
  if(input.down == 1){
    camera.position.z += Math.cos(camera.rotation.y) * spd;
    camera.position.x += Math.sin(camera.rotation.y) * spd;
  }
}


window.addEventListener('keydown', function(e) {
  switch (e.keyCode) {
    case 68:
      input.right = 1;
      break;
    case 65:
      input.left = 1; 
      break;
    case 87:
      input.up = 1;
      break;
    case 83:
      input.down = 1;
      break;
  }
});

window.addEventListener('keyup', function(e) {
  switch (e.keyCode) {
    case 68:
      input.right = 0;
      break;
    case 65:
      input.left = 0;
      break;
      case 87:
      input.up = 0;
      break;
    case 83:
      input.down = 0;
      break; 
  }
});

init();