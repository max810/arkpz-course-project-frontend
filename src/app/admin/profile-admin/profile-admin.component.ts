import { Component, OnInit } from '@angular/core';
import { arkpzAPI, Drone } from 'src/app/services/arkpz-api';
import { Router } from '@angular/router';
import { componentRefresh } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'app-profile-admin',
  templateUrl: './profile-admin.component.html',
  styleUrls: ['./profile-admin.component.css']
})
export class ProfileAdminComponent implements OnInit {
  local: string;
  localText = {
    "en": {
      "addDrone": "ADD DRONE",
      "editDrone": "EDIT",
      "deleteDrone": "DELETE",
      "noDrones": "No drones yet",
      "confirmDelete": "Are you sure you want to delete drone №"
    },
    "ua": {
      "addDrone": "ДОДАТИ ДРОНА",
      "editDrone": "РЕДАГУВАТИ",
      "deleteDrone": "ВИДАЛИТИ",
      "noDrones": "Поки що немає дронів",
      "confirmDelete": "Ви впевнені, що бажаєте видалити дрона №"
    }
  };

  constructor(public backend: arkpzAPI, public router: Router) { }
  drones: Drone[] = [];
  ngOnInit() {
    this.local = localStorage.getItem('local');
    this.getDrones();
  }

  getDrones() {
    this.backend.accrDronesGet().subscribe(x => {
      console.log(x);
      this.drones = x;
    });
  }
  addDrone() {
    this.router.navigate(['/add-drone']);
  }
  editDrone(drone: Drone) {
    console.log(drone);
    this.router.navigate(['/edit-drone', drone.id]);
  }
  deleteDrone(drone: Drone) {
    if (confirm(`${this.localText[this.local].confirmDelete}${drone.id}?`)) {
      this.backend.accrDronesByIdDelete(drone.id).subscribe(deleted_drone => {
        console.log(`Deleted drone: ${deleted_drone}}`);
        this.getDrones();
      })
    }
  }
}
