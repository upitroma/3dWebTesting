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

    var currentMaterial = new PrefabMaterials().normal
    
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
}