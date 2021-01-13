import React, { Component } from 'react';
import Form from './components/Form/Form';
import Wether from './components/Wether/Wether';
import './App.css';

const API_KEY = "b2e26bd56a3fd62153f8b54b1443b17e";

class App extends Component {

  state = {
      temprature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:''
  }

  getwether = async (e) => {
    e.preventDefault()

    const city    = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api     = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data    = await api.json();
    if(city && country){
      this.setState({
        temprature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:''
      })
    }else{
      this.setState({
        temprature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'The Inter Date Is Not Valied'
      })
    }
    console.log(data)
  }

  render(){
    return (
      <div className="wrapper">
        <div className="form_container">
          <Form getwether={this.getwether} />
          <Wether
                temprature= {this.state.temprature}
                city= {this.state.city}
                country= {this.state.country}
                humidity= {this.state.humidity}
                description= {this.state.description}
                error= {this.state.error}
          />
        </div>
      </div>
    )
  }
}

export default App;
