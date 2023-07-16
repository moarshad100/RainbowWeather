console.log("hello world");

var API_KEY = "";
var fetchWeather_btn = document.getElementById('weather-btn');
var fetchGeo_btn = document.getElementById('geo-btn');
var weatherSearch = document.getElementById('search-weather');
var weatherData = document.getElementById('weather-data');
var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?";
var geoApi = 'http://api.openweathermap.org/geo/1.0/direct?q=';
var Searchcity = document.getElementById("Search_city");






function getWeatherApi(){
	fetch(`${weatherApi}&lat=-37.840935&lon=144.946457&appid=${API_KEY}`)
	.then(response=> response.json())
	.then(data=>{
		console.log(data);
		// console.log(data.list.main.temp);
	})
}

function getGeoApi(){
	var city = Searchcity.value;
	fetch(`${geoApi}${city}&appid=${API_KEY}`)
	.then(response=> response.json())
	.then(data=>{
		console.log(data[0].lat);
		console.log("lat " + data[0].lat);
		console.log("lon " + data[0].lon);

	})
}


fetchWeather_btn.addEventListener('click',getWeatherApi);
fetchGeo_btn.addEventListener('click',getGeoApi);





