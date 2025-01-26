const hoursElement = document.getElementById('hours')
const minutesElement = document.getElementById('minutes')
const secondsElement = document.getElementById('seconds')

const dayElement = document.getElementById('day')
const monthElement = document.getElementById('month')
const yearElement = document.getElementById('year')

const apiKey = '7188e77b07e4e929436bd298176ea04f';
const cidade = 'São José dos Pinhais';
const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&units=metric&appid=${apiKey}`

fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    const weatherDiv = document.getElementById('previsao-tempo');
    if (!weatherDiv) {
      throw new Error('Element previsao-tempo not found');
    }
    weatherDiv.innerHTML = `
      <h2>Previsão do Tempo para ${cidade}</h2>
      <p>Temperatura: ${data.main.temp}°C</p>
      <p>Condições: ${data.weather[0].description}</p>
    `;
  })
  .catch(error => {
    console.error('Erro:', error);
    const weatherDiv = document.getElementById('previsao-tempo');
    if (weatherDiv) {
      weatherDiv.innerHTML = '<p>Erro ao carregar previsão do tempo</p>';
    }
  });


function newTime() {
    const date = new Date();

    const hours = date.getHours()
    const minutes = date.getMinutes()
    const seconds = date.getSeconds()

    hoursElement.textContent = fixTime(hours)
    minutesElement.textContent = fixTime(minutes)
    secondsElement.textContent = fixTime(seconds)
}


function fixTime(time) {
    return time < 10 ? '0' + time : time
}
setInterval(newTime, 1000)

function newDate() {
    const date = new Date();

    const day = date.getDate()
    const month = date.getMonth() + 1
    const year = date.getFullYear()

    dayElement.textContent = fixTime(day)
    monthElement.textContent = fixTime(month)
    yearElement.textContent = year
}
setInterval(newDate, dayElement)

