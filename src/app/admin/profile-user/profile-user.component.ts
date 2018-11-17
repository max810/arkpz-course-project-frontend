import { Component, OnInit } from '@angular/core';
import { arkpzAPI, CrashRecord, CrashReport, Coordinates, CrashReportDangerLevel } from 'src/app/services/arkpz-api';

@Component({
  selector: 'app-profile-user',
  templateUrl: './profile-user.component.html',
  styleUrls: ['./profile-user.component.css']
})
export class ProfileUserComponent implements OnInit {

  constructor(public backend: arkpzAPI) { }

  ngOnInit() {
    //  this.backend.accrCrashSendCrashPost(CrashReport)
  }
}
