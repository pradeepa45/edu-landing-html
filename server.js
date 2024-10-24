const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 3000;

// Set Pug as the templating engine
app.set("view engine", "pug");
app.set("views", path.join(__dirname, "views"));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, "public")));

// Route to render the Pug template
app.get("/", (req, res) => {
  // Function to read JSON files
  const readJsonFile = (filePath) => {
    return new Promise((resolve, reject) => {
      fs.readFile(filePath, "utf-8", (err, data) => {
        if (err) {
          console.error(err);
          return reject(err);
        }
        resolve(JSON.parse(data));
      });
    });
  };

  Promise.all([
    readJsonFile("./public/data/steps.json"),
    readJsonFile("./public/data/services.json"),
    readJsonFile("./public/data/testimonials.json"),
    readJsonFile("./public/data/webinars.json"),
  ])
    .then(([steps, services, testimonials, webinars]) => {
      res.render("index", { steps, services, testimonials, webinars });
    })
    .catch((err) => {
      res.status(500).send("Error reading JSON files");
    });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
