import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutpage',
  templateUrl: './aboutpage.component.html',
  styleUrls: ['./aboutpage.component.css']
})
export class AboutpageComponent implements OnInit {
  local: string;
  localText = {
    "en": {
      "mainText": `ACCR stands for Automatic Car Crash Response system. 
      The user presses the button - a record about the crash is received and a drone is send to investigate the situation.`,
    },
    "ua": {
      "mainText":  `АСТРА - автоматична система точнго реагування на аварії.
      АСТРА - це проект швидкого реагування на аварії.
      Користувач натискає на кнопку, відправляється інформація про поточні координати, прилітає дрон і фіксує ситуацію.`,
    }
  };
  constructor() { }

  ngOnInit() {
    this.local = localStorage.getItem('local');
  }

}
