// Routes
// =============================================================
var path = require("path");
// Basic route that sends the user first to the AJAX Page
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

  
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
  });
  