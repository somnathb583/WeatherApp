const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "c87d347bbcmsh697cf7d1c38962cp16825djsnba2c96422575",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const connectionString = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?'

fetch(
	"https://geolocation-db.com/json/"
)
.then(latlon => latlon.json())
.then(latlon => {
	latAndlon = "lat="+latlon.latitude+"&lon="+latlon.longitude
	FetchDetails(latAndlon);
})
.catch(err => console.log(err))

function SearchWeatherByCity() {
	var x = document.getElementById("cityName").value;
	document.getElementById("City").innerText = x;
	cityQuery = "city="+x;
	FetchDetails(cityQuery);
}

function FetchDetails(string) {
	fetch(
		connectionString+string,
		options
	  )
		.then((response) => response.json())
		.then((response) => {
		  console.log("response", response);
		  cloud_pct.innerHTML =  response.cloud_pct;
		  temp.innerHTML =  response.temp;
		  humidity.innerHTML =  response.humidity;
		  min_temp.innerHTML =  response.min_temp;
		  max_temp.innerHTML =  response.max_temp;
		  wind_speed.innerHTML =  response.wind_speed;
		  wind_degrees.innerHTML =  response.wind_degrees;
		})
		.catch((err) => console.error(err));
}