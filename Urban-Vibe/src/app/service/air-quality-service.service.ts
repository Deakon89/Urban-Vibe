// air-quality.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment/enviroment';



@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  private apiUrl = 'https://api.api-ninjas.com/v1/airquality?city=';
  apiKey = environment.apikeyAir;

  constructor(private http: HttpClient) { }

  getAirQuality(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${city}`, {
      headers: { 'X-Api-Key': this.apiKey }
    });
  }
}
