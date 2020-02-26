//https://codepen.io/burlapjack/pen/BQOObR

var MyMaterials = new PrefabMaterials()

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer(); 
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);


var rotSpd = 0.1;
var spd = 0.1;

function init() {
  generateMap()
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
var input = {left:0,right:0, forward: 0, backward: 0};

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
  if(input.forward == 1){
    camera.position.z -= Math.cos(camera.rotation.y) * spd;
    camera.position.x -= Math.sin(camera.rotation.y) * spd;
  }
  if(input.backward == 1){
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
      input.forward = 1;
      break;
    case 83:
      input.backward = 1;
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
      input.forward = 0;
      break;
    case 83:
      input.backward = 0;
      break; 
  }
});

init();