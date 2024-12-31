const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(path.join(__dirname, "public")));

app.use('/3dmodel', express.static('3dmodel', {
    setHeaders: (res, path, stat) => {
        if (path.endsWith('.glb')) {
            res.set('Content-Type', 'model/gltf-binary');
        }
    }
}));


// Serve the main HTML file
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
