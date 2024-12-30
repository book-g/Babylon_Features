class Code_26_50{
    // A playground demonstrating how to combine meshes while preserving material assignments.
    static c26 = 
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

    const house = BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);
    
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
    const boxMat = new BABYLON.StandardMaterial("roofMat");
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
}
    `;

    //A playground expanding the house building function to accept a width of 1 or 2 for a detached or semi-detached house.
    static c27 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    /**** Set camera and light *****/
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 10, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    const ground = buildGround();
    const house = buildHouse(2); //width of house 1 or 2
    
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

const buildHouse = (width) => {
    const box = buildBox(width);
    const roof = buildRoof(width);

    return BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);
}
const buildBox = (width) => {
    //texture
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    if (width == 2) {
       boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/semihouse.png") 
    }
    else {
        boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png");   
    }

    //options parameter to set different images on each side
    const faceUV = [];
    if (width == 2) {
        faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side
    }
    else {
        faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
    }
    // top 4 and bottom 5 not seen so not set

    /**** World Objects *****/
    const box = BABYLON.MeshBuilder.CreateBox("box", {width: width, faceUV: faceUV, wrap: true});
    box.material = boxMat;
    box.position.y = 0.5;

    return box;
}

const buildRoof = (width) => {
    //texture
    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");

    const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
    roof.material = roofMat;
    roof.scaling.x = 0.75;
    roof.scaling.y = width;
    roof.rotation.z = Math.PI / 2;
    roof.position.y = 1.22;

    return roof;
}
    `;
    //A playground demonstrating how to create instances of a 3D object.
    static c28 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    /**** Set camera and light *****/
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    const ground = buildGround();

    const detached_house = buildHouse(1);
    detached_house.rotation.y = -Math.PI / 16;
    detached_house.position.x = -6.8;
    detached_house.position.z = 2.5;

    const semi_house = buildHouse(2);
    semi_house .rotation.y = -Math.PI / 16;
    semi_house.position.x = -4.5;
    semi_house.position.z = 3;

    const places = []; //each entry is an array [house type, rotation, x, z]
    places.push([1, -Math.PI / 16, -6.8, 2.5 ]);
    places.push([2, -Math.PI / 16, -4.5, 3 ]);
    places.push([2, -Math.PI / 16, -1.5, 4 ]);
    places.push([2, -Math.PI / 3, 1.5, 6 ]);
    places.push([2, 15 * Math.PI / 16, -6.4, -1.5 ]);
    places.push([1, 15 * Math.PI / 16, -4.1, -1 ]);
    places.push([2, 15 * Math.PI / 16, -2.1, -0.5 ]);
    places.push([1, 5 * Math.PI / 4, 0, -1 ]);
    places.push([1, Math.PI + Math.PI / 2.5, 0.5, -3 ]);
    places.push([2, Math.PI + Math.PI / 2.1, 0.75, -5 ]);
    places.push([1, Math.PI + Math.PI / 2.25, 0.75, -7 ]);
    places.push([2, Math.PI / 1.9, 4.75, -1 ]);
    places.push([1, Math.PI / 1.95, 4.5, -3 ]);
    places.push([2, Math.PI / 1.9, 4.75, -5 ]);
    places.push([1, Math.PI / 1.9, 4.75, -7 ]);
    places.push([2, -Math.PI / 3, 5.25, 2 ]);
    places.push([1, -Math.PI / 3, 6, 4 ]);

    //Create instances from the first two that were built 
    const houses = [];
    for (let i = 0; i < places.length; i++) {
        if (places[i][0] === 1) {
            houses[i] = detached_house.createInstance("house" + i);
        }
        else {
            houses[i] = semi_house.createInstance("house" + i);
        }
        houses[i].rotation.y = places[i][1];
        houses[i].position.x = places[i][2];
        houses[i].position.z = places[i][3];
    }
    
    return scene;
}

/******Build Functions***********/
const buildGround = () => {
    //color
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:15, height:16});
    ground.material = groundMat;
}

const buildHouse = (width) => {
    const box = buildBox(width);
    const roof = buildRoof(width);

    return BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);
}

const buildBox = (width) => {
    //texture
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    if (width == 2) {
       boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/semihouse.png") 
    }
    else {
        boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png");   
    }

    //options parameter to set different images on each side
    const faceUV = [];
    if (width == 2) {
        faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side
    }
    else {
        faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
    }
    // top 4 and bottom 5 not seen so not set

    /**** World Objects *****/
    const box = BABYLON.MeshBuilder.CreateBox("box", {width: width, faceUV: faceUV, wrap: true});
    box.material = boxMat;
    box.position.y = 0.5;

    return box;
}

const buildRoof = (width) => {
    //texture
    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");

    const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
    roof.material = roofMat;
    roof.scaling.x = 0.75;
    roof.scaling.y = width;
    roof.rotation.z = Math.PI / 2;
    roof.position.y = 1.22;

    return roof;
}
    `;
    // Wrapping the house instancing loop into a function.
    static c29 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    /**** Set camera and light *****/
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    buildDwellings();
    
    return scene;
}

/******Build Functions***********/
const buildDwellings = () => {
    const ground = buildGround();

    const detached_house = buildHouse(1);
    detached_house.rotation.y = -Math.PI / 16;
    detached_house.position.x = -6.8;
    detached_house.position.z = 2.5;

    const semi_house = buildHouse(2);
    semi_house .rotation.y = -Math.PI / 16;
    semi_house.position.x = -4.5;
    semi_house.position.z = 3;

    const places = []; //each entry is an array [house type, rotation, x, z]
    places.push([1, -Math.PI / 16, -6.8, 2.5 ]);
    places.push([2, -Math.PI / 16, -4.5, 3 ]);
    places.push([2, -Math.PI / 16, -1.5, 4 ]);
    places.push([2, -Math.PI / 3, 1.5, 6 ]);
    places.push([2, 15 * Math.PI / 16, -6.4, -1.5 ]);
    places.push([1, 15 * Math.PI / 16, -4.1, -1 ]);
    places.push([2, 15 * Math.PI / 16, -2.1, -0.5 ]);
    places.push([1, 5 * Math.PI / 4, 0, -1 ]);
    places.push([1, Math.PI + Math.PI / 2.5, 0.5, -3 ]);
    places.push([2, Math.PI + Math.PI / 2.1, 0.75, -5 ]);
    places.push([1, Math.PI + Math.PI / 2.25, 0.75, -7 ]);
    places.push([2, Math.PI / 1.9, 4.75, -1 ]);
    places.push([1, Math.PI / 1.95, 4.5, -3 ]);
    places.push([2, Math.PI / 1.9, 4.75, -5 ]);
    places.push([1, Math.PI / 1.9, 4.75, -7 ]);
    places.push([2, -Math.PI / 3, 5.25, 2 ]);
    places.push([1, -Math.PI / 3, 6, 4 ]);

    //Create instances from the first two that were built 
    const houses = [];
    for (let i = 0; i < places.length; i++) {
        if (places[i][0] === 1) {
            houses[i] = detached_house.createInstance("house" + i);
        }
        else {
            houses[i] = semi_house.createInstance("house" + i);
        }
        houses[i].rotation.y = places[i][1];
        houses[i].position.x = places[i][2];
        houses[i].position.z = places[i][3];
    }
}

const buildGround = () => {
    //color
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:15, height:16});
    ground.material = groundMat;
}

const buildHouse = (width) => {
    const box = buildBox(width);
    const roof = buildRoof(width);

    return BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);
}

const buildBox = (width) => {
    //texture
    const boxMat = new BABYLON.StandardMaterial("boxMat");
    if (width == 2) {
       boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/semihouse.png") 
    }
    else {
        boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png");   
    }

    //options parameter to set different images on each side
    const faceUV = [];
    if (width == 2) {
        faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side
    }
    else {
        faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
        faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
        faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
        faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
    }
    // top 4 and bottom 5 not seen so not set

    /**** World Objects *****/
    const box = BABYLON.MeshBuilder.CreateBox("box", {width: width, faceUV: faceUV, wrap: true});
    box.material = boxMat;
    box.position.y = 0.5;

    return box;
}

const buildRoof = (width) => {
    //texture
    const roofMat = new BABYLON.StandardMaterial("roofMat");
    roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");

    const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
    roof.material = roofMat;
    roof.scaling.x = 0.75;
    roof.scaling.y = width;
    roof.rotation.z = Math.PI / 2;
    roof.position.y = 1.22;

    return roof;
}
    `;
    //An example of how to load a .glb of the starting village into your scene.
    static c30 =
    `
    const createScene = () => {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0)); 

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "village.glb");

    return scene;
};
    `;
    
    static h31 = `
<!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>Viewer 1 Example</title>

    <script src="https://cdn.babylonjs.com/viewer/babylon.viewer.js"></script>
    <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <script>
        BabylonViewer.viewerManager.getViewerPromiseById('myViewer').then((viewer) => {    
            viewer.onSceneInitObservable.add(() => {
                viewer.sceneManager.camera.radius = 15; //set camera radius
                viewer.sceneManager.camera.beta = Math.PI / 2.2; //angle of depression 
            });
            viewer.onEngineInitObservable.add((scene) => {
                viewer.loadModel({
                    url: "https://assets.babylonjs.com/meshes/village.glb"
                });
            });
        });
    </script>

    <style>
        body {
            height: 600px;
        }

        #header {
            font-size: 6em;
            padding: 5px;
        }

        .cell {
            width:30%;
            height:40%;
            margin:1%;
            float: left;
            padding: 3px;
            background-color: #BBBBBB;
        }

        @media screen and (max-width: 900px) {

            body {
                height: unset;
            }

            .cell {
                width:unset;
                padding: 0;
                font-size:18px;
            }

            .babylon {
                width:100%;
                margin: 0;
                padding: 8px;
                box-sizing: border-box;
                background: unset;
            }
        }
        
    </style>
</head>
<body>
    <div id = "header">
        Viewer News
    </div>
    <div class= "cell babylon">
        <babylon id = "myViewer" extends = "minimal"></babylon>
    </div>
    <div class = "cell">
        3D graphics refers to the creation and manipulation of computer-generated models that simulate three-dimensional objects. These models can be viewed from different angles and can be manipulated as if they were real objects, even though they only exist within the computer.
    </div>
    <div class= "cell">
        3D graphics refers to the creation and manipulation of computer-generated models that simulate three-dimensional objects. These models can be viewed from different angles and can be manipulated as if they were real objects, even though they only exist within the computer.    </div>
    <div class= "cell">
        3D graphics refers to the creation and manipulation of computer-generated models that simulate three-dimensional objects. These models can be viewed from different angles and can be manipulated as if they were real objects, even though they only exist within the computer.    </div>
    <div class= "cell">
        3D graphics refers to the creation and manipulation of computer-generated models that simulate three-dimensional objects. These models can be viewed from different angles and can be manipulated as if they were real objects, even though they only exist within the computer.    </div>
    <div class= "cell">
        3D graphics refers to the creation and manipulation of computer-generated models that simulate three-dimensional objects. These models can be viewed from different angles and can be manipulated as if they were real objects, even though they only exist within the computer.    </div>

</body>
</html>    
`;
    static h32 = 
    `
    <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Babylon Template</title>

        <style>
            html, body {
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

            #holder {
                width: 80%;
                height: 100%;
                float: left;
            }

            #instructions {
                width: 20%;
                height: 100%;
                float: left;
                background-color: grey;
            }
        </style>

        <script src="https://cdn.babylonjs.com/babylon.js"></script>
        <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
        <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
    </head>

   <body>

	<div id = "holder">
        <canvas id="renderCanvas" touch-action="none"></canvas> <!-- touch-action="none" for best results from PEP -->
    </div>
    <div id = "instructions">
        <br>
        <h2>Instructions</h2>
        <br>
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions
    </div>

	<script>
        const canvas = document.getElementById("renderCanvas"); // Get the canvas element
        const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        // Add your code here matching the playground format
        const createScene = function () {
    
            const scene = new BABYLON.Scene(engine);  

            BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "village.glb");

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

    static c33 = 
    `
    <!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">

    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>Babylon Template</title>

        <style>
            html, body {
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

            #holder {
                width: 80%;
                height: 100%;
                float: left;
            }

            #instructions {
                width: 20%;
                height: 100%;
                float: left;
                background-color: grey;
            }
        </style>

        <script src="https://cdn.babylonjs.com/babylon.js"></script>
        <script src="https://cdn.babylonjs.com/loaders/babylonjs.loaders.min.js"></script>
        <script src="https://code.jquery.com/pep/0.4.3/pep.js"></script>
    </head>

   <body>

	<div id = "holder">
        <canvas id="renderCanvas" touch-action="none"></canvas> <!-- touch-action="none" for best results from PEP -->
    </div>
    <div id = "instructions">
        <br>
        <h2>Instructions</h2>
        <br>
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions
        Instructions Instructions Instructions Instructions Instructions 
        Instructions Instructions Instructions Instructions Instructions
    </div>

	<script>
        const canvas = document.getElementById("renderCanvas"); // Get the canvas element
        const engine = new BABYLON.Engine(canvas, true); // Generate the BABYLON 3D engine

        // Add your code here matching the playground format
        const createScene =  () => {
            const scene = new BABYLON.Scene(engine);
            
            buildDwellings();
            
            /**** Set camera and light *****/
            const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
            camera.attachControl(canvas, true);
            const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
        
            return scene;
        }
        
        /******Build Functions***********/
        const buildDwellings = () => {
            const ground = buildGround();
        
            const detached_house = buildHouse(1);
            detached_house.rotation.y = -Math.PI / 16;
            detached_house.position.x = -6.8;
            detached_house.position.z = 2.5;
        
            const semi_house = buildHouse(2);
            semi_house .rotation.y = -Math.PI / 16;
            semi_house.position.x = -4.5;
            semi_house.position.z = 3;
        
            const places = []; //each entry is an array [house type, rotation, x, z]
            places.push([1, -Math.PI / 16, -6.8, 2.5 ]);
            places.push([2, -Math.PI / 16, -4.5, 3 ]);
            places.push([2, -Math.PI / 16, -1.5, 4 ]);
            places.push([2, -Math.PI / 3, 1.5, 6 ]);
            places.push([2, 15 * Math.PI / 16, -6.4, -1.5 ]);
            places.push([1, 15 * Math.PI / 16, -4.1, -1 ]);
            places.push([2, 15 * Math.PI / 16, -2.1, -0.5 ]);
            places.push([1, 5 * Math.PI / 4, 0, -1 ]);
            places.push([1, Math.PI + Math.PI / 2.5, 0.5, -3 ]);
            places.push([2, Math.PI + Math.PI / 2.1, 0.75, -5 ]);
            places.push([1, Math.PI + Math.PI / 2.25, 0.75, -7 ]);
            places.push([2, Math.PI / 1.9, 4.75, -1 ]);
            places.push([1, Math.PI / 1.95, 4.5, -3 ]);
            places.push([2, Math.PI / 1.9, 4.75, -5 ]);
            places.push([1, Math.PI / 1.9, 4.75, -7 ]);
            places.push([2, -Math.PI / 3, 5.25, 2 ]);
            places.push([1, -Math.PI / 3, 6, 4 ]);
        
            //Create instances from the first two that were built 
            const houses = [];
            for (let i = 0; i < places.length; i++) {
                if (places[i][0] === 1) {
                    houses[i] = detached_house.createInstance("house" + i);
                }
                else {
                    houses[i] = semi_house.createInstance("house" + i);
                }
                houses[i].rotation.y = places[i][1];
                houses[i].position.x = places[i][2];
                houses[i].position.z = places[i][3];
            }
        }
        
        const buildGround = () => {
            //color
            const groundMat = new BABYLON.StandardMaterial("groundMat");
            groundMat.diffuseColor = new BABYLON.Color3(0, 1, 0);
        
            const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:15, height:16});
            ground.material = groundMat;
        }
        
        const buildHouse = (width) => {
            const box = buildBox(width);
            const roof = buildRoof(width);
        
            return BABYLON.Mesh.MergeMeshes([box, roof], true, false, null, false, true);
        }
        
        const buildBox = (width) => {
            //texture
            const boxMat = new BABYLON.StandardMaterial("boxMat");
            if (width == 2) {
               boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/semihouse.png") 
            }
            else {
                boxMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/cubehouse.png");   
            }
        
            //options parameter to set different images on each side
            const faceUV = [];
            if (width == 2) {
                faceUV[0] = new BABYLON.Vector4(0.6, 0.0, 1.0, 1.0); //rear face
                faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.4, 1.0); //front face
                faceUV[2] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //right side
                faceUV[3] = new BABYLON.Vector4(0.4, 0, 0.6, 1.0); //left side
            }
            else {
                faceUV[0] = new BABYLON.Vector4(0.5, 0.0, 0.75, 1.0); //rear face
                faceUV[1] = new BABYLON.Vector4(0.0, 0.0, 0.25, 1.0); //front face
                faceUV[2] = new BABYLON.Vector4(0.25, 0, 0.5, 1.0); //right side
                faceUV[3] = new BABYLON.Vector4(0.75, 0, 1.0, 1.0); //left side
            }
            // top 4 and bottom 5 not seen so not set
        
            /**** World Objects *****/
            const box = BABYLON.MeshBuilder.CreateBox("box", {width: width, faceUV: faceUV, wrap: true});
            box.material = boxMat;
            box.position.y = 0.5;
        
            return box;
        }
        
        const buildRoof = (width) => {
            //texture
            const roofMat = new BABYLON.StandardMaterial("roofMat");
            roofMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/roof.jpg");
        
            const roof = BABYLON.MeshBuilder.CreateCylinder("roof", {diameter: 1.3, height: 1.2, tessellation: 3});
            roof.material = roofMat;
            roof.scaling.x = 0.75;
            roof.scaling.y = width;
            roof.rotation.z = Math.PI / 2;
            roof.position.y = 1.22;
        
            return roof;
        }

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

    //Simple playground to help demonstrate parenting.

    static c34 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);
    
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2.2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);

    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));

    const faceColors = [];
	faceColors[0] = BABYLON.Color3.Blue();
	faceColors[1] = BABYLON.Color3.Teal()
	faceColors[2] = BABYLON.Color3.Red();
	faceColors[3] = BABYLON.Color3.Purple();
	faceColors[4] = BABYLON.Color3.Green();
	faceColors[5] = BABYLON.Color3.Yellow();
 
	const boxParent = BABYLON.MeshBuilder.CreateBox("Box", {faceColors:faceColors});
    const boxChild = BABYLON.MeshBuilder.CreateBox("Box", {size: 0.5, faceColors:faceColors});
    boxChild.setParent(boxParent);
    
    boxChild.position.x = 0;
    boxChild.position.y = 2;
    boxChild.position.z = 0;

    boxChild.rotation.x = Math.PI / 4;
    boxChild.rotation.y = Math.PI / 4;
    boxChild.rotation.z = Math.PI / 4;

    boxParent.position.x = 2;
    boxParent.position.y = 0;
    boxParent.position.z = 0;

    boxParent.rotation.x = 0;
    boxParent.rotation.y = 0;
    boxParent.rotation.z = -Math.PI / 4;
    
    const boxChildAxes = localAxes(1, scene);
    boxChildAxes.parent = boxChild; 
    showAxis(6, scene);
    return scene;
}

/***********Create and Draw Axes**************************************/
const showAxis = (size, scene) => {
	const makeTextPlane = (text, color, size) => {
		const dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 50, scene, true);
		dynamicTexture.hasAlpha = true;
		dynamicTexture.drawText(text, 5, 40, "bold 36px Arial", color , "transparent", true);
        const plane = new BABYLON.MeshBuilder.CreatePlane("TextPlane", {size, updateable: true}, scene);
		plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
		plane.material.backFaceCulling = false;
		plane.material.specularColor = new BABYLON.Color3(0, 0, 0);
		plane.material.diffuseTexture = dynamicTexture;
		return plane;
    };
  
    const axisX = BABYLON.MeshBuilder.CreateLines("axisX", { points: [ 
		new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0), 
		new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
	]});
	axisX.color = new BABYLON.Color3(1, 0, 0);
	const xChar = makeTextPlane("X", "red", size / 10);
	xChar.position = new BABYLON.Vector3(0.9 * size, -0.05 * size, 0);

    const axisY = BABYLON.MeshBuilder.CreateLines("axisY", { points:[
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( -0.05 * size, size * 0.95, 0), 
        new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3( 0.05 * size, size * 0.95, 0)
    ]});
    axisY.color = new BABYLON.Color3(0, 1, 0);
    const yChar = makeTextPlane("Y", "green", size / 10);
    yChar.position = new BABYLON.Vector3(0, 0.9 * size, -0.05 * size);
    
    const axisZ = BABYLON.MeshBuilder.CreateLines("axisZ", { points: [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0 , -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3( 0, 0.05 * size, size * 0.95)
    ]}); 
    axisZ.color = new BABYLON.Color3(0, 0, 1);
    const zChar = makeTextPlane("Z", "blue", size / 10);
    zChar.position = new BABYLON.Vector3(0, 0.05 * size, 0.9 * size);
};
  
/*********************************************************************/

/*******************************Local Axes****************************/
localAxes = (size, scene) => {
    const local_axisX = BABYLON.MeshBuilder.CreateLines("local_axisX", { points: [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, 0.05 * size, 0),
        new BABYLON.Vector3(size, 0, 0), new BABYLON.Vector3(size * 0.95, -0.05 * size, 0)
    ]}, scene);
    local_axisX.color = new BABYLON.Color3(1, 0, 0);

    local_axisY = BABYLON.MeshBuilder.CreateLines("local_axisY", { points: [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(-0.05 * size, size * 0.95, 0),
        new BABYLON.Vector3(0, size, 0), new BABYLON.Vector3(0.05 * size, size * 0.95, 0)
    ]}, scene);
    local_axisY.color = new BABYLON.Color3(0, 1, 0);

    const local_axisZ = BABYLON.MeshBuilder.CreateLines("local_axisZ", { points: [
        new BABYLON.Vector3.Zero(), new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, -0.05 * size, size * 0.95),
        new BABYLON.Vector3(0, 0, size), new BABYLON.Vector3(0, 0.05 * size, size * 0.95)
    ]}, scene);
    local_axisZ.color = new BABYLON.Color3(0, 0, 1);

    const local_origin = new BABYLON.TransformNode("local_origin");

    local_axisX.parent = local_origin;
    local_axisY.parent = local_origin;
    local_axisZ.parent = local_origin;

    return local_origin;
}
/*******************************End Local Axes****************************/
    `;

    //Simple demonstration showing the basics of extruding meshes.
    static c35 = `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    
    //base
    const outline = [
        new BABYLON.Vector3(-0.3, 0, -0.1),
        new BABYLON.Vector3(0.2, 0, -0.1),
    ]

    //curved front
    for (let i = 0; i < 20; i++) {
        outline.push(new BABYLON.Vector3(0.2 * Math.cos(i * Math.PI / 40), 0, 0.2 * Math.sin(i * Math.PI / 40) - 0.1));
    }

    //top
    outline.push(new BABYLON.Vector3(0, 0, 0.1));
    outline.push(new BABYLON.Vector3(-0.3, 0, 0.1));

    //back formed automatically

    const car = BABYLON.MeshBuilder.ExtrudePolygon("car", {shape: outline, depth: 0.2});

    return scene;
}

    `;
    
    //Expanding on the basics of extruding meshes.
    static c36 = `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    
    const car = buildCar();

    const wheelRB = BABYLON.MeshBuilder.CreateCylinder("wheelRB", {diameter: 0.125, height: 0.05})
    wheelRB.parent = car;
    wheelRB.position.z = -0.1;
    wheelRB.position.x = -0.2;
    wheelRB.position.y = 0.035;

    wheelRF = wheelRB.clone("wheelRF");
    wheelRF.position.x = 0.1;

    wheelLB = wheelRB.clone("wheelLB");
    wheelLB.position.y = -0.2 - 0.035;

    wheelLF = wheelRF.clone("wheelLF");
    wheelLF.position.y = -0.2 - 0.035;

    return scene;
}

const buildCar = () => {
    
    //base
    const outline = [
        new BABYLON.Vector3(-0.3, 0, -0.1),
        new BABYLON.Vector3(0.2, 0, -0.1),
    ]

    //curved front
    for (let i = 0; i < 20; i++) {
        outline.push(new BABYLON.Vector3(0.2 * Math.cos(i * Math.PI / 40), 0, 0.2 * Math.sin(i * Math.PI / 40) - 0.1));
    }

    //top
    outline.push(new BABYLON.Vector3(0, 0, 0.1));
    outline.push(new BABYLON.Vector3(-0.3, 0, 0.1));

    //back formed automatically

    const car = BABYLON.MeshBuilder.ExtrudePolygon("car", {shape: outline, depth: 0.2});
    return car;
}
    `;

    //Simple demonstration of adding a material to the extruded car body.
    static c37 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    
    //base
    const outline = [
        new BABYLON.Vector3(-0.3, 0, -0.1),
        new BABYLON.Vector3(0.2, 0, -0.1),
    ]

    //curved front
    for (let i = 0; i < 20; i++) {
        outline.push(new BABYLON.Vector3(0.2 * Math.cos(i * Math.PI / 40), 0, 0.2 * Math.sin(i * Math.PI / 40) - 0.1));
    }

    //top
    outline.push(new BABYLON.Vector3(0, 0, 0.1));
    outline.push(new BABYLON.Vector3(-0.3, 0, 0.1));

    //back formed automatically

    //face UVs
    const faceUV = [];
    faceUV[0] = new BABYLON.Vector4(0, 0.5, 0.38, 1);
    faceUV[1] = new BABYLON.Vector4(0, 0, 1, 0.5);
    faceUV[2] = new BABYLON.Vector4(0.38, 1, 0, 0.5);

    //material
    const carMat = new BABYLON.StandardMaterial("carMat");
    carMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/car.png");

    const car = BABYLON.MeshBuilder.ExtrudePolygon("car", {shape: outline, depth: 0.2, faceUV: faceUV, wrap: true});
    car.material = carMat;

    return scene;
}
    `;

    //Simple demonstration of adding a material to the extruded wheels.
    static c38 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 3, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    
    const car = buildCar();
    car.rotation.x = -Math.PI / 2;

    return scene;
}

const buildCar = () => {
    
    //base
    const outline = [
        new BABYLON.Vector3(-0.3, 0, -0.1),
        new BABYLON.Vector3(0.2, 0, -0.1),
    ]

    //curved front
    for (let i = 0; i < 20; i++) {
        outline.push(new BABYLON.Vector3(0.2 * Math.cos(i * Math.PI / 40), 0, 0.2 * Math.sin(i * Math.PI / 40) - 0.1));
    }

    //top
    outline.push(new BABYLON.Vector3(0, 0, 0.1));
    outline.push(new BABYLON.Vector3(-0.3, 0, 0.1));

    //back formed automatically

    //car face UVs
    const faceUV = [];
    faceUV[0] = new BABYLON.Vector4(0, 0.5, 0.38, 1);
    faceUV[1] = new BABYLON.Vector4(0, 0, 1, 0.5);
    faceUV[2] = new BABYLON.Vector4(0.38, 1, 0, 0.5);

    //car material
    const carMat = new BABYLON.StandardMaterial("carMat");
    carMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/car.png");

    const car = BABYLON.MeshBuilder.ExtrudePolygon("car", {shape: outline, depth: 0.2, faceUV: faceUV, wrap: true});
    car.material = carMat;

    //wheel face UVs
    const wheelUV = [];
    wheelUV[0] = new BABYLON.Vector4(0, 0, 1, 1);
    wheelUV[1] = new BABYLON.Vector4(0, 0.5, 0, 0.5);
    wheelUV[2] = new BABYLON.Vector4(0, 0, 1, 1);
    
    //car material
    const wheelMat = new BABYLON.StandardMaterial("wheelMat");
    wheelMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/wheel.png");

    const wheelRB = BABYLON.MeshBuilder.CreateCylinder("wheelRB", {diameter: 0.125, height: 0.05, faceUV: wheelUV})
    wheelRB.material = wheelMat;
    wheelRB.parent = car;
    wheelRB.position.z = -0.1;
    wheelRB.position.x = -0.2;
    wheelRB.position.y = 0.035;

    wheelRF = wheelRB.clone("wheelRF");
    wheelRF.position.x = 0.1;

    wheelLB = wheelRB.clone("wheelLB");
    wheelLB.position.y = -0.2 - 0.035;

    wheelLF = wheelRF.clone("wheelLF");
    wheelLF.position.y = -0.2 - 0.035;

    return car;
}
    `;

    //Simple demonstration of animating one of the car's wheels.
    static c39 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 1.5, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(0, 1, 0));
    
    //wheel face UVs
    const wheelUV = [];
    wheelUV[0] = new BABYLON.Vector4(0, 0, 1, 1);
    wheelUV[1] = new BABYLON.Vector4(0, 0.5, 0, 0.5);
    wheelUV[2] = new BABYLON.Vector4(0, 0, 1, 1);

    const wheelMat = new BABYLON.StandardMaterial("wheelMat");
    wheelMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/wheel.png");

    wheelRB = BABYLON.MeshBuilder.CreateCylinder("wheelRB", {diameter: 0.125, height: 0.05, faceUV: wheelUV})
    wheelRB.material = wheelMat;;

    //Animate the Wheels
    const animWheel = new BABYLON.Animation("wheelAnimation", "rotation.y", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

    const wheelKeys = []; 

    //At the animation key 0, the value of rotation.y is 0
    wheelKeys.push({
        frame: 0,
        value: 0
    });

    //At the animation key 30, (after 1 sec since animation fps = 30) the value of rotation.y is 2PI for a complete rotation
    wheelKeys.push({
        frame: 30,
        value: 2 * Math.PI
    });

    //set the keys
    animWheel.setKeys(wheelKeys);

    //Link this animation to a wheel
    wheelRB.animations = [];
    wheelRB.animations.push(animWheel);

    scene.beginAnimation(wheelRB, 0, 30, true);

    return scene;
}
    `;

    //Adding the wheel animation to all 4 tires.
    static c40 = 
    `
    const createScene = () => {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 2, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
 
    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "car.babylon").then(() =>  {
      const wheelRB = scene.getMeshByName("wheelRB");
      const wheelRF = scene.getMeshByName("wheelRF");
      const wheelLB = scene.getMeshByName("wheelLB");
      const wheelLF = scene.getMeshByName("wheelLF");
      console.log(wheelRB.animations)
      scene.beginAnimation(wheelRB, 0, 30, true);
      scene.beginAnimation(wheelRF, 0, 30, true);
      scene.beginAnimation(wheelLB, 0, 30, true);
      scene.beginAnimation(wheelLF, 0, 30, true);
    });

    return scene;
};
    `;
    
    // Simple example of how to animate the car's position forward.
    static c41 = 
    `
    const createScene = () => {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 2, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "car.babylon").then(() =>  {
      //car animatiion
      const car = scene.getMeshByName("car");
      
      const animCar = new BABYLON.Animation("carAnimation", "position.x", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

      const carKeys = []; 

      carKeys.push({
        frame: 0,
        value: -4
      });


      carKeys.push({
        frame: 150,
        value: 4
      });

      carKeys.push({
        frame: 210,
        value: 4
      });
    
      animCar.setKeys(carKeys);

      car.animations = [];
      car.animations.push(animCar);

      scene.beginAnimation(car, 0, 210, true);
      
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

    //Add the animating car back into the village.
    static c42 = `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0)); 

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "village.glb");
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
            value: 8
        });

        carKeys.push({
            frame: 150,
            value: -7
        });

        carKeys.push({
            frame: 200,
            value: -7
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

    // Simple example of loading an animated character into your scene.
    static c43 = 
    `
    const createScene = function () {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 50, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    // Dude
    BABYLON.SceneLoader.ImportMeshAsync("him", "/scenes/Dude/", "Dude.babylon", scene).then((result) => {
        var dude = result.meshes[0];
        dude.scaling = new BABYLON.Vector3(0.25, 0.25, 0.25);
                
        scene.beginAnimation(result.skeletons[0], 0, 100, true, 1.0);
    });

    return scene;

};
    `;

    // Simple example of animating an object along a path.
    static c44 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 1.5, Math.PI / 5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    //create a sphere
    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", {diameter: 0.25});
    sphere.position = new BABYLON.Vector3(2, 0, 2);

    //draw lines to form a triangle
    const points = [];
    points.push(new BABYLON.Vector3(2, 0, 2));
    points.push(new BABYLON.Vector3(2, 0, -2));
    points.push(new BABYLON.Vector3(-2, 0, -2));
    points.push(points[0]); //close the triangle;

    BABYLON.MeshBuilder.CreateLines("triangle", {points: points})

    const slide = function (turn, dist) { //after covering dist apply turn
        this.turn = turn;
        this.dist = dist;
    }
    
    const track = [];
    track.push(new slide(Math.PI / 2, 4));
    track.push(new slide(3 * Math.PI / 4, 8));
    track.push(new slide(3 * Math.PI / 4, 8 + 4 * Math.sqrt(2)));

    let distance = 0;
    let step = 0.05;
    let p = 0;

    scene.onBeforeRenderObservable.add(() => {
		sphere.movePOV(0, 0, step);
        distance += step;
              
        if (distance > track[p].dist) {        
            sphere.rotate(BABYLON.Axis.Y, track[p].turn, BABYLON.Space.LOCAL);
            p +=1;
            p %= track.length;
            if (p === 0) {
                distance = 0;
                sphere.position = new BABYLON.Vector3(2, 0, 2); //reset to initial conditions
                sphere.rotation = BABYLON.Vector3.Zero();//prevents error accumulation
            }
        }
    });
    
    return scene;
};
    `;

    //Animate a character walking through the village.
    static c45 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 1.5, Math.PI / 2.2, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "village.glb");
    
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
    
    return scene;
};
    `;
    
    //Detect when a car collides with a box and stop the character's animation.
    static c46 = 
    `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2.2, Math.PI / 2.2, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const wireMat = new BABYLON.StandardMaterial("wireMat");
    wireMat.wireframe = true;

    const hitBox = BABYLON.MeshBuilder.CreateBox("carbox", {width: 0.5, height: 0.6, depth: 4.5});
    hitBox.material = wireMat;
    hitBox.position.x = 3.1;
    hitBox.position.y = 0.3;
    hitBox.position.z = -5;

    let carReady = false;
    
    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "car.glb").then(() => {
        const car = scene.getMeshByName("car");    
        carReady = true;
        car.rotation = new BABYLON.Vector3(Math.PI / 2, 0, -Math.PI / 2);
        car.position.y = 0.16;
        car.position.x = -3;
        car.position.z = 8;

        const animCar = new BABYLON.Animation("carAnimation", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

        const carKeys = []; 

        carKeys.push({
            frame: 0,
            value: 8
        });


        carKeys.push({
            frame: 150,
            value: -7
        });

        carKeys.push({
            frame: 200,
            value: -7
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
    
    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "village.glb");
    
    const walk = function (turn, dist) {
        this.turn = turn;
        this.dist = dist;
    }
    
    const track = [];
    track.push(new walk(180, 2.5));
    track.push(new walk(0, 5));

    // Dude
    BABYLON.SceneLoader.ImportMeshAsync("him", "/scenes/Dude/", "Dude.babylon", scene).then((result) => {
        var dude = result.meshes[0];
        dude.scaling = new BABYLON.Vector3(0.008, 0.008, 0.008);
        
            
        dude.position = new BABYLON.Vector3(1.5, 0, -6.9);
        dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(-90), BABYLON.Space.LOCAL);
        const startRotation = dude.rotationQuaternion.clone();    
            
        scene.beginAnimation(result.skeletons[0], 0, 100, true, 1.0);

        let distance = 0;
        let step = 0.015;
        let p = 0;

        scene.onBeforeRenderObservable.add(() => {
            if (carReady) {
                if (!dude.getChildren()[1].intersectsMesh(hitBox) && scene.getMeshByName("car").intersectsMesh(hitBox)) {
                    return;
                }
                
            }
		    dude.movePOV(0, 0, step);
            distance += step;
              
            if (distance > track[p].dist) {
                    
                dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(track[p].turn), BABYLON.Space.LOCAL);
                p +=1;
                p %= track.length; 
                if (p === 0) {
                    distance = 0;
                    dude.position = new BABYLON.Vector3(1.5, 0, -6.9);
                    dude.rotationQuaternion = startRotation.clone();
                }
            }
			
        })
    });
    
    return scene;
};
    `;

    //Detect when a car collides with an invisible box and stop the character's animation. 
    static c47 = `
    const createScene = function () {
    
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2.2, Math.PI / 2.2, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));

    const wireMat = new BABYLON.StandardMaterial("wireMat");
    wireMat.alpha = 0;

    const hitBox = BABYLON.MeshBuilder.CreateBox("carbox", {width: 0.5, height: 0.6, depth: 4.5});
    hitBox.material = wireMat;
    hitBox.position.x = 3.1;
    hitBox.position.y = 0.3;
    hitBox.position.z = -5;

    let carReady = false;
    
    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "car.glb").then(() => {
        const car = scene.getMeshByName("car");    
        carReady = true;
        car.rotation = new BABYLON.Vector3(Math.PI / 2, 0, -Math.PI / 2);
        car.position.y = 0.16;
        car.position.x = -3;
        car.position.z = 8;

        const animCar = new BABYLON.Animation("carAnimation", "position.z", 30, BABYLON.Animation.ANIMATIONTYPE_FLOAT, BABYLON.Animation.ANIMATIONLOOPMODE_CYCLE);

        const carKeys = []; 

        carKeys.push({
            frame: 0,
            value: 8
        });


        carKeys.push({
            frame: 150,
            value: -7
        });

        carKeys.push({
            frame: 200,
            value: -7
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
    
    BABYLON.SceneLoader.ImportMeshAsync("", "https://assets.babylonjs.com/meshes/", "village.glb");
    
    const walk = function (turn, dist) {
        this.turn = turn;
        this.dist = dist;
    }
    
    const track = [];
    track.push(new walk(180, 2.5));
    track.push(new walk(0, 5));

    // Dude
    BABYLON.SceneLoader.ImportMeshAsync("him", "/scenes/Dude/", "Dude.babylon", scene).then((result) => {
        var dude = result.meshes[0];
        dude.scaling = new BABYLON.Vector3(0.008, 0.008, 0.008);
        
            
        dude.position = new BABYLON.Vector3(1.5, 0, -6.9);
        dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(-90), BABYLON.Space.LOCAL);
        const startRotation = dude.rotationQuaternion.clone();    
            
        scene.beginAnimation(result.skeletons[0], 0, 100, true, 1.0);

        let distance = 0;
        let step = 0.015;
        let p = 0;

        scene.onBeforeRenderObservable.add(() => {
            if (carReady) {
                if (!dude.getChildren()[1].intersectsMesh(hitBox) && scene.getMeshByName("car").intersectsMesh(hitBox)) {
                    return;
                }
                
            }
		    dude.movePOV(0, 0, step);
            distance += step;
              
            if (distance > track[p].dist) {
                    
                dude.rotate(BABYLON.Axis.Y, BABYLON.Tools.ToRadians(track[p].turn), BABYLON.Space.LOCAL);
                p +=1;
                p %= track.length; 
                if (p === 0) {
                    distance = 0;
                    dude.position = new BABYLON.Vector3(1.5, 0, -6.9);
                    dude.rotationQuaternion = startRotation.clone();
                }
            }
			
        })
    });
    
    return scene;
};
    `;

    //Create terrain from a plane with a height map.
    static c48 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);
    
    //Create large ground for valley environment
    const largeGround = BABYLON.MeshBuilder.CreateGroundFromHeightMap("largeGround", "https://assets.babylonjs.com/environments/villageheightmap.png", {width:150, height:150, subdivisions: 20, minHeight:0, maxHeight: 10});
    
    /**** Set camera and light *****/
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 200, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(4, 1, 0));

    return scene;
}
    `;

    //Add a texture to your terrain.
    static c49 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);
    
    //Create large ground for valley environment
    const largeGroundMat = new BABYLON.StandardMaterial("largeGroundMat");
    largeGroundMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/valleygrass.png");
    
    const largeGround = BABYLON.MeshBuilder.CreateGroundFromHeightMap("largeGround", "https://assets.babylonjs.com/environments/villageheightmap.png", {width:150, height:150, subdivisions: 20, minHeight:0, maxHeight: 10});
    largeGround.material = largeGroundMat;

    /**** Set camera and light *****/
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 200, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(2, 1, 0));

    return scene;
}
    `;

    //Add a clearer texture to the area within the village.
    static c50 = 
    `
    const createScene =  () => {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2.5, 15, new BABYLON.Vector3(0, 0, 0));
    camera.attachControl(canvas, true);
    const light = new BABYLON.HemisphericLight("light", new BABYLON.Vector3(1, 1, 0));
    
    //Create Village ground
    const groundMat = new BABYLON.StandardMaterial("groundMat");
    groundMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/villagegreen.png");
    groundMat.diffuseTexture.hasAlpha = true;

    const ground = BABYLON.MeshBuilder.CreateGround("ground", {width:24, height:24});
    ground.material = groundMat;

    //large ground
    const largeGroundMat = new BABYLON.StandardMaterial("largeGroundMat");
    largeGroundMat.diffuseTexture = new BABYLON.Texture("https://assets.babylonjs.com/environments/valleygrass.png");
    
    const largeGround = BABYLON.MeshBuilder.CreateGroundFromHeightMap("largeGround", "https://assets.babylonjs.com/environments/villageheightmap.png", {width:150, height:150, subdivisions: 20, minHeight:0, maxHeight: 10});
    largeGround.material = largeGroundMat;
    largeGround.position.y = -0.01;
    
    return scene;
}
    `;
    
}