const apiKey = 'secret';
const location = 'Villach';

try {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, {
        headers: {
            accept: 'application/json'
        },
        method: 'GET'
    });
    const data = await response.json();
    console.log(`It's ${data.main.temp} degrees in ${data.name}!`);
} catch (error) {
    console.error('Could not get weather data:', error);
}

await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}`, {
    headers: {
        accept: 'application/json'
    },
    method: 'GET'
}).then(response => {
    console.log(`It's ${response.main.temp} degrees in ${response.name}!`);
}, error => { // something went wrong
    console.error('Could not get weather data:', error);
});