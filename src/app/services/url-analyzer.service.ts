import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlAnalyzerService {

  private readonly API_URL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getStats(url: string): Observable<any> {
    return this.http.get(`${this.API_URL}/url-analyzer?url=${url}`)
  }
}
