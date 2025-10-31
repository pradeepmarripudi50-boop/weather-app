async function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");

  if (city === "") {
    resultDiv.innerHTML = "⚠️ Please enter a city name.";
    return;
  }

  const apiKey = "64dc40e2aae43dbd12c10ad513278bb0"; // replace this later
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("City not found");

    const data = await response.json();
    resultDiv.innerHTML = `
      <h2>${data.name}</h2>
      <p>🌡️ ${data.main.temp}°C</p>
      <p>☁️ ${data.weather[0].description}</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = "❌ City not found. Please try again.";
  }
}
