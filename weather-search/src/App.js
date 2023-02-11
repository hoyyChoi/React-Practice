import { useEffect,useState } from 'react';
import './App.css';
import WeatherBox from './WeatherBox';
import WeatherButton from './WeatherButton';
import 'bootstrap/dist/css/bootstrap.min.css';
import ClipLoader from "react-spinners/ClipLoader";


// 앱이 실행되자마자 현재 위치기반 날씨가 나온다.
// 날씨정보는 도시, 섭씨 ,화씨, 날씨상태.
// 지역별 버튼 날씨 누를 수 있다. .
// 다시 g현재 날씨 누르면 돌아온다.
// 버튼 누를 때마다 로딩 스피너 등장


function App() {
  
  const [weather,setWeather] = useState(null)
  const [city,setCity] = useState("")
  const cityArray=['paris','new york','hanoi','seoul','tokyo']
  const [loading,setLoading] = useState(false)

  const getCurrentLocation = () =>{
    navigator.geolocation.getCurrentPosition((position)=>{
      const lat = position.coords.latitude
      const lon  = position.coords.longitude
      getWeatherCurrentLocation(lat,lon)
    }) 
  }

  const getWeatherCurrentLocation = async(lat,lon) =>{
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=53004077073f969526a1f51fbeaa75b8&units=metric`
    setLoading(true)
    let response = await fetch(API_URL)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  const getWeatherCity = async(city) =>{
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=53004077073f969526a1f51fbeaa75b8&units=metric`
    setLoading(true)
    let response = await fetch(API_URL)
    let data = await response.json()
    setWeather(data)
    setLoading(false)
  }

  useEffect(()=>{
    if(city==""){
      getCurrentLocation()
    }else{
      getWeatherCity(city)
    }
    
  },[city])

  return (
    <div>
      {loading? <div class="container">
        <ClipLoader
          color="red"
          loading={loading}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>:<div className='container'>
      <WeatherBox weather={weather}/>
      <WeatherButton cityArray={cityArray} setCity={setCity} selectCity={city}/>
    </div>}
      
    </div>
  );
}

export default App;
