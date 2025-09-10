const express = require("express");
const { getExchangeRates } = require("../services/forex");
const { getAIInsight } = require("../services/ai");

// ✅ Create a new router instance
const router = express.Router();

router.get("/forex-insight", async (req, res) => {
  const base = req.query.base || "USD";
  const rates = await getExchangeRates(base);

  if (!rates) {
    return res.status(500).json({ error: "Failed to fetch exchange rates" });
  }

  const aiAdvice = await getAIInsight(rates, base);

  res.json({
    base,
    rates,
    aiAdvice,
  });
});

// ✅ Export router so server.js can use it
module.exports = router;
