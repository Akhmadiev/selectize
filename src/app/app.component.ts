import { Component } from '@angular/core';
import { Selectize } from './selectize';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-selectize';
  counterValue = 1;
  selectizes: Selectize[] = [
    { id: 1, name: '1', checked: false },
    { id: 2, name: '2', checked: false }
  ];
}
