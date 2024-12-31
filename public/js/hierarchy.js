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

// Button and Modal Elements


// Initially hide the button

// function loadSceneCode(sceneCode) {
//     const toggleCodeButton = document.getElementById("toggleCodeButton");
// const codeModal = document.getElementById("codeModal");
// const codeDisplay = document.getElementById("codeDisplay");
// const closeCodeModal = document.getElementById("closeCodeModal");
// toggleCodeButton.style.display = "none";


//     try {
//         // Dynamically evaluate the scene code
//         eval(sceneCode);

//         // Check if the createScene function exists and is callable
//         if (typeof createScene === "function") {
//             initFunction(createScene);
//              // Show the "View Code" button
//              toggleCodeButton.style.display = "block";

//              // Update codeDisplay with the provided sceneCode
//             codeDisplay.textContent = sceneCode;
//         } else {
//             console.error("createScene is not defined in the provided code.");
//         }
//     } catch (error) {
//         console.error("Failed to execute scene code:", error);
//         alert("Failed to load scene.");
//     }
//     // Button Click Event to Toggle Code Modal
// toggleCodeButton.addEventListener("click", () => {
//     toggleCodeButton.classList.toggle("active");
//     codeModal.classList.toggle("active");

//     if (codeModal.classList.contains("active")) {
//         toggleCodeButton.textContent = "Hide Code";
//     } else {
//         toggleCodeButton.textContent = "View Code";
//     }
// });

// // Close Modal Logic
// closeCodeModal.addEventListener("click", () => {
//     toggleCodeButton.classList.remove("active");
//     codeModal.classList.remove("active");
//     toggleCodeButton.textContent = "View Code";
// });

// }

// function loadSceneCode(sceneCode) {
//     const toggleCodeButton = document.getElementById("toggleCodeButton");
//     const codeModal = document.getElementById("codeModal");
//     //const codeEditor = document.getElementById("codeEditor");
//     const runCodeButton = document.getElementById("runCodeButton");
//     const closeCodeModal = document.getElementById("closeCodeModal");
//     // Initially hide the button
//     toggleCodeButton.style.display = "none";

// // Initialize CodeMirror
// const codeEditor = new CodeMirror(document.getElementById("codeEditor"), {
//     value: '',
//     mode: "javascript", // Set the language mode to JavaScript
//     theme: "default", // You can customize this with CodeMirror themes
//     lineNumbers: true, // Show line numbers
//     tabSize: 2, // Set tab size
//     indentUnit: 2, // Set indentation unit
// });

//     try {
//         // Dynamically evaluate the scene code
//         eval(sceneCode);

//         // Check if the createScene function exists and is callable
//         if (typeof createScene === "function") {
//             initFunction(createScene);

//             // Update and show the "View Code" button
//             toggleCodeButton.style.display = "block";
//             //codeEditor.value = sceneCode;
//             codeEditor.setValue(sceneCode);



//             // Remove any previous click events to avoid duplication
//             toggleCodeButton.replaceWith(toggleCodeButton.cloneNode(true));
//             const newToggleCodeButton = document.getElementById("toggleCodeButton");

//             // Add new click event for the button
//             newToggleCodeButton.addEventListener("click", () => {
//                 newToggleCodeButton.classList.toggle("active");
//                 codeModal.classList.toggle("active");

//                 if (codeModal.classList.contains("active")) {
//                     newToggleCodeButton.textContent = "Hide Code";
//                 } else {
//                     newToggleCodeButton.textContent = "View Code";
//                 }
//             });

//             // Ensure the close button works
//             closeCodeModal.addEventListener("click", () => {
//                 newToggleCodeButton.classList.remove("active");
//                 codeModal.classList.remove("active");
//                 newToggleCodeButton.textContent = "View Code";
//             });

//             //
//             toggleCodeButton.addEventListener("click", () => {
//                 codeModal.classList.add("active");
//             });
        
//             // Close modal on "Close" button click
//             closeCodeModal.addEventListener("click", () => {
//                 codeModal.classList.remove("active");
//             });
        
//             // Run the code from the editor
//             runCodeButton.addEventListener("click", () => {
//                 const userCode = codeEditor.getValue();
        
//                 try {
//                     // Dynamically evaluate the user's code
//                     eval(userCode);

        
//                     // Check if `createScene` is defined
//                     if (typeof createScene === "function") {
//                         console.log("Executing the updated scene...");
//                         initFunction(createScene);
//                     } else {
//                         console.error("createScene is not defined. Please check your code.");
//                     }
//                 } catch (error) {
//                     console.error("Error executing user code:", error);
//                     alert(`Error: ${error.message}`);
//                 }
//             });

//         } else {
//             console.error("createScene is not defined in the provided code.");
//         }
//     } catch (error) {
//         console.error("Failed to execute scene code:", error);
//         alert("Failed to load scene.");
//     }
// }

let codeEditor = null; // Declare CodeMirror globally to initialize it only once

function loadSceneCode(sceneCode) {
    const toggleCodeButton = document.getElementById("toggleCodeButton");
    const codeModal = document.getElementById("codeModal");
    const runCodeButton = document.getElementById("runCodeButton");
    const closeCodeModal = document.getElementById("closeCodeModal");

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



// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const rootElement = document.getElementById('hierarchicalStructure'); // Find the target container
    if (rootElement) {
        generateHierarchy(root_content, rootElement); // Generate the hierarchy
    } else {
        console.error("Root element for hierarchy not found");
    }
});


