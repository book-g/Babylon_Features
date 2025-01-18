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



var codeEditor = null; // Declare CodeMirror globally to initialize it only once

function loadSceneCode(sceneCode) {
    var toggleCodeButton = document.getElementById("toggleCodeButton");
    var codeModal = document.getElementById("codeModal");
    var runCodeButton = document.getElementById("runCodeButton");
    var closeCodeModal = document.getElementById("closeCodeModal");

    // Hide the toggle button initially
    toggleCodeButton.style.display = "none";

    // Initialize CodeMirror if not already initialized
    if (!codeEditor) {
        codeEditor = CodeMirror(document.getElementById("codeEditor"), {
            value: "", // Empty initially
            mode: "javascript",
            theme: "default",
            lineNumbers: true,
            tabSize: 2,
            indentUnit: 2,
        });
    }

    try {
        // Dynamically evaluate the provided scene code
        eval(sceneCode);

        // Check if `createScene` exists and is callable
        if (typeof createScene === "function") {
            initFunction(createScene);

            // Update and show the "View Code" button
            toggleCodeButton.style.display = "block";

            // Set the CodeMirror editor's value to the provided code
            codeEditor.setValue(sceneCode);

            // Toggle Code Modal visibility
            toggleCodeButton.onclick = () => {
                codeModal.classList.toggle("active");
                toggleCodeButton.textContent = codeModal.classList.contains("active") ? "Hide Code" : "View Code";
            };

            // Close the modal
            closeCodeModal.onclick = () => {
                codeModal.classList.remove("active");
                toggleCodeButton.textContent = "View Code";
            };

            // Run the code from the editor
            runCodeButton.onclick = () => {
                const userCode = codeEditor.getValue(); // Get the code from CodeMirror

                try {
                    // Dynamically evaluate the user's code
                    eval(userCode);

                    // Validate the existence of `createScene`
                    if (typeof createScene === "function") {
                        console.log("Executing the updated scene...");
                        initFunction(createScene);
                    } else {
                        throw new Error("createScene is not defined. Please check your code.");
                    }
                } catch (error) {
                    console.error("Error executing user code:", error);
                    alert(`Error: ${error.message}`);
                }
            };
        } else {
            throw new Error("createScene is not defined in the provided code.");
        }
    } catch (error) {
        console.error("Failed to execute scene code:", error);
        alert("Failed to load scene. Please check the code and try again.");
    }
}


// Recursive function to generate hierarchy without duplication
function generateHierarchy(obj, parentElement) {
    Object.entries(obj).forEach(([key, value]) => {
        // Create a container for the key
        const container = document.createElement('div');
        container.classList.add('hierarchy-container');

        // Create a clickable title for the key
        const title = document.createElement('div');
        title.textContent = key;
        title.classList.add('tile');
        container.appendChild(title);

        if (Array.isArray(value) && value.length > 0) {
            // Create a sub-container for nested children
            const subContainer = document.createElement('div');
            subContainer.classList.add('sub-container', 'hidden'); // Start hidden

            value.forEach((child) => {
                Object.entries(child).forEach(([subKey, subValue]) => {
                    const childContainer = document.createElement('p');
                    

                    // Recursive call if there are deeper levels
                    if (Array.isArray(subValue) && subValue.length > 0) {
                        
                        generateHierarchy({ [subKey]: subValue }, childContainer);
                    }else{
                        childContainer.classList.add('hierarchy-item');
                        
                       //childContainer.href="js/1.js";
                        childContainer.textContent = subKey;



                        //childContainer.addEventListener("click", () => loadScene("js/1.js"));
                        childContainer.addEventListener("click", () => {
                           var data =  CodeList.indexToCode[PageMapper.keyToIndex[subKey]];
                           console.log(`${data}`); 
                           loadSceneCode(data);

                        });

                        
                    }


                    subContainer.appendChild(childContainer);
                });
            });

            container.appendChild(subContainer);

            // Add toggle functionality to expand/collapse children
            title.addEventListener('click', () => {
                subContainer.classList.toggle('hidden');
            });
        }

        parentElement.appendChild(container);
    });
} 

var index = 0;
var pageMap = {};
function pageMapper(obj) {
    Object.entries(obj).forEach(([key, value]) => {
        // Create a container for the key
     
        //key 

        if(key!="code_type"){
        

        if (Array.isArray(value) && value.length > 0) {
            // Create a sub-container for nested children
            
            value.forEach((child) => {
                Object.entries(child).forEach(([subKey, subValue]) => {
                    
                    // Recursive call if there are deeper levels
                    if (Array.isArray(subValue) && subValue.length > 0) {
                       

                        pageMapper({ [subKey]: subValue });
                    }else{
                        //subkey

                        if(subKey!="code_type"){
                            ++index;
                            pageMap[subKey]=index;
                            //console.log(`\"${subKey}\":${index},`);
                        }
                            
                    }


                });
            });

           
        }
    }

    });

    console.log(pageMap);
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('hierarchicalStructure'); // Find the target container
    if (rootElement) {
        generateHierarchy(root_content, rootElement); // Generate the hierarchy
        index = 0;
        pageMapper(root_content,index);
    } else {
        console.error("Root element for hierarchy not found");
    }
});


