const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function getAIInsight(rates, base = "USD") {
  try {
    const currencies = Object.entries(rates)
      .slice(0, 5) // show only top 5 for debugging
      .map(([currency, rate]) => `${currency}: ${rate}`)
      .join(", ");

    const prompt = `You are an AI currency and economy advisor. 
    The base currency is ${base}. 
    Current exchange rates are: ${currencies}. 
    Provide short investment or economic insights.`;

    // 🟢 Debug log
    console.log("=== getAIInsight called ===");
    console.log("Base currency:", base);
    console.log("Sample rates:", currencies);
    console.log("Prompt being sent to OpenAI:\n", prompt);

    const completion = await client.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
    });

    const advice = completion.choices[0].message.content;

    // 🟢 Debug log response
    console.log("AI Response (first 200 chars):", advice.substring(0, 200));

    return advice;
  } catch (error) {
    console.error("❌ OpenAI error in getAIInsight:", error.message || error);
    return "Sorry, I couldn’t generate insights right now.";
  }
}

module.exports = { getAIInsight };
