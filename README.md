# Weather-Dashboard

## Table of contents

- [Overview](#overview)
 - [The challenge](#the-challenge)
  - [User Story](#user-story)
  - [Acceptance Criteria](#acceptance-criteria)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)


## Overview

### The challenge
This application uses a third-party API, OpenWeather One Call to access weather data. I use the fetch method with specific parameters for the API call. The data is used to build a  weather dashboard that runs in the browser and feature dynamically updated HTML and CSS using javaScript and jQuery.

Use the [OpenWeather One Call API](https://openweathermap.org/api/one-call-api) to retrieve weather data for cities. Read through the documentation for setup and usage instructions. You will use `localStorage` to store any persistent data. For more information on how to work with the OpenWeather API, refer to the [Full-Stack Blog on how to use API keys](https://coding-boot-camp.github.io/full-stack/apis/how-to-use-api-keys).

### User Story

AS A traveler
I WANT to see the weather outlook for multiple cities
SO THAT I can plan a trip accordingly

### Acceptance Criteria

GIVEN a weather dashboard with form inputs
WHEN I search for a city
THEN I am presented with current and future conditions for that city and that city is added to the search history
WHEN I view current weather conditions for that city
THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
WHEN I view the UV index
THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
WHEN I view future weather conditions for that city
THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, the wind speed, and the humidity
WHEN I click on a city in the search history
THEN I am again presented with current and future conditions for that city

### Screenshot

![](./Assets/screenshot.png)

### Links

- Solution URL: [Prefessional README Generator](https://github.com/Monkonjay/Password-Generator.git)
- Live Site: [Test the Project](https://monkonjay.github.io/Password-Generator/)

## My process

### Built with

- Javascript
- jQuery
- CSS
- HTML5


### What I learned

The main lesson from this app is using api keys to make api calls and dynamically rendering the selected data to the browser. 


```Javascript
generateBtn.addEventListener("click", writePassword);
```


## Author

- Website - [Robert M Greene]( https://monkonjay.github.io/Portfolio/)
- Github - [Monkonjay](https://github.com/Monkonjay)
