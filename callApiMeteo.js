// let cityInfo = city_info.name;
// console.log("city info : ", cityInfo);

const urlToFetch = "https://www.prevision-meteo.ch/services/json/bagnolet";
const cityName = document.getElementById("cityName");
const icon = document.getElementById("img");
const temperature = document.getElementById("tmp");

fetch(urlToFetch)
  .then((response) => response.json())
  .then((data) => {
    // const city_info = data.city_info;
    // const current_condition = data.current_condition;
    // <=>
    const { city_info, current_condition } = data;
    console.log("mes 2 variables", city_info, current_condition);
    cityName.textContent = city_info.name;
    icon.src = current_condition.icon;
    temperature.textContent = current_condition.tmp;
  });
