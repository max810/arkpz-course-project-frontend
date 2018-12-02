import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-not-found',
  templateUrl: './page-not-found.component.html',
  styleUrls: ['./page-not-found.component.css']
})
export class PageNotFoundComponent implements OnInit {
  local: string;
  localText = {
    "en": {
      "title": "Page not found",
      "pageNotFound": "Oops! Page not found",
      "sorry": "We are sorry, but the page you requested was not found",
    },
    "ua": {
      "title": "Сторінка не знайдена",
      "pageNotFound": "Упс. Ми не знайшли сторінку.",
      "sorry": "Пробачте, але сторінки із такою адресою не інсує",
    }
  };

  constructor() { }

  ngOnInit() {
    this.local = localStorage.getItem('local');
  }

}
