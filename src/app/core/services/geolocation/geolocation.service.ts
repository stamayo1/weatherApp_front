import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  geoPosition(): Promise<any> {
    /**
     * Conseguir la longitud y latitud del usuario
     */
    const options = {
      enableHightAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }; 

    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject, options)
    })
      
    
  }
}
