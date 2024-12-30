class Code_51_75{
    //Add the dwellings back into the village scene.
    static c51 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));  

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb");

    return scene;
};
    `;
    
    //Add the animating car back into the village scene.
    static c52 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0)); 

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb");
    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "car.glb").then(() => {
        const car = scene.getMeshByName("car");
        car.rotation = new BABYLON.Vector3(Math.PI / 2, 0, -Math.PI / 2);
        car.position.y = 0.16;
        car.position.x = -3;
        car.position.z = 8;

        const animCar = new BABYLON.Animation("carAnimation", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

      const carKeys = []; 

      carKeys.push({
        frame: 0,
        value: 10
      });


      carKeys.push({
        frame: 200,
        value: -15
      });

      animCar.setKeys(carKeys);

      car.animations = [];
      car.animations.push(animCar);

      scene.beginAnimation(car, 0, 200, true);
      
      //wheel animation
      const wheelRB = scene.getMeshByName("wheelRB");
      const wheelRF = scene.getMeshByName("wheelRF");
      const wheelLB = scene.getMeshByName("wheelLB");
      const wheelLF = scene.getMeshByName("wheelLF");
      
      scene.beginAnimation(wheelRB, 0, 30, true);
      scene.beginAnimation(wheelRF, 0, 30, true);
      scene.beginAnimation(wheelLB, 0, 30, true);
      scene.beginAnimation(wheelLF, 0, 30, true);
    });

    return scene;
};
    `;

    //Add a skybox to your scene.
    static c53 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.upperBetaLimit = Math.PI / 2.2;
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb");
    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "car.glb").then(() => {
        const car = scene.getMeshByName("car");
        car.rotation = new BABYLON.Vector3(Math.PI / 2, 0, -Math.PI / 2);
        car.position.y = 0.16;
        car.position.x = -3;
        car.position.z = 8;

        const animCar = new BABYLON.Animation("carAnimation", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

      const carKeys = []; 

      carKeys.push({
        frame: 0,
        value: 10
      });


      carKeys.push({
        frame: 200,
        value: -15
      });

      animCar.setKeys(carKeys);

      car.animations = [];
      car.animations.push(animCar);

      scene.beginAnimation(car, 0, 200, true);
      
      //wheel animation
      const wheelRB = scene.getMeshByName("wheelRB");
      const wheelRF = scene.getMeshByName("wheelRF");
      const wheelLB = scene.getMeshByName("wheelLB");
      const wheelLF = scene.getMeshByName("wheelLF");
      
      scene.beginAnimation(wheelRB, 0, 30, true);
      scene.beginAnimation(wheelRF, 0, 30, true);
      scene.beginAnimation(wheelLB, 0, 30, true);
      scene.beginAnimation(wheelLF, 0, 30, true);
    });

    return scene;
};
    `;

    //Add sprite trees to your scene.
    static c54 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.upperBetaLimit = Math.PI / 2.2;
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const spriteManagerTrees = new BABYLON.SpriteManager("treesManager", "textures/palm.png", 2000, {width: 512, height: 1024}, scene);

    //We create trees at random positions
    for (let i = 0; i < 500; i++) {
        const tree = new BABYLON.Sprite("tree", spriteManagerTrees);
        tree.position.x = Math.random() * (-30);
        tree.position.z = Math.random() * 20 + 8;
        tree.position.y = 0.5;
    }

    for (let i = 0; i < 500; i++) {
        const tree = new BABYLON.Sprite("tree", spriteManagerTrees);
        tree.position.x = Math.random() * (25) + 7;
        tree.position.z = Math.random() * -35  + 8;
        tree.position.y = 0.5;
    }
    
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb");

    return scene;
};
    `;

    //Add an animated UFO to your scene.
    static c55 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.upperBetaLimit = Math.PI / 2.2;
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const spriteManagerUFO = new BABYLON.SpriteManager("UFOManager","https://assets.babylonjs.com/environments/ufo.png", 1, {width: 128, height: 76});
    const ufo = new BABYLON.Sprite("ufo", spriteManagerUFO);
    ufo.playAnimation(0, 16, true, 125);
    ufo.position.y = 5;
    ufo.position.z = 0;
    ufo.width = 2;
    ufo.height = 1;
    
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb");

    return scene;
};
    `;
    
    //Use the createLathe method to create a fountain.
    static c56 = `
    const createScene = function () {
	const scene = new BABYLON.Scene(engine);

	const camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 2.5, 70, BABYLON.Vector3.Zero());
	camera.attachControl(canvas, true);

	const light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0));

	const fountainProfile = [
		new BABYLON.Vector3(0, 0, 0),
		new BABYLON.Vector3(10, 0, 0),
        new BABYLON.Vector3(10, 4, 0),
		new BABYLON.Vector3(8, 4, 0),
        new BABYLON.Vector3(8, 1, 0),
        new BABYLON.Vector3(1, 2, 0),
		new BABYLON.Vector3(1, 15, 0),
		new BABYLON.Vector3(3, 17, 0)
	];
	
	//Create lathe
	const fountain = BABYLON.MeshBuilder.CreateLathe("fountain", {shape: fountainProfile, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
	
	return scene;
}
    `;

    //Add the fountain into the village.
    static c57 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 1.5, Math.PI / 2.2, 15, new BABYLON.Vector3(0, 0, 0));
    camera.upperBetaLimit = Math.PI / 2.2;
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const fountainOutline = [
		new BABYLON.Vector3(0, 0, 0),
		new BABYLON.Vector3(0.5, 0, 0),
        new BABYLON.Vector3(0.5, 0.2, 0),
		new BABYLON.Vector3(0.4, 0.2, 0),
        new BABYLON.Vector3(0.4, 0.05, 0),
        new BABYLON.Vector3(0.05, 0.1, 0),
		new BABYLON.Vector3(0.05, 0.8, 0),
		new BABYLON.Vector3(0.15, 0.9, 0)
	];
	
	//Create lathed fountain
	const fountain = BABYLON.MeshBuilder.CreateLathe("fountain", {shape: fountainOutline, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
    fountain.position.x = -4;
    fountain.position.z = -6;
      
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb");

    return scene;
};
    `;
  
    //Create a basic particle system as water spray.
    static c58 = 
    `
    const createScene = function () {
	const scene = new BABYLON.Scene(engine);

	const camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 2, 70, BABYLON.Vector3.Zero());
	camera.attachControl(canvas, true);

	const light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0));

	const fountainProfile = [
		new BABYLON.Vector3(0, 0, 0),
		new BABYLON.Vector3(10, 0, 0),
        new BABYLON.Vector3(10, 4, 0),
		new BABYLON.Vector3(8, 4, 0),
        new BABYLON.Vector3(8, 1, 0),
        new BABYLON.Vector3(1, 2, 0),
		new BABYLON.Vector3(1, 15, 0),
		new BABYLON.Vector3(3, 17, 0)
	];
	
	//Create lathe
	const fountain = BABYLON.MeshBuilder.CreateLathe("fountain", {shape: fountainProfile, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
	fountain.position.y = -5;
    
    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 5000, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("textures/flare.png", scene);

    // Where the particles come from
    particleSystem.emitter = new BABYLON.Vector3(0, 10, 0); // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.5;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 2;
    particleSystem.maxLifeTime = 3.5;

    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(-2, 8, 2);
    particleSystem.direction2 = new BABYLON.Vector3(2, 8, -2);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.updateSpeed = 0.025;

    // Start the particle system
    particleSystem.start();


	return scene;
}
    `;

    //Start and stop a particle system on click.
    static c59 = 
    `
    const createScene = function () {
	const scene = new BABYLON.Scene(engine);

	const camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 2, 70, BABYLON.Vector3.Zero());
	camera.attachControl(canvas, true);
	const light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 1, 0));

    //Switch fountain on and off
    let switched = false;
    const pointerDown = (mesh) => {
        if (mesh === fountain) {
            switched = !switched;
            if(switched) {
                // Start the particle system
                particleSystem.start();
            }
            else {
                // Stop the particle system
                particleSystem.stop();
            }
        }

    }

    scene.onPointerObservable.add((pointerInfo) => {      		
        switch (pointerInfo.type) {
			case BABYLON.PointerEventTypes.POINTERDOWN:
				if(pointerInfo.pickInfo.hit) {
                    pointerDown(pointerInfo.pickInfo.pickedMesh)
                }
				break;
        }
    });

	const fountainProfile = [
		new BABYLON.Vector3(0, 0, 0),
		new BABYLON.Vector3(10, 0, 0),
        new BABYLON.Vector3(10, 4, 0),
		new BABYLON.Vector3(8, 4, 0),
        new BABYLON.Vector3(8, 1, 0),
        new BABYLON.Vector3(1, 2, 0),
		new BABYLON.Vector3(1, 15, 0),
		new BABYLON.Vector3(3, 17, 0)
	];
	
	//Create lathe
	const fountain = BABYLON.MeshBuilder.CreateLathe("fountain", {shape: fountainProfile, sideOrientation: BABYLON.Mesh.DOUBLESIDE}, scene);
	fountain.position.y = -6;

    
    // Create a particle system
    var particleSystem = new BABYLON.ParticleSystem("particles", 5000, scene);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("textures/flare.png", scene);

    // Where the particles come from
    particleSystem.emitter = new BABYLON.Vector3(0, 10, 0); // the starting object, the emitter
    particleSystem.minEmitBox = new BABYLON.Vector3(-1, 0, 0); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(1, 0, 0); // To...

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);
    particleSystem.colorDead = new BABYLON.Color4(0, 0, 0.2, 0.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.1;
    particleSystem.maxSize = 0.5;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 2;
    particleSystem.maxLifeTime = 3.5;

    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(-2, 8, 2);
    particleSystem.direction2 = new BABYLON.Vector3(2, 8, -2);

    // Angular speed, in radians
    particleSystem.minAngularSpeed = 0;
    particleSystem.maxAngularSpeed = Math.PI;

    // Speed
    particleSystem.minEmitPower = 1;
    particleSystem.maxEmitPower = 3;
    particleSystem.updateSpeed = 0.025;

    


	return scene;
}
    `;

    //Add the fountain to the village.
    static c60 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 1.5, Math.PI / 2.2, 15, new BABYLON.Vector3(0, 0, 0));
    camera.upperBetaLimit = Math.PI / 2.2;
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    //Switch fountain on and off
    let switched = false;
    const pointerDown = (mesh) => {
        if (mesh === fountain) {
            switched = !switched;
            if(switched) {
                // Start the particle system
                particleSystem.start();
            }
            else {
                // Stop the particle system
                particleSystem.stop();
            }
        }

    }

    scene.onPointerObservable.add((pointerInfo) => {      		
        switch (pointerInfo.type) {
			case BABYLON.PointerEventTypes.POINTERDOWN:
				if(pointerInfo.pickInfo.hit) {
                    pointerDown(pointerInfo.pickInfo.pickedMesh)
                }
				break;
        }
    });
    
    // Create a particle system
    const particleSystem = new BABYLON.ParticleSystem("particles", 5000);

    //Texture of each particle
    particleSystem.particleTexture = new BABYLON.Texture("textures/flare.png");

    // Where the particles come from
    particleSystem.emitter = new BABYLON.Vector3(-4, 0.8, -6); // emitted from the top of the fountain
    particleSystem.minEmitBox = new BABYLON.Vector3(-0.01, 0, -0.01); // Starting all from
    particleSystem.maxEmitBox = new BABYLON.Vector3(0.01, 0, 0.01); // To...

    // Colors of all particles
    particleSystem.color1 = new BABYLON.Color4(0.7, 0.8, 1.0, 1.0);
    particleSystem.color2 = new BABYLON.Color4(0.2, 0.5, 1.0, 1.0);

    // Size of each particle (random between...
    particleSystem.minSize = 0.01;
    particleSystem.maxSize = 0.05;

    // Life time of each particle (random between...
    particleSystem.minLifeTime = 0.3;
    particleSystem.maxLifeTime = 1.5;

    // Emission rate
    particleSystem.emitRate = 1500;

    // Blend mode : BLENDMODE_ONEONE, or BLENDMODE_STANDARD
    particleSystem.blendMode = BABYLON.ParticleSystem.BLENDMODE_ONEONE;

    // Set the gravity of all particles
    particleSystem.gravity = new BABYLON.Vector3(0, -9.81, 0);

    // Direction of each particle after it has been emitted
    particleSystem.direction1 = new BABYLON.Vector3(-1, 8, 1);
    particleSystem.direction2 = new BABYLON.Vector3(1, 8, -1);

    // Power and speed
    particleSystem.minEmitPower = 0.2;
    particleSystem.maxEmitPower = 0.6;
    particleSystem.updateSpeed = 0.01;

    const fountainProfile = [
		new BABYLON.Vector3(0, 0, 0),
		new BABYLON.Vector3(0.5, 0, 0),
        new BABYLON.Vector3(0.5, 0.2, 0),
		new BABYLON.Vector3(0.4, 0.2, 0),
        new BABYLON.Vector3(0.4, 0.05, 0),
        new BABYLON.Vector3(0.05, 0.1, 0),
		new BABYLON.Vector3(0.05, 0.8, 0),
		new BABYLON.Vector3(0.15, 0.9, 0)
	];
	
	//Create lathed fountain
	const fountain = BABYLON.MeshBuilder.CreateLathe("fountain", {shape: fountainProfile, sideOrientation: BABYLON.Mesh.DOUBLESIDE});
    fountain.position.x = -4;
    fountain.position.z = -6;
    
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb");

    return scene;
};
    `;
    
    //Create a basic streetlight shape and attach a spotlight.
    static c61 = 
    `
    var createScene = function () {
	const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 2, Math.PI / 2.2, 50, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
	const light = new BABYLON.HemisphericLight("hemi", new BABYLON.Vector3(0, 50, 0));
    light.intensity = 0.5

    //add a spotlight and later after a mesh lamp post and a bulb have been created
    //then will make the post a parent to the bulb and 
    //the bulb to the parent
    const lampLight = new BABYLON.SpotLight("lampLight", BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, -1, 0), Math.PI, 1, scene);
    lampLight.diffuse = BABYLON.Color3.Yellow();

	//shape to extrude
	const lampShape = [];
    for(let i = 0; i < 20; i++) {
        lampShape.push(new BABYLON.Vector3(Math.cos(i * Math.PI / 10), Math.sin(i * Math.PI / 10), 0));
    }
	lampShape.push(lampShape[0]); //close shape

	//extrusion path
    const lampPath = [];
	lampPath.push(new BABYLON.Vector3(0, 0, 0));
	lampPath.push(new BABYLON.Vector3(0, 10, 0));
    for(let i = 0; i < 20; i++) {
        lampPath.push(new BABYLON.Vector3(1 + Math.cos(Math.PI - i * Math.PI / 40), 10 + Math.sin(Math.PI - i * Math.PI / 40), 0));
    }
    lampPath.push(new BABYLON.Vector3(3, 11, 0));

    const yellowMat = new BABYLON.StandardMaterial("yellowMat");
    yellowMat.emissiveColor = BABYLON.Color3.Yellow();

	//extrude lamp
	const lamp = BABYLON.MeshBuilder.ExtrudeShape("lamp", {cap: BABYLON.Mesh.CAP_END, shape: lampShape, path: lampPath, scale: 0.5});
	
    //add bulb
    const bulb = BABYLON.MeshBuilder.CreateSphere("bulb", {diameterX: 1.5, diameterZ: 0.8});
    
    bulb.material = yellowMat;
    bulb.parent = lamp;
    bulb.position.x = 2;
    bulb.position.y = 10.5;

    lampLight.parent = bulb;

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:50, height: 50})

	return scene;
}
    `;

    //Add street lights to the village and adjust the lighting.
    static c62 = `
    const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2.2, Math.PI / 2.2, 15, new BABYLON.Vector3(0, 0, 0));
    camera.upperBetaLimit = Math.PI / 2.2;
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    light.intensity = 0.1;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "lamp.babylon").then(() =>{
        const lampLight = new BABYLON.SpotLight("lampLight", BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, -1, 0), 0.8 * Math.PI, 0.01, scene);
        lampLight.diffuse = BABYLON.Color3.Yellow();
        lampLight.parent = scene.getMeshByName("bulb")

        const lamp = scene.getMeshByName("lamp");
        lamp.position = new BABYLON.Vector3(2, 0, 2); 
        lamp.rotation = BABYLON.Vector3.Zero();
        lamp.rotation.y = -Math.PI / 4;

        lamp3 = lamp.clone("lamp3");
        lamp3.position.z = -8;

        lamp1 = lamp.clone("lamp1");
        lamp1.position.x = -8;
        lamp1.position.z = 1.2;
        lamp1.rotation.y = Math.PI / 2;

        lamp2 = lamp1.clone("lamp2");
        lamp2.position.x = -2.7;
        lamp2.position.z = 0.8;
        lamp2.rotation.y = -Math.PI / 2;

    });
    
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb").then(() => {
        scene.getMeshByName("ground").material.maxSimultaneousLights = 5;
    });
    
    return scene;
};
    `;

    //Add a gui slider that controls the lighting in the village.
    
    static c63 = 
    `
    const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2.2, Math.PI / 2.2, 15, new BABYLON.Vector3(0, 0, 0));
    camera.upperBetaLimit = Math.PI / 2.2;
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    light.intensity = 1;

    // GUI
    const adt = BABYLON.GUI.AdvancedDynamicTexture.CreateFullscreenUI("UI");

    const panel = new BABYLON.GUI.StackPanel();
    panel.width = "220px";
    panel.top = "-25px";
    panel.horizontalAlignment = BABYLON.GUI.Control.HORIZONTAL_ALIGNMENT_RIGHT;
    panel.verticalAlignment = BABYLON.GUI.Control.VERTICAL_ALIGNMENT_BOTTOM;
    adt.addControl(panel);

    const header = new BABYLON.GUI.TextBlock();
    header.text = "Night to Day";
    header.height = "30px";
    header.color = "white";
    panel.addControl(header); 

    const slider = new BABYLON.GUI.Slider();
    slider.minimum = 0;
    slider.maximum = 1;
    slider.borderColor = "black";
    slider.color = "gray";
    slider.background = "white";
    slider.value = 1;
    slider.height = "20px";
    slider.width = "200px";
    slider.onValueChangedObservable.add((value) => {
        if (light) {
            light.intensity = value;
        }
    });
    panel.addControl(slider);
    
    

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "lamp.babylon").then(() =>{
        const lampLight = new BABYLON.SpotLight("lampLight", BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, -1, 0), 0.8 * Math.PI, 0.01, scene);
        lampLight.diffuse = BABYLON.Color3.Yellow();
        lampLight.parent = scene.getMeshByName("bulb")

        const lamp = scene.getMeshByName("lamp");
        lamp.position = new BABYLON.Vector3(2, 0, 2); 
        lamp.rotation = BABYLON.Vector3.Zero();
        lamp.rotation.y = -Math.PI / 4;

        lamp3 = lamp.clone("lamp3");
        lamp3.position.z = -8;

        lamp1 = lamp.clone("lamp1");
        lamp1.position.x = -8;
        lamp1.position.z = 1.2;
        lamp1.rotation.y = Math.PI / 2;

        lamp2 = lamp1.clone("lamp2");
        lamp2.position.x = -2.7;
        lamp2.position.z = 0.8;
        lamp2.rotation.y = -Math.PI / 2;

    });
    
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb").then(() => {
        scene.getMeshByName("ground").material.maxSimultaneousLights = 5;
    });
    
    return scene;
};
    `;

    //Set up a scene for shadows with the shadow generator.
    static c64 = 
    `
    var createScene = function (engine) {
    const  scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("Camera", -3 * Math.PI / 4, Math.PI / 3, 50, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);
    
    const  light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, 1), scene);
    light.position = new BABYLON.Vector3(0, 15, -30);

    var ground = BABYLON.Mesh.CreateGround("ground", 100, 100, 1, scene, false);
    ground.receiveShadows = true;

    // Shadow generator
    const shadowGenerator = new BABYLON.ShadowGenerator(1024, light);
        
    BABYLON.SceneLoader.ImportMesh("him", "/scenes/Dude/", "Dude.babylon", scene, function (newMeshes2, particleSystems2, skeletons2) {
        var dude = newMeshes2[0];
        dude.scaling = new BABYLON.Vector3(0.2, 0.2, 0.2);
            
        //add dude, true means add children as well
        shadowGenerator.addShadowCaster(dude, true);
                
        scene.beginAnimation(skeletons2[0], 0, 100, true);
    });

    return scene;
};
    `;

    //Adding basic shadows to the village
    static c65 = `
    const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", 0, Math.PI / 4, 15, new BABYLON.Vector3(0, 0, 0));
    camera.upperBetaLimit = Math.PI / 2.2;
    camera.attachControl(canvas, true);

    const  light = new BABYLON.DirectionalLight("dir01", new BABYLON.Vector3(0, -1, 1), scene);
    light.position = new BABYLON.Vector3(0, 50, -100);

    // Shadow generator
    const shadowGenerator = new BABYLON.ShadowGenerator(1024, light);

    const walk = function (turn, dist) {
        this.turn = turn;
        this.dist = dist;
    }
    
    const track = [];
    track.push(new walk(86, 7));
    track.push(new walk(-85, 14.8));
    track.push(new walk(-93, 16.5));
    track.push(new walk(48, 25.5));
    track.push(new walk(-112, 30.5));
    track.push(new walk(-72, 33.2));
    track.push(new walk(42, 37.5));
    track.push(new walk(-98, 45.2));
    track.push(new walk(0, 47));


    // Dude
    BABYLON.SceneLoader.ImportMeshAsync("him", "/scenes/Dude/", "Dude.babylon", scene).then((result) => {
        const dude = result.meshes[0];
        dude.scaling = new BABYLON.Vector3(0.008, 0.008, 0.008);

        shadowGenerator.addShadowCaster(dude, true);

        dude.position = new BABYLON.Vector3(-6, 0, 0);
        dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(-95), BABYLON.Space.LOCAL);
        const startRotation = dude.rotationQuaternion.clone();    
            
        scene.beginAnimation(result.skeletons[0], 0, 100, true, 1.0);

        let distance = 0;
        let step = 0.01;
        let p = 0;

        scene.onBeforeRenderObservable.add(() => {
		    dude.movePOV(0, 0, step);
            distance += step;
              
            if (distance > track[p].dist) {
                    
                dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(track[p].turn), BABYLON.Space.LOCAL);
                p +=1;
                p %= track.length; 
                if (p === 0) {
                    distance = 0;
                    dude.position = new BABYLON.Vector3(-6, 0, 0);
                    dude.rotationQuaternion = startRotation.clone();
                }
            }
			
        })
    });
    
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:150}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb").then(() => {
        scene.getMeshByName("ground").receiveShadows = true;
    });

    return scene;
};
    `;
    
    //Parent the camera to a character for an over the shoulder angle.
    static c66 = `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", Math.PI / 2, Math.PI / 2.5, 150, new BABYLON.Vector3(0, 60, 0));
    camera.upperBetaLimit = Math.PI / 2.2;
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const walk = function (turn, dist) {
        this.turn = turn;
        this.dist = dist;
    }
    
    const track = [];
    track.push(new walk(86, 7));
    track.push(new walk(-85, 14.8));
    track.push(new walk(-93, 16.5));
    track.push(new walk(48, 25.5));
    track.push(new walk(-112, 30.5));
    track.push(new walk(-72, 33.2));
    track.push(new walk(42, 37.5));
    track.push(new walk(-98, 45.2));
    track.push(new walk(0, 47))

    // Dude
    BABYLON.SceneLoader.ImportMeshAsync("him", "/scenes/Dude/", "Dude.babylon", scene).then((result) => {
        var dude = result.meshes[0];
        dude.scaling = new BABYLON.Vector3(0.008, 0.008, 0.008);
            
        dude.position = new BABYLON.Vector3(-6, 0, 0);
        dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(-95), BABYLON.Space.LOCAL);
        const startRotation = dude.rotationQuaternion.clone();    

        camera.parent = dude;
        scene.beginAnimation(result.skeletons[0], 0, 100, true, 1.0);

        let distance = 0;
        let step = 0.015;
        let p = 0;

        scene.onBeforeRenderObservable.add(() => {
		    dude.movePOV(0, 0, step);
            distance += step;
              
            if (distance > track[p].dist) {
                    
                dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(track[p].turn), BABYLON.Space.LOCAL);
                p +=1;
                p %= track.length; 
                if (p === 0) {
                    distance = 0;
                    dude.position = new BABYLON.Vector3(-6, 0, 0);
                    dude.rotationQuaternion = startRotation.clone();
                }
            }
			
        })
    });

    const spriteManagerTrees = new BABYLON.SpriteManager("treesManager", "textures/palm.png", 2000, {width: 512, height: 1024}, scene);

    //We create trees at random positions
    for (let i = 0; i < 500; i++) {
        const tree = new BABYLON.Sprite("tree", spriteManagerTrees);
        tree.position.x = Math.random() * (-30);
        tree.position.z = Math.random() * 20 + 8;
        tree.position.y = 0.5;
    }

    for (let i = 0; i < 500; i++) {
        const tree = new BABYLON.Sprite("tree", spriteManagerTrees);
        tree.position.x = Math.random() * (25) + 7;
        tree.position.z = Math.random() * -35  + 8;
        tree.position.y = 0.5;
    }
    
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:100}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb");
    return scene;
};
    `;

    // Use the follow cam to follow the character around the village.
    static c67 = `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    // This creates and initially positions a follow camera 	
    const camera = new BABYLON.FollowCamera("FollowCam", new BABYLON.Vector3(-6, 0, 0), scene);
	
	//The goal distance of camera from target
	camera.radius = 1;
	
	// The goal height of camera above local oriin (centre) of target
	camera.heightOffset = 8;
	
	// The goal rotation of camera around local origin (centre) of target in x y plane
	camera.rotationOffset = 0;
	
	//Acceleration of camera in moving from current to goal position
	camera.cameraAcceleration = 0.005
	
	//The speed at which acceleration is halted 
	camera.maxCameraSpeed = 10
	
	//camera.target is set after the target's creation
    
	// This attaches the camera to the canvas
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const walk = function (turn, dist) {
        this.turn = turn;
        this.dist = dist;
    }
    
    const track = [];
    track.push(new walk(86, 7));
    track.push(new walk(-85, 14.8));
    track.push(new walk(-93, 16.5));
    track.push(new walk(48, 25.5));
    track.push(new walk(-112, 30.5));
    track.push(new walk(-72, 33.2));
    track.push(new walk(42, 37.5));
    track.push(new walk(-98, 45.2));
    track.push(new walk(0, 47))

    // Dude
    BABYLON.SceneLoader.ImportMeshAsync("him", "/scenes/Dude/", "Dude.babylon", scene).then((result) => {
        var dude = result.meshes[0];
        dude.scaling = new BABYLON.Vector3(0.008, 0.008, 0.008);
            
        dude.position = new BABYLON.Vector3(-6, 0, 0);
        dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(-95), BABYLON.Space.LOCAL);
        const startRotation = dude.rotationQuaternion.clone();    

        camera.lockedTarget = dude;
        scene.beginAnimation(result.skeletons[0], 0, 100, true, 1.0);

        let distance = 0;
        let step = 0.015;
        let p = 0;

        scene.onBeforeRenderObservable.add(() => {
		    dude.movePOV(0, 0, step);
            distance += step;
              
            if (distance > track[p].dist) {
                    
                dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(track[p].turn), BABYLON.Space.LOCAL);
                p +=1;
                p %= track.length; 
                if (p === 0) {
                    distance = 0;
                    dude.position = new BABYLON.Vector3(-6, 0, 0);
                    dude.rotationQuaternion = startRotation.clone();
                }
            }
			
        })
    });

    const spriteManagerTrees = new BABYLON.SpriteManager("treesManager", "textures/palm.png", 2000, {width: 512, height: 1024}, scene);

    //We create trees at random positions
    for (let i = 0; i < 500; i++) {
        const tree = new BABYLON.Sprite("tree", spriteManagerTrees);
        tree.position.x = Math.random() * (-30);
        tree.position.z = Math.random() * 20 + 8;
        tree.position.y = 0.5;
    }

    for (let i = 0; i < 500; i++) {
        const tree = new BABYLON.Sprite("tree", spriteManagerTrees);
        tree.position.x = Math.random() * (25) + 7;
        tree.position.z = Math.random() * -35  + 8;
        tree.position.y = 0.5;
    }
    
    //Skybox
    const skybox = BABYLON.MeshBuilder.CreateBox("skyBox", {size:100}, scene);
	  const skyboxMaterial = new BABYLON.StandardMaterial("skyBox", scene);
	  skyboxMaterial.backFaceCulling = false;
	  skyboxMaterial.reflectionTexture = new BABYLON.CubeTexture("textures/skybox", scene);
	  skyboxMaterial.reflectionTexture.coordinatesMode = BABYLON.Texture.SKYBOX_MODE;
	  skyboxMaterial.diffuseColor = new BABYLON.Color3(0, 0, 0);
	  skyboxMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
	  skybox.material = skyboxMaterial;

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "valleyvillage.glb");

    return scene;
};
    `;

    static d68 = `
    const xr = scene.createDefaultXRExperienceAsync();
    `;

    static c69 = ``;
    static c70 = ``;
    
    static c71 = ``;
    static c72 = ``;
    static c73 = ``;
    static c74 = ``;
    static c75 = ``;
    
}