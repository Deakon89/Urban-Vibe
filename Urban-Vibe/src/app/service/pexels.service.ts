import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../enviroment/enviroment';

@Injectable({
  providedIn: 'root'
})
export class PexelsService {
  private apiUrl = 'https://api.pexels.com/v1/search';
  private apiKey = environment.apiKeyPexels; 

  constructor(private http: HttpClient) {}

  searchPhotos(query: string, perPage: number = 1, page: number = 1): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: this.apiKey
    });
    const newQuery = `${query} city`;
    const params = new HttpParams()
      .set('query', newQuery)
      .set('per_page', perPage.toString())
      .set('page', page.toString());

    return this.http.get(this.apiUrl, { headers, params });
  }
}
