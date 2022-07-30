  
    function getWeather(){
    
        let cityName = document.querySelector("#cityName").value
        
           axios.get(`https://api.weatherapi.com/v1/current.json?key=e2a30f06b0054ef09a7172742222907&q=${cityName}&aqi=no`)
     .then(function (response) {
       
    let weatherData = response.data
    
   
    
    document.querySelector("#countData").innerHTML = `Country:'${weatherData.location.country}'`
    document.querySelector("#regionData").innerHTML = `Region: ${weatherData.location.region}`
    document.querySelector("#cityData").innerHTML = `Location:   ${weatherData.location.name}`
    document.querySelector("#cityTemp").innerHTML = `Temperature:  ${weatherData.current.temp_c}&#8451;`
    document.querySelector("#cityCondition").innerHTML = `Area Condition:  ${weatherData.current.condition.text}`
    document.querySelector("#cityDate").innerHTML = `Date and Time:    ${weatherData.location.localtime}`
    
    document.querySelector("#cityName").innerHTML = ""
   
       console.log(weatherData);
     })
     .catch(function (error) {
       // handle error
       console.log(error);
     })
    
    
       }
       
       