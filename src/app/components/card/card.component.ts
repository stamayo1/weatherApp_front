import { Component, Input} from '@angular/core';
import { WeatherData } from 'src/app/core/models/weather.models';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  data!: WeatherData; 
  url: string = "../../../assets/img/mar.jpg";

  @Input('weather') set changeWeather(data: WeatherData){
    
    this.data = data; 
    
    if(this.data?.weather[0]?.main){
      this.url = `../../../assets/img/${this.data?.weather[0]?.main}.jpg`;
    }
    
  }

  constructor() { }

}
