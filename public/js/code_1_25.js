class Code_1_25{
	
    static c1 = 
    `var createScene = function () {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(engine);
    
        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
    
        // Our built-in 'ground' shape.
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
    
        return scene;
    }; `; 
    
    static c2 = 
    `
    var createScene = function () {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(engine);
    
        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
    
        // Our built-in 'ground' shape.
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
        let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        groundMaterial.diffuseColor = BABYLON.Color3.Red();
        ground.material = groundMaterial;
    
        return scene;
    };
    `;
    
    static c3 = 
    `
    var createScene = function () {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(engine);
    
        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
    
        // Our built-in 'ground' shape.
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
        let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        let groundTexture = new BABYLON.Texture(Assets.textures.checkerboard_basecolor_png.path, scene);
        groundMaterial.diffuseColor = BABYLON.Color3.Red();
        groundMaterial.diffuseTexture = groundTexture;
        ground.material = groundMaterial;
    
        return scene;
    };
    `;
    
    
    
    static c4 = 
    `
    var createScene = function () {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(engine);
    
        // This creates and positions a free camera (non-mesh)
        var camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
    
        // Our built-in 'ground' shape.
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
        let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        ground.material = groundMaterial;
        let groundTexture = new BABYLON.Texture(Assets.textures.checkerboard_basecolor_png.path, scene);
        groundMaterial.diffuseColor = BABYLON.Color3.Red();
        ground.material.diffuseTexture = groundTexture;
    
        BABYLON.SceneLoader.ImportMesh("", Assets.meshes.Yeti.rootUrl, Assets.meshes.Yeti.filename, scene, function(newMeshes){
            newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        });
    
        return scene;
    };
    `;
    
     static c5 = 
    `
    var createScene = function () {
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(engine);
    
        var camera = new BABYLON.ArcRotateCamera("camera", BABYLON.Tools.ToRadians(90), BABYLON.Tools.ToRadians(65), 10, BABYLON.Vector3.Zero(), scene);
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
    
        // Our built-in 'ground' shape.
        var ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
        let groundMaterial = new BABYLON.StandardMaterial("Ground Material", scene);
        ground.material = groundMaterial;
        let groundTexture = new BABYLON.Texture(Assets.textures.checkerboard_basecolor_png.path, scene);
        groundMaterial.diffuseColor = BABYLON.Color3.Red();
        ground.material.diffuseTexture = groundTexture;
    
        BABYLON.SceneLoader.ImportMesh("", Assets.meshes.Yeti.rootUrl, Assets.meshes.Yeti.filename, scene, function(newMeshes){
            newMeshes[0].scaling = new BABYLON.Vector3(0.1, 0.1, 0.1);
        });
    
        return scene;
    };
    `;
    
    //---
    
    static c6 = 
    `
    const createScene = function () {
        // This creates a basic Babylon Scene object (non-mesh)
        const scene = new BABYLON.Scene(engine);
    
        // This creates and positions a free camera (non-mesh)
        const camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
    
        // This targets the camera to scene origin
        camera.setTarget(BABYLON.Vector3.Zero());
    
        // This attaches the camera to the canvas
        camera.attachControl(canvas, true);
    
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0), scene);
    
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
    
        // Our built-in 'sphere' shape.
        const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 2, segments: 32}, scene);
    
        // Move the sphere upward 1/2 its height
        sphere.position.y = 1;
    
        // Our built-in 'ground' shape.
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width: 6, height: 6}, scene);
    
        return scene;
    };
    `;
    
    //---
    
    static c7 = 
    `
    const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
    
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    
        const box = BABYLON.MeshBuilder.CreateBox("box", {});
    
        return scene;
    };
    `;
    
    //---
    
    static h8 = 
    `
    <html lang="en">
        <body>
            <script type="module" src="https://cdn.jsdelivr.net/npm/@babylonjs/viewer@preview/dist/babylon-viewer.esm.min.js"></script>
            <babylon-viewer source="https://playground.babylonjs.com/scenes/BoomBox.glb"></babylon-viewer>
        </body>
    </html>
    `;
    //---
    
    //First Import of a Model
    
    //Load a model into a scene.
    static c9 = 
    `
    const createScene = function () {
        
        const scene = new BABYLON.Scene(engine);
    
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0)); 
    
        BABYLON.SceneLoader.ImportMeshAsync(["ground", "semi_house"], "https://assets.babylonjs.com/meshes/", "both_houses_scene.babylon");
    
        return scene;
    };
    `;
    
    // Load multiple models into a scene.
    static c10 = 
    `const createScene = function () {
        
        const scene = new BABYLON.Scene(engine);
    
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
      
    
        BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "both_houses_scene.babylon").then((result) => {
            const house1 = scene.getMeshByName("detached_house");
            house1.position.y = 2;
            const house2 = result.meshes[2];
            house2.position.y = 1;
        });
    
        return scene;
    };
    `
    ;
    
    // Load a model into a scene and modify their position after loading completes.
    static c11 = `
    const createScene = function () {
        
        const scene = new BABYLON.Scene(engine);
    
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
      
    
        BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "both_houses_scene.babylon").then((result) => {
            const house1 = scene.getMeshByName("detached_house");
            house1.position.y = 2;
            const house2 = result.meshes[2];
            house2.position.y = 1;
        });
    
        return scene;
    };
    `;
    
    
    //---
    
    // First App on the Web
    
    // 
    static h12 = `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Babylon Template</title>
    
        <style>
          html,
          body {
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
    
          #renderCanvas {
            width: 100%;
            height: 100%;
            touch-action: none;
          }
        </style>
    
        <script src="https://cdn.babylonjs.com/babylon.js"></script>
        <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
        <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
      </head>
    
      <body>
        <canvas id="renderCanvas" touch-action="none"></canvas>
        <!-- touch-action="none" for best results from PEP -->
    
        <script>
          const canvas = document.getElementById("renderCanvas"); // Get the canvas element
          const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
    
          // Add your code here matching the playground format
          const createScene = function () {
            const scene = new BABYLON.Scene(engine);
    
            BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "box.babylon");
    
            const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
            camera.attachControl(canvas, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
            return scene;
          };
    
          const scene = createScene(); //Call the createScene function
    
          // Register a render loop to repeatedly render the scene
          engine.runRenderLoop(function () {
            scene.render();
          });
    
          // Watch for browser/canvas resize events
          window.addEventListener("resize", function () {
            engine.resize();
          });
        </script>
      </body>
    </html>
    `;
    
    static h13 = 
    `
    <!DOCTYPE html>
    <html xmlns="http://www.w3.org/1999/xhtml">
      <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <title>Babylon Template</title>
    
        <style>
          html,
          body {
            overflow: hidden;
            width: 100%;
            height: 100%;
            margin: 0;
            padding: 0;
          }
    
          #renderCanvas {
            width: 100%;
            height: 100%;
            touch-action: none;
          }
        </style>
    
        <script src="https://cdn.babylonjs.com/babylon.js"></script>
        <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
        <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
      </head>
    
      <body>
        <canvas id="renderCanvas" touch-action="none"></canvas>
        <!-- touch-action="none" for best results from PEP -->
    
        <script>
          const canvas = document.getElementById("renderCanvas"); // Get the canvas element
          const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine
    
          // Add your code here matching the playground format
          const createScene = function () {
            const scene = new BABYLON.Scene(engine);
    
            BABYLON.MeshBuilder.CreateBox("box", {});
    
            const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
            camera.attachControl(canvas, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
            return scene;
          };
    
          const scene = createScene(); //Call the createScene function
    
          // Register a render loop to repeatedly render the scene
          engine.runRenderLoop(function () {
            scene.render();
          });
    
          // Watch for browser/canvas resize events
          window.addEventListener("resize", function () {
            engine.resize();
          });
        </script>
      </body>
    </html>
    `;
    
    //---
    
    //Build A Village
    
    /// Grounding the World
    
    // A playground showing how to add a basic ground plane to your scene.
    static c14 = 
    `const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
    
        return scene;
    }
    `;
    
    //A playground showing how to adjust the position of the box.
    static c15 = 
    `
    const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        box.position.y = 0.5;
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
    
        return scene;
    }
    `;
    
    //---
    
    //Adding Sound
    
    //A playground showing how easy it is to add sound to your scene.
    static c16 = 
    `
    var createScene = function () {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        // Load the sound and play it automatically once ready
        const music = new BABYLON.Sound("cello", "sounds/cellolong.wav", scene, null, { loop: true, autoplay: true });
    
        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        box.position.y = 0.5;
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
    
        return scene;
    };
    `;
    //Set an interval to play a sound every 3 seconds.
    static c17 = 
    `
    var createScene = function () {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        // Load the sound, give it time to load and play it every 3 seconds
       const bounce = new BABYLON.Sound("bounce", "sounds/bounce.wav", scene);
       setInterval(() => bounce.play(), 3000);
    
        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        box.position.y = 0.5;
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
    
            return scene;
    };
    `;
    
    //---
    
    //Place and Scale a Mesh
    
    //A playground demonstrating different ways to position a mesh in your scene.
    static c18 = 
    `
    const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        const box1 = BABYLON.MeshBuilder.CreateBox("box1", {width: 2, height: 1.5, depth: 3});
        box1.position.y = 0.75;
    
        const box2 = BABYLON.MeshBuilder.CreateBox("box2", {});
        box2.scaling.x = 2;
        box2.scaling.y = 1.5;
        box2.scaling.z = 3;
        box2.position = new BABYLON.Vector3(-3, 0.75, 0);
    
        const box3 = BABYLON.MeshBuilder.CreateBox("box3", {});
        box3.scaling = new BABYLON.Vector3(2, 1.5, 3);
        box3.position.x  = 3;
        box3.position.y  = 0.75;
        box3.position.z  = 0;
    
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
    
        return scene;
    }
    `;
    // A playground demonstrating how to rotate a mesh in your scene.
    static c19 = 
    `const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        box.position.y = 0.5;
        box.rotation.y = Math.PI / 4;
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
    
        return scene;
    }
    `;
    
    //----
    
    //A Basic House
    
    // playground demonstrating how to add a 'prism' roof to your house.
    static c20 = 
    `const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    
        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        box.position.y = 0.5;
        const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
        roof.scaling.x = 0.75;
        roof.rotation.z = Math.PI / 2;
        roof.position.y = 1.22;
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
    
        return scene;
    }
    `;
    
    //Add Texture
    //A playground demonstrating how to add materials to the objects in your scene.
    
    static c21 = 
    `
    const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        /**** Materials *****/
        //color
        const groundMat = new BABYLON.StandardMaterial("groundMat");
        groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0)
    
        //texture
        const roofMat = new BABYLON.StandardMaterial("roofMat");
        roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");
        const boxMat = new BABYLON.StandardMaterial("boxMat");
        boxMat.diffuseTexture = new BABYLON.Texture("https://www.babylonjs-playground.com/textures/floor.png")
    
        /**** World Objects *****/
        const box = BABYLON.MeshBuilder.CreateBox("box", {});
        box.material = boxMat;
        box.position.y = 0.5;
        const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
        roof.material = roofMat;
        roof.scaling.x = 0.75;
        roof.rotation.z = Math.PI / 2;
        roof.position.y = 1.22;
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
        ground.material = groundMat;
    
        return scene;
    }
    `;
    
    
    //A playground demonstrating how to add materials to individual faces of the objects in your scene
    static c22 = 
    `
    const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        /**** Materials *****/
        //color
        const groundMat = new BABYLON.StandardMaterial("groundMat");
        groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0)
    
        //texture
        const roofMat = new BABYLON.StandardMaterial("roofMat");
        roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");
        const boxMat = new BABYLON.StandardMaterial("boxMat");
        boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png")
    
    
        //options parameter to set different images on each side
        const faceUV = [];
        faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
        // top 4 and bottom 5 not seen so not set
        
    
        /**** World Objects *****/
        const box = BABYLON.MeshBuilder.CreateBox("box", {faceUV: faceUV, wrap: true});
        box.material = boxMat;
        box.position.y = 0.5;
        const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
        roof.material = roofMat;
        roof.scaling.x = 0.75;
        roof.rotation.z = Math.PI / 2;
        roof.position.y = 1.22;
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
        ground.material = groundMat;
    
        return scene;
    };
    `;
    
    //A playground demonstrating how to add reuse materials to apply on individual faces of the objects in your scene.
    static c23 = 
    `
    const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        /**** Materials *****/
        //color
        const groundMat = new BABYLON.StandardMaterial("groundMat");
        groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0)
    
        //texture
        const roofMat = new BABYLON.StandardMaterial("roofMat");
        roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");
        const boxMat = new BABYLON.StandardMaterial("boxMat");
        boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/semihouse.png")
    
    
        //options parameter to set different images on each side
        const faceUV = [];
        faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side
        // top 4 and bottom 5 not seen so not set
        
    
        /**** World Objects *****/
        const box = BABYLON.MeshBuilder.CreateBox("box", {width: 2, faceUV: faceUV, wrap: true});
        box.material = boxMat;
        box.position.y = 0.5;
        const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
        roof.material = roofMat;
        roof.scaling.x = 0.75;
        roof.scaling.y = 2;
        roof.rotation.z = Math.PI / 2;
        roof.position.y = 1.22;
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
        ground.material = groundMat;
    
        return scene;
    };
    `;
    
    // A playground wrapping mesh-building code into functions for future repeat use.
    static c24 = 
    `
    const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        const ground = buildGround();
        const box = buildBox();
        const roof = buildRoof();
        
        return scene;
    }
    
    /******Build Functions***********/
    const buildGround = () => {
        //color
        const groundMat = new BABYLON.StandardMaterial("groundMat");
        groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
    
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
        ground.material = groundMat;
    }
    
    
    const buildBox = () => {
        //texture
        const boxMat = new BABYLON.StandardMaterial("boxMat");
        boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png")
    
    
        //options parameter to set different images on each side
        const faceUV = [];
        faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
        // top 4 and bottom 5 not seen so not set
    
    
        /**** World Objects *****/
        const box = BABYLON.MeshBuilder.CreateBox("box", {faceUV: faceUV, wrap: true});
        box.material = boxMat;
        box.position.y = 0.5;
    
        return box;
    }
    
    const buildRoof = () => {
        //texture
        const roofMat = new BABYLON.StandardMaterial("roofMat");
        roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");
    
        const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
        roof.material = roofMat;
        roof.scaling.x = 0.75;
        roof.rotation.z = Math.PI / 2;
        roof.position.y = 1.22;
    
        return roof;
    };
    `;
    
    
    //A playground demonstrating how to combine meshes inside of your scene.
    static c25 = 
    `
    const createScene =  () => {
        const scene = new BABYLON.Scene(engine);
    
        /**** Set camera and light *****/
        const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
        camera.attachControl(canvas, true);
        const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
        const ground = buildGround();
        const box = buildBox();
        const roof = buildRoof();
    
        const house = BABYLON.Mesh.MergeMeshes([box, roof]);
        
        return scene;
    }
    
    /******Build Functions***********/
    const buildGround = () => {
        //color
        const groundMat = new BABYLON.StandardMaterial("groundMat");
        groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
    
        const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:10, height:10});
        ground.material = groundMat;
    }
    
    
    const buildBox = () => {
        //texture
        const boxMat = new BABYLON.StandardMaterial("boxMat");
        boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png")
    
    
        //options parameter to set different images on each side
        const faceUV = [];
        faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
        // top 4 and bottom 5 not seen so not set
    
    
        /**** World Objects *****/
        const box = BABYLON.MeshBuilder.CreateBox("box", {faceUV: faceUV, wrap: true});
        box.material = boxMat;
        box.position.y = 0.5;
    
        return box;
    }
    
    const buildRoof = () => {
        //texture
        const roofMat = new BABYLON.StandardMaterial("roofMat");
        roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");
    
        const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
        roof.material = roofMat;
        roof.scaling.x = 0.75;
        roof.rotation.z = Math.PI / 2;
        roof.position.y = 1.22;
    
        return roof;
    };
    `;
    

    
    
    }