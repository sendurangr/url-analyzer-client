import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UrlAnalyzerService {

  constructor(private http: HttpClient) { }

  // backend : https://8pmmtnd3yw.ap-south-1.awsapprunner.com
  // frontend : https://d2tiqwdij4sc1n.cloudfront.net
  getStats(url: string): Observable<any> {
    return this.http.get(`https://8pmmtnd3yw.ap-south-1.awsapprunner.com/url-analyzer?url=${url}`)
  }

  // getStats(url: string): Observable<any> {
  //   return this.http.get(`http://localhost:8080/url-analyzer?url=${url}`)
  // }
}
