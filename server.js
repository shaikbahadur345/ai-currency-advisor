const express = require("express");
const cron = require("node-cron");
const forexRoute = require("./routes/forexroute");
require("dotenv").config();

const app = express();
app.use(express.static("public"));
app.use(express.json());

// Routes
app.use("/", forexRoute);

// Cron Job: refresh insights every 6 hours
cron.schedule("0 */6 * * *", () => {
  console.log("🔄 Scheduled task: Updating forex insights...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
