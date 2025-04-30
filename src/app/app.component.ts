import {Component, OnInit} from '@angular/core';
import {UrlAnalyzerService} from './services/url-analyzer.service';
import {FormControl, Validators} from '@angular/forms';
import {UrlAnalyzerModel} from './models/url-analyzer-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {


  urlInputFormControl = new FormControl('', [Validators.required]);
  data: UrlAnalyzerModel | null = null;
  isLoading = false;

  constructor(private urlAnalyzerService: UrlAnalyzerService) {

  }

  ngOnInit(): void {

  }


  getStats() {

    this.data = null;

    if (this.urlInputFormControl.invalid) {
      return;
    }

    this.isLoading = true;

    const url = this.urlInputFormControl.value!;

    this.urlAnalyzerService.getStats(url).subscribe({
      next: (res) => {
        this.data = res;
        this.isLoading = false;
      },
      error: (err) => {
        console.error(err);
        this.isLoading = false;
      }
    })
  }
}
