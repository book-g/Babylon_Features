function createScene() {
    const scene = new BABYLON.Scene(engine);

    const camera = new BABYLON.ArcRotateCamera("camera2", Math.PI / 2, Math.PI / 4, 10, BABYLON.Vector3.Zero(), scene);
    camera.attachControl(canvas, true);

    const light = new BABYLON.PointLight("light", new BABYLON.Vector3(0, 10, 0), scene);
    light.intensity = 1;

    const sphere = BABYLON.MeshBuilder.CreateSphere("sphere", { diameter: 2 }, scene);

    return scene;
}
