document.getElementById("fetchBtn").addEventListener("click", async () => {
  const base = document.getElementById("base").value.trim() || "USD";

  try {
    const response = await fetch(`/forex-insight?base=${base}`);
    const data = await response.json();

    if (data.error) {
      alert("❌ Error: " + data.error);
      return;
    }

    // Update rates table
    const tbody = document.querySelector("#ratesTable tbody");
    tbody.innerHTML = "";
    Object.entries(data.rates)
      .slice(0, 15)
      .forEach(([currency, rate]) => {
        const row = `<tr><td>${currency}</td><td>${rate}</td></tr>`;
        tbody.insertAdjacentHTML("beforeend", row);
      });

    // Update AI insights
    document.getElementById("aiAdvice").innerText = data.aiAdvice;
  } catch (err) {
    console.error("Frontend Error:", err);
    alert("⚠️ Failed to fetch forex insights. Check server logs.");
  }
});
