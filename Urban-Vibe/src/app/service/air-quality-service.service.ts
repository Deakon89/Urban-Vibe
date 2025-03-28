// air-quality.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AirQualityService {
  private apiUrl = 'https://api.api-ninjas.com/v1/airquality?city=';

  constructor(private http: HttpClient) { }

  getAirQuality(city: string): Observable<any> {
    return this.http.get(`${this.apiUrl}${city}`, {
      headers: { 'X-Api-Key': 'R1gFjqO55ETvQCU6Ybpz8w==5xViwFuXrR9IP5f1' }
    });
  }
}
