import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/core/services/weather/weather.service';
import { WeatherData } from 'src/app/core/models/weather.models';
import { GeolocationService } from 'src/app/core/services/geolocation/geolocation.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  currentWeather!: WeatherData;
  error: boolean = false; 
  loading: boolean = false; 
  message: string = ""; 

  constructor(
    private weatherService: WeatherService, 
    private geolocationService: GeolocationService
  ) { }

  ngOnInit(): void {
    this.geoLocation();
  }



  onSearch(search: string){
    /**
     * Buscar el clima actual de una ciudad
     */
    this.loading = true; 
    this.error = false; 
    
    this.weatherService.getByCity(search)
    .subscribe({
      next: (response) => {

        this.loading = false; 
        this.error = false; 
        this.currentWeather = response; 
      }, 
      error: (error) => {
        
        this.loading = false; 
        this.error = true; 
        this.message = error.message;
      }
    }); 

  }
  
  private async geoLocation(): Promise<void>{
    
    try{
        const result  = await this.geolocationService.geoPosition();

        const lat = result.coords.latitude; 
        const long = result.coords.longitude; 

        this.weatherService.getByLocation(lat, long)
          .subscribe({
            next: (response) => {

              this.loading = false; 
              this.error = false; 
              this.currentWeather = response; 
            }, 
            error: (error) => {
              
              this.loading = false; 
              this.error = true; 
              this.message = error.message;
            }
          }); 

    }catch(error){

      this.error = true; 
      this.message = "Debes realizar alguna busqueda";
    }
  }
}
