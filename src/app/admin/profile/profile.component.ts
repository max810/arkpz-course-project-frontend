import { Component, OnInit } from '@angular/core';
import { arkpzAPI, CrashReport, Coordinates, CrashReportDangerLevel, CrashRecord } from 'src/app/services/arkpz-api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  local: string;
  localText = {
    "en": {
      "prevReports": "Previous Reports",
      "noCrash": "NO CRASH RECORDS FOR",
      "sendCrash": "SEND CRASH REPORT",
      "date": "Date",
      "time": "Time",
      "droneAssigned": "Drone assigned",
      "droneCoords": "Drone coords",
    },
    "ua": {
      "prevReports": "Попередні аварії",
      "noCrash": "НЕМАЄ ЗАПИСІВ АВАРІЙ ДЛЯ",
      "sendCrash": "ВІДПРАВИТИ ЗАПИС ПРО АВАРІЮ",
      "date": "Дата",
      "time": "Час",
      "droneAssigned": "Дрона назначено",
      "droneCoords": "Координати дрона",
    }
  };

  constructor(public backend: arkpzAPI) { }
  crashes: CrashRecord[] = [];
  // showCrashReportSentMessage: boolean;
  crashReportSentMessage: string;
  getUserName() { return localStorage.getItem("user_name"); }

  ngOnInit() {
    this.local = localStorage.getItem('local');
    this.backend.accrCrashStatGet().subscribe(x => {
      this.crashes = x;
      console.log(this.crashes);
    });

    this.crashReportSentMessage = null;
  }


  sendCrashReport() {
    let report = new CrashReport();
    report.coords = new Coordinates();
    report.dangerLevel = CrashReportDangerLevel.low;
    navigator.geolocation.getCurrentPosition(x => {
      report.coords.latitude = x.coords.latitude;
      report.coords.longitude = x.coords.longitude;
      console.log(report.coords);
      this.backend.accrCrashSendCrashPost(report).subscribe(x => {

        this.crashReportSentMessage = localStorage.getItem('local') == 'en' ? `Report sent!` : `Повідомлення відправлено`;

      });
    },
      error => {
        report.coords.latitude = 50.0127107;
        report.coords.longitude = 36.2259922;
        this.backend.accrCrashSendCrashPost(report).subscribe(x => {
          this.crashReportSentMessage = localStorage.getItem('local') == 'en' ? `Report sent!` : `Повідомлення відправлено` + x;
        });
      });
  }

  isAdmin(): boolean {
    let profileType = localStorage.getItem("profile_type");
    // console.log("Profile: " + profileType);
    return profileType == "admin";
  }
}
