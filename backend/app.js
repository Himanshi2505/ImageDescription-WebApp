const express = require("express");
const multer = require("multer");
const { execSync } = require("child_process");
const path = require("path");

const app = express();
const port = 6969;

// Multer config to save files in "uploads/" directory
const upload = multer({ dest: "uploads/" });

app.use(express.static("public", {
    setHeaders: (res, path) => {
        console.log(`Serving static file: ${path}`);
    }
}));

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.status(200).render("index");
});

app.get("/upload", (req, res) => {
    res.status(200).render("upload");
});

app.post("/describe", upload.single("image"), (req, res) => {
    const imagePath = path.resolve(__dirname, req.file.path); // Ensure correct file path

    try {
        const output = execSync(`python3 describe_image.py ${imagePath}`, { encoding: "utf-8" });
        res.status(200).send({ description: output.trim() });
    } catch (error) {
        console.error("Python script error:", error.message);
        res.status(500).send({ error: "Failed to process image" });
    }
});

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
