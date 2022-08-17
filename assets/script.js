// store the api key
const APIKey = '9fbe80c13b6b732c188bcdc2593b068c'

// store the current date
const currentDate = moment().format("ddd MMM Do");

// target HTML elements
const searchBtnEl = $("#searchBtn");
const searchDivEl = $("#searchDiv");
let citySearchedEl = $("#citySearched");
let searchHistoryEl = $("#searchHistory");
let cardHeaderEl= $(".card-header");

let latitude = '';
let longitude = '';
let featuredCityEl = $("#featured-city");
let dateEl = $("#date");
let iconEl = $("#icon");
let weatherDivEl = $("#weatherDiv");
let temperatureEl = $("#cur-temp");
let windEl = $("#wind");
let humidityEl = $("#humidity");
let uvIndexEl = $("#uvIndex");
let fiveDayForecastEl = $("#fiveDayforecast");
let fiveDayCardEl = $("#fiveDayCard");




// save searched cities to local storage 
function storeCity(city) {
    let cityArray = []
    if (localStorage.cities) {
      cityArray = JSON.parse(localStorage.cities);
    }
    
    if (cityArray.includes(city)) {
      return
    }
    cityArray.unshift(city);
    localStorage.cities = JSON.stringify(cityArray);
    getCities();
  }
  
  // retrieve searched cities from local storage
  function getCities() {
    if (!localStorage.cities) {
      return
    }
    let cityArray = JSON.parse(localStorage.cities);
    searchedEl.empty()
    for (let i = 0; i < cityArray.length ; i++) {
      cityBtn = $("<button>").text(cityArray[i]).addClass("btn btn-city");
      searchHistoryEl.append(cityBtn);
    
    }
}



function getCityCoordinates(targetCity) {
//   API url to get the city coordinates
  var cityCordinatesUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${targetCity}&limit=1&units=imperial&appid=${APIKey}`;

  fetch(cityCordinatesUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
        console.log(data);
        latitude = data[0].lat;
        longitude = data[0].lat;
        let nameOfCity = data[0].name;
        citySearchedEl.text = nameOfCity;

        return (latitude, longitude, nameOfCity);
    })
    .catch(function(){
        alert("Sorry, City not found");
        return [];
    });
}


// Get forecast given the coordinates
function getForecast(lat,lon) {

    var forecastUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&appid=${APIKey}`;
                       
    fetch(forecastUrl)
      .then(function (response) {
        return response.json();           
      })
      .then(function (data) {      
        console.log(data);
        let currentTemp = data.current.temp;
        let currentWindSpeed = data.current.wind_speed;
        let currentHumidity = data.current.humidity;
        let currentUvIndex = data.current.uvi
        // let currentWeatherIcon = data.current.weather[0].icon;
        
        let UVSpan = $("<span>")
        // let iconImageEl = $("<img id='cur-icon'>");
        // iconImageEl.attr('src', `./assets/css/icons/${curWeatherIcon}.png`);
        // iconImageEl.replaceWith(iconImageEl);
        // iconImageEl.appendTo(curIconEl);
  
        temperatureEl.text(`Temperature: ${currentTemp} °F`)
        windEl.text(`Wind Speed: ${currentWindSpeed} mph`)
        humidityEl.text(`Humidity: ${currentHumidity} %`)
        uvIndexEl.text(`UV Index: `)
        UVSpan.text(currentUvIndex)
        UVSpan.appendTo(uvIndexEl)
        if (currentUvIndex < 2) {
          UVSpan.addClass("badge bg-success")
        } else if (currentUvIndex < 5) {
          UVSpan.addClass("badge bg-warning")
        } else {
          UVSpan.addClass("badge bg-danger")
        }      
        getFiveDayForecast(data);           
      });   
    }

  // Function that creates separate cards to display the 5 day weather forecast
function getFiveDayForecast(data) {
  
    fiveDayForecastEl.empty();
    laterDates = date;
    for (let i = 0; i < 5; i++) {
    //   let forecastCard = $("<div class='card sm-card d-inline col-lg-4 m-5'>");
      let fiveDayCardHeader = $("<div class='card-header bg-warning'>");
      let fiveDayCardBody = $("<div class='card-body'>");
      
      laterDates = moment(laterDates).add(1, 'd').format("ddd MMM Do");
      fiveDayCardHeader.text(laterDates);
     
      let icon = data.daily[i].weather[0].icon;
      let temperature = data.daily[i].temp.day;    
      let wind = data.daily[i].wind_speed;
      let humidity = data.daily[i].humidity;    
         
      fiveDayCardBody.replaceWith(forecastCardBody);
      fiveDayCardBody.append(`<img src="./assets/css/icons/${icon}.png"> <br>`).css({"text-align":"center"});
      fiveDayCardBody.append(`Temperature: ${temperature} °F <br>`);
      fiveDayCardBody.append(`Wind Speed: ${wind} m/h <br>`);
      fiveDayCardBody.append(`Humidity: ${humidity} %`);
  
    //   fiveDayForecastEl.append(forecastCard);
      fiveDayCardEl.append(fiveDayCardHeader);
      fiveDayCardEl.append(fiveDayCardBody);    
    }
}


// Add click envent to searchBtn
searchBtnEl.click(function(e){
    e.preventDefault();
  
    let userCity = citySearchedEl.val();
    citySearchedEl.val('');
  
    if (userCity){
        getCityCoordinates(userCity)
        .then((data) => {
            if (data.length) {
                dateEl.text(`(${date})`); 
                //   $("#cur-icon").remove();
                weatherDivEl.removeClass("d-none");
                weatherDivEl.addClass("d-block");
  
                getForecast(latitude,longitude);
            }
        });
    }  
})












