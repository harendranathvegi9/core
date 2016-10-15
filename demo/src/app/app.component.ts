import {Component, OnInit} from '@angular/core';
import {Analytics} from './shared/analytics/analytics';

@Component({
  selector: 'ngbd-app',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  constructor(private _analytics: Analytics) {
  }

  ngOnInit(): void {
    this._analytics.trackPageViews();
  }
}
