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
         map: new THREE.TextureLoader().load('./textures/devGridOrange.jpg')
    });

    var tex = new THREE.TextureLoader().load('./textures/devGridGrey.jpg')
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.RepeatWrapping;
    tex.repeat.set( 100, 100 );
    this.bigGreyGrid = new THREE.MeshBasicMaterial({
        map: tex
    });


    

     

}




