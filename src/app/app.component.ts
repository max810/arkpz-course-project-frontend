import { Component } from '@angular/core';
import { arkpzAPI } from './services/arkpz-api';
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'arkpz-coursework';
  constructor(public backendAPI: arkpzAPI) {
    if (!localStorage.getItem('local')) {
      localStorage.setItem('local', 'en');
    }
  }
}
