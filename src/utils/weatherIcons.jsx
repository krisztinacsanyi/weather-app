import {
  WiThermometer,
  WiSunrise,
  WiSunset,
  WiCloudy,
  WiDaySunny,
  WiRainMix,
  WiRain,
  WiSnow,
  WiFog,
  WiThunderstorm,
} from 'weather-icons-react'
export const getWeatherIcon = (searchIcon) => {
  switch (searchIcon) {
    case 'Thunderstorm':
      return <WiThunderstorm size={96} color={'#3893B1'} />
    case 'Drizzle':
      return <WiRainMix size={96} color={'#3893B1'} />
    case 'Rain':
      return <WiRain size={96} color={'#3893B1'} />
    case 'Snow':
      return <WiSnow size={96} color={'#3893B1'} />
    case 'Atmosphere':
      return <WiFog size={96} color={'#3893B1'} />
    case 'Clouds':
      return <WiCloudy size={96} color={'#3893B1'} />
    case 'Thermostat':
      return <WiThermometer size={32} color={'#073468'} />
    case 'Sunrise':
      return <WiSunrise size={32} color={'#073468'} />
    case 'Sunset':
      return <WiSunset size={32} color={'#073468'} />
    case 'Clear':
    default:
      return <WiDaySunny size={96} color={'#3893B1'} />
  }
}
