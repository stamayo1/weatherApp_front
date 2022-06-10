import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http' 
import { environment } from 'src/environments/environment';

import { WeatherData } from '../../models/weather.models';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private url_api = `${environment.weather.api}`;
  private apiKey = `${environment.weather.apiKey}`;
 
  constructor(
    private client: HttpClient
  ) { }

  getByCity(city: string){
    

    return  this.client.get<WeatherData>(this.url_api,
    {
      params: { q: city, appid: this.apiKey, units: 'metric'}
    })
    .pipe(
      catchError((response: HttpErrorResponse) => {

        console.log(response); 

        let message = ""; 

        if(response.error.cod == "404"){

          message = "La ciudad no fue encontrada";

        }else if(response.error.cod == "401"){

          message = "Algo salio mal, en este momento no se puede consultar la información";
        }

        return throwError(() => new Error(message)); 
      })
    )
  }

  getByLocation(latitud: number, longitud: number){
    

    return  this.client.get<WeatherData>(this.url_api,
    {
      params: { lat: latitud, lon: longitud, appid: this.apiKey, units: 'metric'}
    })
    .pipe(
      catchError((response: HttpErrorResponse) => {

        console.log(response); 

        let message = ""; 

        if(response.error.cod == "404"){

          message = "La ciudad no fue encontrada";

        }else if(response.error.cod == "401"){

          message = "Algo salio mal, en este momento no se puede consultar la información";
        }

        return throwError(() => new Error(message)); 
      })
    )
  }


}
