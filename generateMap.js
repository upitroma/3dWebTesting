function generateMap(){

  var scale = 1;

  var walls = [
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
        [1, 0, 0, 0, 1, 1, 1], //array can be any size
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

  var currentMaterial = new PrefabMaterials().devGrid
  
  for (var i = 0; i < walls.length; i++) {
      for (var j = 0; j < walls[i].length; j++) {
          for (var k = 0; k < walls[i][j].length; k++){
              if (walls[i][j][k] === 1) {
                  createWall(j, i, k, currentMaterial);
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

  //spotLight not currently useful. might be needed later
  var spotLight = new THREE.SpotLight( 0xffffff);
  spotLight.position.set( 5, 15, 1 );
  spotLight.rotation.x = 0.05;
  spotLight.angle = 0.5; 
  scene.add( spotLight );
  //var lHelp = new THREE.SpotLightHelper(spotLight);
  //scene.add(lHelp);

  var light = new THREE.AmbientLight( 0x404040 ); // soft white light
  scene.add( light );
}