const canvas = document.getElementById("renderCanvas");
let engine = null;
let scene = null;

function startRenderLoop(engine, canvas) {
    engine.runRenderLoop(() => {
        if (scene && scene.activeCamera) {
            scene.render();
        }
    });
}

function createDefaultEngine() {
    if (!canvas) {
        throw new Error("Canvas element not found. Ensure the canvas ID is correct.");
    }
    return new BABYLON.Engine(canvas, true, {
        preserveDrawingBuffer: true,
        stencil: true,
        disableWebGL2Support: false,
    });
}

// function initFunction(createSceneFunction) {
//     try {
//         if (!engine) {
//             engine = createDefaultEngine();
//         }

//         if (!engine) {
//             throw new Error("Babylon.js Engine could not be created.");
//         }

//         startRenderLoop(engine, canvas);

//         if (scene) {
//             scene.dispose();
//         }

//         scene = createSceneFunction();
//     } catch (e) {
//         console.error("Initialization failed:", e);
//     }
// }

function initFunction(createSceneFunction) {
    try {
        const canvas = document.getElementById("renderCanvas");
        if (!canvas) {
            throw new Error("Canvas element not found. Ensure the canvas ID is correct.");
        }

        if (!engine) {
            engine = new BABYLON.Engine(canvas, true, {
                preserveDrawingBuffer: true,
                stencil: true,
                disableWebGL2Support: false,
            });
        }

        if (!engine) {
            throw new Error("Babylon.js Engine could not be created.");
        }

        startRenderLoop(engine, canvas);

        if (scene) {
            scene.dispose();
        }

        scene = createSceneFunction();
    } catch (e) {
        console.error("Initialization failed:", e);
    }
}

window.addEventListener("resize", () => {
    if (engine) {
        engine.resize();
    }
});
