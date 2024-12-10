const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");
const countryDetails = document.getElementById("details");
const countryFlag = document.getElementById("countryFlag");
const countryName = document.getElementById("countryName");
const capital = document.getElementById("capital");
const region = document.getElementById("region");
const population = document.getElementById("population");
const googleMapsLink = document.getElementById("googleMapsLink");

searchBtn.addEventListener("click", async () => {
  const country = countryInput.value.trim();
  if (!country) {
    alert("Please enter a country name.");
    return;
  }

  try {
    const response = await fetch(`https://restcountries.com/v3.1/name/${country}`);
    if (!response.ok) {
      throw new Error("Country not found!");
    }

    const data = await response.json();
    const countryInfo = data[0];

    countryFlag.src = countryInfo.flags.svg;
    countryName.textContent = countryInfo.name.common;
    capital.textContent = countryInfo.capital[0];
    region.textContent = countryInfo.region;
    population.textContent = countryInfo.population.toLocaleString();
    googleMapsLink.href = countryInfo.maps.googleMaps;

    countryDetails.classList.remove("hidden");
  } catch (error) {
    alert(error.message);
    countryDetails.classList.add("hidden");
  }
});
