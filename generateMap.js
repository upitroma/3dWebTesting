function generateMap(){

  var scale = 1;

  var walls = [
      [
        [1, 0, 1, 1, 1,0,2],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1,0,1,1],
        [1, 0, 0, 0, 1,0,1],
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
              else if(walls[i][j][k] === 2){
                createWall(j, i, k, new PrefabMaterials().devHitbox);
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


  //floor
  var geometry = new THREE.PlaneGeometry( 100, 100, 1, 1 )
  var mat = new PrefabMaterials().bigGreyGrid
	var floor = new THREE.Mesh( geometry, mat);
	floor.material.side = THREE.DoubleSide;
  floor.rotation.x = -1.5708;
  floor.position.set(.5, -.5, .5);
  scene.add( floor ); 



  //skybox
  var geometry = new THREE.SphereBufferGeometry( 500, 60, 40 );
  // invert the geometry on the x-axis so that all of the faces point inward
  geometry.scale( - 1, 1, 1 );

  var texture = new THREE.TextureLoader().load( './textures/skybox.jpeg' );
  var material = new THREE.MeshBasicMaterial( { map: texture } );

  mesh = new THREE.Mesh( geometry, material );

  scene.add( mesh );

}