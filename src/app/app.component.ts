import { Component, OnInit } from '@angular/core';
import { TitleService } from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = '';
  constructor(private titleService: TitleService) { }

  ngOnInit() {
    this.titleService.onChangeRouteTitle();
  }
}
