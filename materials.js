function PrefabMaterials(){
    this.normal = new THREE.MeshNormalMaterial({
        color: 0x000ff0, 
        roughness: 0
    });


    this.phong = new THREE.MeshPhongMaterial({
        color: 0xFFFFFF,    
        flatShading: true,
    });
    this.devGrid = new THREE.MeshBasicMaterial({
         map: new THREE.TextureLoader().load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg')
    });
}




