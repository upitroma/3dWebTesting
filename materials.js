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
         map: new THREE.TextureLoader().load('https://lh3.googleusercontent.com/proxy/TH1FiVaB6upc9_6hrYDdPXSD98OL6ygLTRxqQWu_QxD-g-5UVHwR_zXvSzDsDISJsECoJNoeN6riEkczFI3STzXssECUKs9ypjt3FL6KgeKcrW0TuTt9brnN6lMrjkzVEt6KYjWa3toa2jo-lG3UF5n4_rh0yNgC5MxrDG0')
    });
}




