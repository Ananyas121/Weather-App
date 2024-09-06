const Api_key = "8b718b4d2935b7625fe3a17cf8ced283";
 function getweather(){
    const city=document.getElementById("city-input").value;
    const weatherdeatils=document.getElementById("weatherdetails");
    if(city===''){
        weatherdeatils.innerHTML='<p>please enter a city name</p>'
        return;
    }
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${Api_key}`;
fetch(url).then(response=>response.json())
.then(data=>{
    if(data==='404'){
        weatherdeatils.innerHTML=`<p> city not found! please try again</p>`
    }
    else{
        console.log(data)
        weatherdeatils.innerHTML=`<h2>${data.name},${data.sys.country}</h2><p>Temperature:${data.main.temp}</p><p>Humidity:${data.main.humidity}</p>`
    }
})
.catch(error=>{
    weatherdeatils.innerHTML=`<p> error fetching details</p>`

})



}