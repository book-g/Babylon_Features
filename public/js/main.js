document.addEventListener("DOMContentLoaded", () => {
    const scene1Button = document.getElementById("scene1");
    const scene2Button = document.getElementById("scene2");

    scene1Button.addEventListener("click", () => loadScene("js/1.js"));
    scene2Button.addEventListener("click", () => loadScene("js/2.js"));
});

function loadScene(sceneFile) {
    const existingScript = document.querySelector(`script[src="${sceneFile}"]`);
    if (existingScript) existingScript.remove();

    const script = document.createElement("script");
    script.src = sceneFile;

    script.onload = () => {
        if (typeof createScene === "function") {
            initFunction(createScene);
        } else {
            console.error("createScene is not defined in the loaded script.");
        }
    };

    script.onerror = () => {
        console.error(`Failed to load script: ${sceneFile}`);
        alert(`Failed to load scene: ${sceneFile}`);
    };

    document.body.appendChild(script);
}
