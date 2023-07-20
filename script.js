var API_KEY = "76a61f4a882e8a810941a75d3a40de94";
var fetchWeather_btn = document.getElementById('weather-btn');
var fetchGeo_btn = document.getElementById('geo-btn');
var weatherSearch = document.getElementById('search-weather');
var weatherData = document.getElementById('weather-data');
var weatherApi = "https://api.openweathermap.org/data/2.5/forecast?";
var geoApi = 'https://api.openweathermap.org/geo/1.0/direct?q=';
var Searchcity = document.getElementById("Search_city");
var currentdataDisp = document.getElementById("currentdisplay_data");
var dataDisp = document.getElementById("display_data");
var curdataDisp = document.getElementById("current_display_data");
var citySelect = document.querySelector(".city-ls");

var createLS = function () {
	const cityButton = document.createElement("button");
	cityButton.innerText = Searchcity.value;
	cityButton.setAttribute("class", "city-ls")
	weatherSearch.appendChild(cityButton);
	localStorage.setItem(cityButton, Searchcity.value);

}


function getGeoApi() {
	var city = Searchcity.value;

	let html = "";
	let currentWeatherhtml = "";
	createLS();
	fetch(`${geoApi}${city}&appid=${API_KEY}`)
		.then(response => response.json())
		.then(data => {
			fetch(`${weatherApi}lat=${data[0].lat}&lon=${data[0].lon}&appid=${API_KEY}`)
				.then(response => response.json())
				.then(data => {

					var i = 8;
					console.log(data);
					currentWeatherhtml += `<div class = "current-weather">
							<h2>
									${city.toUpperCase()}
							</h2>
							<h3>${data.list[0].dt_txt.substr(0, 10)}</h3>
                                <p>${"Temperature: " + data.list[0].main.temp + "K"}</p>
                                <p>${"Wind: " + data.list[0].wind.speed + "MPH"}</p>
                                <p>${"Humidity: " + data.list[0].main.humidity + "%"}</p>
                       </div>  
                    `;

					curdataDisp.innerHTML = currentWeatherhtml;

					html += `<h2 style="align-self:start;" >4 Days Forecast</h2>`




					do {
						html += ` 
							
							                
                            <div class="weather-name pb-2">                            	
                                <h3>${data.list[i].dt_txt.substr(0, 10)}</h3>
                                <p>${"Temperature: " + data.list[i].main.temp + "K"}</p>
                                <p>${"Wind: " + data.list[i].wind.speed + "MPH"}</p>
                                <p>${"Humidity: " + data.list[i].main.humidity + "%"}</p>
                            </div>
                        
                    `;

						i = i + 8;

						dataDisp.innerHTML = html;
						// console.log(data.list.main.temp);
					} while (i < 40)


				})
		})
	dataDisp.innerHTML = html;



}

fetchGeo_btn.addEventListener('click', getGeoApi);









