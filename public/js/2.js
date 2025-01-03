var text =
`# Journey
- 1.Goodbye Sphere
- 2.The ground is red!
- 3.The ground is checkered!
- 4.Yeti on the dance floor!
- 5.Move that camera!
# Features
## Starter Scene Code
- 6.CreateScene
### 1.Firsts
#### 1.First Scene and Model
- 7.Getting Started First Scene
#### 2.First Model on a Web Page
- 8.Code
#### 3.First Import of a Model
- 9.Load a model into a scene.
- 10.Load multiple models into a scene.
- 11.Load a model into a scene and modify their position after loading completes.
#### 4.First App on the Web
- 12.Import a Model Setup
- 13.Code a Model Setup
### 2.Build A Village
####      1.Grounding the World
- 14.A playground showing how to add a basic ground plane to your scene.
- 15.A playground showing how to adjust the position of the box.
####      2.Adding Sound
- 16.A playground showing how easy it is to add sound to your scene.
- 17.Set an interval to play a sound every 3 seconds.
####     3.Place and Scale a Mesh
- 18.A playground demonstrating different ways to position a mesh in your scene.
- 19.A playground demonstrating how to rotate a mesh in your scene.
####      4.A Basic House
- 20.A playground demonstrating how to add a 'prism' roof to your house.
####      5.Add Texture
- 21.A playground demonstrating how to add materials to the objects in your scene.
####      6.Material For Each House Side
- 22.A playground demonstrating how to add materials to individual faces of the objects in your scene.
- 23.A playground demonstrating how to add reuse materials to apply on individual faces of the objects in your scene.
- 24.A playground wrapping mesh-building code into functions for future repeat use.
####      7.Combining Meshes
- 25.Bug - A playground demonstrating how to combine meshes inside of your scene.
- 26.A playground demonstrating how to combine meshes while preserving material assignments.
####      8.Copying Meshes
- 27.A playground expanding the house building function to accept a width of 1 or 2 for a detached or semi-detached house.
- 28.A playground demonstrating how to create instances of a 3D object.
- 29.Wrapping the house instancing loop into a function.
- 30.An example of how to load a .glb of the starting village into your scene.
####     9.Changing the Viewer's Camera
- 31.Code
####      10.Web App Layout
- 32.Code
### 3.Village Animations
####  1.Mesh Parents
- 33.Simple playground to help demonstrate parenting.
####  2.Building the Car
- 34.Simple demonstration showing the basics of extruding meshes.
- 35.Expanding on the basics of extruding meshes.
####  3.Car Materials
- 36.Simple demonstration of adding a material to the extruded car body.
- 37.Simple demonstration of adding a material to the extruded wheels.  
####  4.Wheel Animation
- 38.Simple demonstration of animating one of the car's wheels.
- 39.Adding the wheel animation to all 4 tires.
####  5.Car 
- 40.Simple example of how to animate the car's position forward.
- 41.Add the animating car back into the village.
####  6.Character Animation
- 42.Simple example of loading an animated character into your scene.
####  7.A Walk Around the Village
- 43.Simple example of animating an object along a path.
- 44.Animate a character walking through the village.
### 4.Avoiding Collisions
####  1.Avoiding a Car Crash
- 45.Detect when a car collides with a box and stop the character's animation.
- 46.Detect when a car collides with an invisible box and stop the character's animation.
###  5.A Better Environment
#### 1.Distant Hills
- 47.Create terrain from a plane with a height map.
- 48.Add a texture to your terrain.
- 49.Add a clearer texture to the area within the village.
- 50.Add the dwellings back into the village scene.
- 51.Add the animating car back into the village scene.
#### 2.Skies Above
- 52.Adding a Skybox  
#### 3.Sprite Trees
- 53.Add sprite trees to your scene.
- 54.Add an animated UFO to your scene.
### 6.Build a Particle Fountain
#### 1.A Lathe Turned Fountain
- 55.Use the createLathe method to create a fountain.
- 56.Add the fountain into the village.
#### 2.Particle Spray
- 57.Create a basic particle system as water spray.
#### 3.The Switch On Event
- 58.Start and stop a particle system on click.
- 59.Add the fountain to the village.
### 7.Light the Night
#### 1.Street Lights
- 60.Create a basic streetlight shape and attach a spotlight.
- 61.Add street lights to the village and adjust the lighting.
#### 2.Day to Night
- 62. Add a gui slider that controls the lighting in the village.
#### 3.Adding Shadows 
- 63.Set up a scene for shadows with the shadow generator.
- 64.Adding basic shadows to the village. 
###  8.Ways to See The World
####      1.Have a Look Around
- 65.Parent the camera to a character for an over the shoulder angle.
####      2.Follow That Character
- 66. Use the follow cam to follow the character around the village.
####      3.Going Virtual
- 67.Code
## Deep Dive
### 1.Animation
####      1.Introduction to Animations
####      2.Designing an Animation
- 68.An example of basic animation by sliding a box.
- 69.An example of playing an animation forwards and backwards.
####      3.Description of the Animation Method
- 70.An example of basic animation by sliding a box.
- 71.An example of sliding a box with direct animation.
- 72.An example of stopping an animation after specific amount of time.
####      4.Sequencing Animations
- 73.An example of sequencing animations one after another.
####      5.Grouping Animations
- 74.First Example of Animation Groups.
- 75.Second Example of Animation Groups.
- 76.Third Example of Animation Groups.
- 77.Example of adjust an animation group's speed ratio.
- 78.Example of creating an animationGroup by enumerating through the animations contained in an animatable.
- 79.Example of executing code after all animations in an animationGroup finish.
- 80.Demonstrate how to use the mask property
####      6.Combining Animations
- 81.The simple slide animation example.
- 82.The simple slide animation with rotation introduced.
- 83.The simple slide animation with faster rotation.
- 84.The simple slide animation with varying rotation rates.
- 85.The simple slide animation with rotation happening first, then sliding.
- 86.The simple slide animation with rotation happening first, then rotation and sliding.
####      7.Animation Characters
- 87.Simple example of loading a gltf/glb asset and playing the animation groups tha come with it.
- 88.Load a character and control it's animations with the keyboard.
####      8.Advanced Animation Methods
- 89.An example of waiting for the animation end with promises.
- 90.Example of the animation.evaluate method being used.
- 91.Click on a box to blend a new animation with its current position
- 92.Example of blending animations and animation weights
- 93.Example of blending animations and animation weights
- 94.Demo of converting animations to additive and blending them on top of override animations.
- 95.Additive blending Babylon animation groups to offset a motion path
- 96.Examples of the easing functions available.
- 97.Console logging of the stepId in which a sphere is considered at rest and the rotation value for a rotating box.
####      9.Animation Using the Render Loop
- 98.A simple example of animation using the scene's render loop.
####      10.Baked Texture Animations
- 99.An example of playing a vertex texture animation.
- 100.An example of playing VATs on instances.
- 101.An example of playing VATs on thin instances.
###  2.Audio
#### 1.Playing Sounds and Music
- 102.A simple example of playing sounds or music in your scene.
- 103.A simple example loading a sound and playing it once after the file has loaded.
- 104.A simple example playing a sound on user interaction.
- 105.A simple example unlocking audio on first user interaction
- 106.A simple example of playing a portion of a sound file using sound sprites.
- 107.A simple example of playing a portion of a sound file using sound sprites.
- 108.A simple example playing sounds together and synchronized.
- 109.A simple example of loading a sound from an ArrayBuffer.
- 110.A simple example of loading a sound from the microphone.
- 111.A simple example of loading a sound with the asset manager.
- 112.A simple example of creating spatial sound in your scene.
- 113.A simple example of attaching sound to a mesh.
- 114.A simple example of spatial directional 3D sound.
- 115. An example of creating a custom attenuation function.
- 116.Full audio playground example.
###  3.Behaviors
####  1.Camera Behaviors
- 117.A simple example of the camera bouncing behavior.
- 118.A simple example of the camera AutoRotation behavior.
- 119.A simple example of the camera Framing behavior.
####  2.Mesh Behaviors
- 120.A simple example of the pointerDragBehavior.
- 121.A simple example of SixDofDragBehavior with single or multipoint support.
- 122.A simple example of AttachToBoxBehavior.
###  4.Cameras
####      1.Camera Introduction
####      2.Camera Collisions
####      3.Customizing Camera Inputs
####      4.Multviews Part1
####      5.Multviews Part2
####      6.Layer Masks and Multi-Cam Textures
####      7.WebVR Camera
####      8.WebVR Experience Helper
###  5. 2D Controls
####      1.Timeline Control
####      2.Resizer Control
####      3.Image Filter Control
###  6. Crowd Navigation System
####      1.Creating A Navigation Mesh
####      2.Crowd Agents
####      3.Obstacles
###  7. Environment
####      1.Introduction To Environment
####      2.Skyboxes
####      3.Background Materials
####      4.Lens Flares
####      5.Reflection Probes
####      6.360 Photo Domes
####      7.360 Video Domes
###  8. Events
####      1.Actions
####      2.Observables
####      3.Promises
####      4.Coroutines
###  9. Exporters
####      1.glTF Exporter
####      2.3DSMax
####      3.3DSMax to glTF
####      4.Blender
####      5.Blender Tips
####      6.Blender to glTF
####      7.Bones influences per vertex
####      8.Cheetah3D
####      9.Maya
####      10.Maya to glTF
####      11.Mixamo to Babylon
####      12.Save Babylon
###  10.GUI
####     1.The Babylon GUI
####     2.Scroll Viewer
####     3.XML Loader
####     4.Selector
####     5.Babylon 3D GUI
####     6.MRTK Content
###  11.Input
####      1.Gamepads
####      2.Virtual Joysticks
####      3.Device Source Manager  
### 12.Importing Assets
####      1.Loading Any File Type
####      2.Loading Assets From Memory
####      3.Incremental Loading System
####      4..glTF File Loader Plugin
#####         1.Skinning
#####         2.Progressively Load .glTF Files
#####         3.Create Your Own glTF Extensions   
####      5..stl File Loader Plugin
####      6..obj File Loader Plugin
####      7.Asset Manager
####      8.Asset Containers
####      9.Create Your Own File Importer
####      10.SceneLoader class (legacy)
###  13.Lights
####      1.Introduction to Lights
####      2.Shadows
####      3.Cascaded Shadow Maps
####      4.Volumetric Light Scattering Post Process
####      5.Global Illumination with Reflective Shadow Maps
####      6.Depth metric when rendering shadows
###  14.Materials
####      1.Using Materials
#####         1.Introduction to Material
#####         2.Apply Bump, Opacity, Tiling, and Detail maps
#####         3.Parallax Mapping
#####         4.Understanding Normal Maps
#####         5.Blend Modes
#####         6.Applying Materials to Individual Faces
#####         7.Applying Different Materials to the Front and Back
#####         8.Multi-Materials
#####         9.Dynamic Textures
 #####        10.Video Textures
 #####        11.Reflections and Refractions 
 #####        12.Fresnel Parameters
#####         13.KTX2 Compressed Textures
#####         14.Introduction to Physically Based Rendering (PBR)
#####         15.HDR Environment for PBR
#####         16.Mastering Physically Rendering (PBR)
#####         17.Procedural Textures
#####         18.Material Plugins 
####      2.Shaders
#####         1.Introduction to Shaders
#####         2.Putting Shader Code into Babylon.js
#####         3.Using ShaderMaterial
#####         4.Using Fog with Shader Materials
#####         5.Image Processing
#####         6.Compute Shaders
####      3.Node Materials
#####         1.Node Materials
#####         2.Node Material and PBR
#####         3.Node Material Post Processes
#####         4.Node Material Procedural Textures
#####         5.Node Material Particle Shaders
#####         6.Available Nodes (blocks)
#####         7.Using Node Material with Particles
####      4.Advanced Materials  
#####         1.How Materials Work
#####         2.Materials and Vertices
#####         3.Create Custom Procedural Textures
#####         4.Create a Texture Package
#####         5.Multi-Platform Compressed Textures
#####         6.Render pass ids
#####         7.Transparent Rendering
#####         8.Raw Textures
#####         9.Get Depth Values with the Depth Renderer
#####         10.The Logarithmic Depth Buffer
###  15.Mesh
####      1.Creating Meshes
####      2.Mesh Transformations
####      3.Copies, Clones and Instances
####      4.Interactions
####      5.Node Geometry
####      6.Drawing Bounding Boxes
####      7.BillBoard Mode
####      8.Decals
####      9.Highlight Meshes
####      10.Making Meshes Glow
####      11.Merging Meshes
####      12.Drawing Curves
####      13.Path 3D
####      14.Facet Data
####      15.Levels of Detail (LOD)
####      16.Dynamically Morph a Mesh
####      17.Morph Targets
####      18.Bones and Skeletons
#####          1.Bone Class Internals
####      19.Rendering Utility Layers
####      20.Gizmos
####      21.Simplifying Meshes with Auto-LOD
####      22.Rendering Edges
####      23.Trail Mesh
####      24.Gaussian Splatting
####      25.Hotspot
####      26.Exploding Meshes
####      27.Visulizing Mesh Data
###  16.Occlusion Queries
### 17.Particles
####      1.Particle System
#####         1.Introduction to the Particle System
#####         2.Basic Particle Properties
#####         3.Change Particle Properties Over Time
#####         4.Shape Emitters
#####         5.Animating Particles
#####         6.Customizing Particles
#####         7.The Particle Helper
#####         8.Color Ramps and Blends, and Billboard Mode
#####         9.Sub Emitters
#####         10.GPU Particles
#####         11.Particle Snippet Server
#####         12.Load Particles from File
####      2.Solid Particle System
#####         1.Introduction To SPS
#####         2.SPS Animations
#####         3.Managing the SPS
#####         4.Managing SPS Particles
#####         5.SPS Material
#####         6.Immutable SPS
#####         7.SPS from Mesh Facets
#####         8.Update a Particle's Shape
#####         9.SPS Particle Picking
#####         10.SPS Physics
#####         11.Optimize as SPS
#####         12.Expandable SPS
#####         13.SPS Visibility Issues
#####         14.SPS Transparency Issues 
####      3.Points Cloud System
#####         1.An Introduction to PCS
#####         2.Creating a PCS
#####         3.Managing a PCS
#####         4.Manage PCS Particles
####      4.Fluid Renderer
#####         1.Using the Fluid Renderer
#####         2.Fluid Rendering Demos
#####         3.Fluid Rendering GUI
#####         4.Technical Implementation Details
###  18.Physics
####      1.Using A Physics Engine
####      2.Rigid bodies
####      3.Shapes
####      4.Forces
####      5.Compounds
####      6.Aggregates
####      7.Collision Events
####      8.Constraints
####      9.Raycast
####      10.Migrate from V1
####      11.Performance Tips
####      12.Ragdolls
####      13.Shape cast
####      14.Prestep
####      15.Character Controller
####      16.The Havok Physics
###  19.Post Processes
####     1.Using Post Processes
####      2.Using the PostProcessRenderPipeline
####      3.Using the SSAO Rendering Pipeline
####      4.Using the Standard Rendering Pipeline (deprecated)
####      5.Using the Default Rendering Pipeline
####      6.Depth of Field and Other Lens Effects
####      7.Using the IBL Shadows Rendering Pipeline
####      8.Motion Blur Post Process
####      9.Using the Screen Space Reflections (SSR) Rendering Pipeline
####      10.Screen Space Reflections (SSR) Post Process
####      11.Temporal Anti-Aliasing (TAA) rendering pipeline
####      12.Using RenderTargetTexture and Multiple Passes
###  20.Scene
####     1.Fast Build A World
####      2.Interacting with Scenes
####      3.Using Multiple Scenes
####      4.Using Multiple Canvases
####      5.Applying Delta Changes To A Scene
####      6.Creating Custom Loading Screens
####      7.Optimize Your Scene
####      8.The Scene Optimizer
####      9.Optimizing with Octrees
####      10.Optimizing Using Cached Resources
####      11.Floating Origin
####      12.Reducing Memory Footprint
####      13.Using Offscreen Canvas
####      14.Render Scenes To .png Files
####      15.Render Scenes To Video
####      16.Using Clip Planes
####      17.Render Scences And Take Screenshots On A Remote Server
####      18.In-Depth Layer Mask 
### 21.Sprites
####      1.An Introduction to Sprites
####      2.Sprite Manager
####      3.Sprite Packed Manager
####      4.Picking a Sprite
####      5.Sprite Map
####      6.Sprite Map Tile Layout
####      7.Sprite Map Options
####      8.Sprite Map Animations
####      9.Sprite Map Example
####      10.Sprite Snippet Server
### 22.Tags
### 23.Viewer
####      1.Viewer Camera Controls
####      2.Viewer Default UI
####      3.Viewer HTML Element Interface
####      4.Viewer HTML Element Styling
####      5.Viewer HotSpots & Annotations
####      6.Viewer Advanced Usage
####      7.Viewer & React
####      8.Viewer Migration (V1 -> V2)
### 24.WebXR
####      1.Introduction To WebXR
####      2.WebXR Features
#####         1.WebXR Teleportation
#####         2.WebXR Hand Tracking
#####         3.WebXR Movement
#####        4.WebXR Layers
####      3.The WebXR Experience Helpers
####      4.The WebXR Session Managers
####      5.The WebXR Camera
####      6.The WebXR Features Manager
####     7.WebXR Demos and Examples
####      8.WebXR Input and Controller Support
####      9.WebXR Augmented Reality Features
`;

function parseHierarchy(text) {
    const lines = text.trim().split("\n");
    const stack = [];
    const root = new Map();

    let currentMap = root;

    for (const line of lines) {
        const match = line.match(/^(\s*)(#*\s*|\d+\.\s*|- )(.+)$/);

        if (match) {
            const [, spaces, prefix, content] = match;
            const level = spaces.length + prefix.trim().length; // Determine the nesting level

            const newEntry = new Map();

            while (stack.length && stack[stack.length - 1].level >= level) {
                stack.pop(); // Adjust stack to the current level
            }

            if (stack.length) {
                const parentMap = stack[stack.length - 1].map;
                if (!parentMap.has(content)) {
                    parentMap.set(content, newEntry);
                }
            } else {
                root.set(content, newEntry);
            }

            stack.push({ level, map: newEntry });
        }
    }

    return lines;
}

var da = parseHierarchy(text);
console.log(da);