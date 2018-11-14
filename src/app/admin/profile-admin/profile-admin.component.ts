import { Component, OnInit } from '@angular/core';
import { arkpzAPI, Drone } from 'src/app/services/arkpz-api';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {

  constructor(public backend: arkpzAPI) { }
  drones: Drone[];
  ngOnInit() {
  }

  getDrones() {
    this.backend.accrDronesGet().subscribe(x => console.log(x));
  }
}
