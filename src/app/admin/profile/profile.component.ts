import { Component, OnInit } from '@angular/core';
import { arkpzAPI, CrashReport, Coordinates, CrashReportDangerLevel, CrashRecord } from 'src/app/services/arkpz-api';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(public backend: arkpzAPI) { }
  crashes: CrashRecord[] = [];
  // showCrashReportSentMessage: boolean;
  crashReportSentMessage: string;
  getUserName() { return localStorage.getItem("user_name"); }

  ngOnInit() {
    this.backend.accrCrashStatGet().subscribe(x => this.crashes = x);
    this.crashReportSentMessage = null;
  }


  sendCrashReport() {
    let report = new CrashReport();
    report.coords = new Coordinates();
    report.coords.latitude = 50.0127107;
    report.coords.longitude = 36.2259922;
    report.dangerLevel = CrashReportDangerLevel._0;
    this.backend.accrCrashSendCrashPost(report).subscribe(x => {
      this.crashReportSentMessage = `Report sent! ` + x;
    });
  }

  isAdmin(): boolean {
    let profileType = localStorage.getItem("profile_type");
    // console.log("Profile: " + profileType);
    return profileType == "admin";
  }
}
