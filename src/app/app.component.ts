import { Component, OnInit } from '@angular/core';
import { UrlAnalyzerService } from './services/url-analyzer.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


  constructor(private urlAnalyzerService:UrlAnalyzerService){

  }

  ngOnInit(): void {
    this.urlAnalyzerService.getStats('https://google.com').subscribe({
      next:(res)=>{
        console.log(res)
      }
    })
  }
  title = 'url-analyzer-client';
}
