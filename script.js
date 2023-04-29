var city="";
const options={
    method:"GET",
    headers:{
        'X-RapidAPI-Key': '67494e6b29msh84011a1c42c22d7p147c51jsnbeff1eb148fb',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};
function wether(b,temp,city){
    const url="https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city;
    fetch(url,options)
        .then(response => response.json())
        .then((response) => {
            if(b){
                temp[0].innerHTML=response.cloud_pct;
                temp[1].innerHTML=response.feels_like;
                temp[2].innerHTML=response.humidity;
                temp[3].innerHTML=response.temp;
                temp[4].innerHTML=response.max_temp;
                temp[5].innerHTML=response.min_temp;
                temp[6].innerHTML=response.wind_speed;
                temp[7].innerHTML=response.wind_degrees;
            }
            else{
                const te=response.temp;
                temp[0].innerHTML=response.temp+" C";
                if(te<=23)
                    temp[0].style.color="green";
                else if(te>23 && te<=35)
                    temp[0].style.color="yellow";
                else if(te>35 && te<=45)
                    temp[0].style.color="orange";
                else
                    temp[0].style.color="red";
                temp[1].innerHTML="Max Temp:"+response.max_temp;
                temp[2].innerHTML="Min Temp:"+response.min_temp;
                temp[3].innerHTML="Humidity:"+response.humidity;
                temp[4].innerHTML="Wind Speed:"+response.wind_speed;
                temp[5].innerHTML="Sun Rise: 05:39:06";
                
                temp[6].innerHTML="Sun Rise: 18:50:55";
            }
        })
    .catch(err => window.alert(err));
}


function result(){
    var temp=document.getElementsByClassName("delhi_wether")
    res=wether(true,temp,"delhi");

    temp=document.getElementsByClassName("bengalore_wether");
    res=wether(true,temp,"Bangalore");
    
    temp=document.getElementsByClassName("mumbai_wether");
    res=wether(true,temp,"Mumbai");

    temp=document.getElementsByClassName("chennai_wether");
    res=wether(true,temp,"Chennai");
    
    temp=document.getElementsByClassName("hyderabad_wether");
    res=wether(true,temp,"Hyderabad");

    temp=document.getElementsByClassName("kolkata_wether");
    res=wether(true,temp,"Kolkata");

    temp=document.getElementsByClassName("ahmedabad_wether");
    res=wether(true,temp,"Ahmedabad");
    
    temp=document.getElementsByClassName("jaipur_wether");
    res=wether(true,temp,"Jaipur");
}

function valid(){
    let x=document.getElementById("secific_search").value;
    if(x!=""){
        wether(false,temp,x);
        document.getElementById("city").innerHTML=x;
    }
}

function CityName(){
    fetch('http://www.geoplugin.net/json.gp')
    .then(response => response.json())
    .then(data => {
      const cityName = data.geoplugin_city;
      console.log(cityName);
      wether(false,temp,cityName);
      document.getElementById("city").innerHTML=cityName;
      city=cityName;
    })
    .catch(error => console.error(error));
}
function f1(){
    wether(false,temp,city);
    document.getElementById("city").innerHTML=city;
}