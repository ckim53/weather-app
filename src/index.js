import './styles.css'

async function getWeather(location) {
    try {
        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/'+ location +'?unitGroup=us&key=M2ZHQRNGG9X3VZB6YYYGJ5TKY&contentType=json', {
        'method': 'GET',
        'headers': {},
        'mode': 'cors'});

        const data = await response.json();
        const weather = getInfo(data);
        displayInfo(weather);
        userInput.blur();
    }
    catch (err) {
        console.error(err);
    }
}

const displayInfo = (weather) => {
    const location = document.getElementById('location');
    const conditions = document.getElementById('conditions');
    const time = document.getElementById('time');
    const feelslike = document.getElementById('feelslike');
    const description = document.getElementById('description');
    location.textContent = weather.address;
    conditions.textContent = weather.conditions
    time.textContent = convertMilitaryToStandard(weather.time);
    feelslike.textContent = 'Feels like: ' + weather.feelslike;
    description.textContent = weather.description;
}

const getInfo = (data) => {
    return { 
        address: capitalizeFirstLetter(data.address), 
        conditions: data.currentConditions.conditions,
        time: data.currentConditions.datetime,
        feelslike: data.currentConditions.feelslike,
        description: data.description
    }
}

const userInput = document.getElementById('user-location');
document.getElementById('user-form').addEventListener('submit', (event) =>
    {
        event.preventDefault();
        getWeather(userInput.value);
    }
);

function capitalizeFirstLetter(string) {
    if (string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    return string;
}

function convertMilitaryToStandard(time) {
    const [hours, minutes] = time.split(':');
    const hrs = parseInt(hours);
    const period = hrs >= 12 ? 'PM' : 'AM';
    const standardHour = hrs % 12 === 0 ? 12 : hrs % 12;
    const formattedHour = ('0' + standardHour).slice(-2);
    return `${formattedHour}:${minutes} ${period}`;
}