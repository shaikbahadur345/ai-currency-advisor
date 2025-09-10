const axios = require("axios");
require("dotenv").config();

async function getExchangeRates(base = "USD") {
  try {
    const url = `https://v6.exchangerate-api.com/v6/${process.env.EXCHANGERATE_API_KEY}/latest/${base}`;
    const { data } = await axios.get(url);

    if (data && data.conversion_rates) {
      return data.conversion_rates;
    } else {
      console.error("Unexpected response:", data);
      return null;
    }
  } catch (error) {
    console.error("Error fetching exchange rates:", error.response?.data || error.message);
    return null;
  }
}

module.exports = { getExchangeRates };
