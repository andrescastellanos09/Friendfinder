// Routes
// =============================================================
var path = require("path");
// Basic route that sends the user first to the AJAX Page

module.exports = (app) => {
  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/survey.html"));
  });
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../Public/home.html"));
  });
};

  