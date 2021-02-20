const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById('submitBtn');

const city_name = document.getElementById('city_name');
const temp_value = document.getElementById('temp_value');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector('.middle_layer');

const getInfo = async(event) => {
    event.preventDefault();

    let cityVal = cityName.value;

    if(cityVal === ""){
        city_name.innerText = `Please enter the city name before search`;
        datahide.classList.add("data_hide");
    }else{

        try{
           
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=46400c460e2f5ef6299c063abe1ea928&units=metric`
            console.log(url);
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            
            city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
            temp_value.innerText = arrData[0].main.temp;
            const tempMood = arrData[0].weather[0].main;
            console.log(tempMood);

            //condition to check sunny or cloudy
            if (tempMood == "Clear") {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
            } else if (tempMood == "Clouds") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempMood == "Rain") {
            temp_status.innerHTML =
                "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
            temp_status.innerHTML =
                "<i class='fas  fa-sun' style='color:#eccc68;'></i>";

            }
            datahide.classList.remove('data_hide');
            cityVal = "";
           
       
        }catch{
            cityVal = " ";
            datahide.classList.add("data_hide");
            city_name.innerText =  `Please enter the correct city name`;
        }
        
    }
}

submitBtn.addEventListener('click', getInfo);

