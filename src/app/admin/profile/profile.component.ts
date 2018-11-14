import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  isUser(): boolean {
    let profileType = localStorage.getItem("profile_type");
    console.log("Profile: " + profileType);
    return profileType == "user";
  }
}
