
import { Component } from 'react';

import WeatherForm from './componentes/Weather-form';
import WeatherInfor from './componentes/Weather-infor';

import {API_KEY} from "./keys"

class App extends Component {

 

  state = {
    temperatura: '',
    temperatura_max: '',
    temperatura_min: '',
    descripcion: '',
    humedad: '',
    velocidad_del_viento: 0,
    ciudad: '',
    pais: '',
    zona_horaria:'',
    visibilidad:'',
    error: null,
    cod: null
};

    getWeather = async e => {
      e.preventDefault();
      const {ciudad, pais} = e.target.elements;
      const ciudadValor = ciudad.value;
      const paisValor = pais.value;
      
      if (ciudadValor && paisValor){
         
      const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${ciudadValor},${paisValor}&appid=${API_KEY}&units=metric`;
      const respuesta = await fetch(API_URL);
      const datos = await respuesta.json();
      const cod = datos.cod
      if (cod !== 200){
        this.setState({
          cod: 'City not Fund'
        });
      }
      console.log(respuesta)

      this.setState({
        temperatura: datos.main.temp,
        temperatura_max: datos.main.temp_max,
        temperatura_min: datos.main.temp_min,
        descripcion: datos.weather[0].description, 
        humedad: datos.main.humidity,
        velocidad_del_viento: datos.wind.speed,
        ciudad: datos.name,
        pais: datos.sys.country,
        zona_horaria: datos.timezone,
        visibilidad: datos.visibility,
        error: null        
      });
      } else {
        this.setState({error:'please enter a valid city and a valid country'})
      }

      
     
     
  

}
      
   

  render(){
    return(
      <div className='grid h-screen grid-cols-2'>
        
        <WeatherForm getWeather={this.getWeather} />
  
        <WeatherInfor {...this.state} />
      </div>
    )
  }
}
export default App