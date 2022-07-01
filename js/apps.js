"use strict";

const wrapper = document.querySelector(".weather-left");
const elInput = document.querySelector(".input");
const elForm = document.querySelector(".form");


const renderCountries = function(data){
  const html = `
  <h1 class="weather-heading">${data.name}</h1>
  <p class="weather-country">${data.sys.country}:</p>
  <p class="weather">${Math.round(data.main.temp)}<span>°C</span></p>
  <p class="weather-speed">Speed: ${Math.round(data.wind.speed)}</p>

  <div class="temp">
    <p class="min-temp">Max temperature: ${Math.round(data.main.temp_min)}<span>°C</span></p>
    <p class="max-temp">Max temperature: ${Math.round(data.main.temp_max)}<span>°C</span></p>
  </div>
  `
  wrapper.innerHTML = null;
  wrapper.insertAdjacentHTML("beforeend", html)
}

elForm.addEventListener("submit", (evt) => {
  evt.preventDefault()
  let inputValue = elInput.value;

  elInput.value = null;

  const getCountrise = async function(country){
    const request = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)

    const data = await request.json()

    renderCountries(data)
  }


  getCountrise(inputValue)

})
