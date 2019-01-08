import { Component, OnInit } from '@angular/core';
import { arkpzAPI, Drone } from 'src/app/services/arkpz-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-drone',
  templateUrl: './edit-drone.component.html',
  styleUrls: ['./edit-drone.component.css'],
})
export class EditDroneComponent implements OnInit {
  constructor(public backend: arkpzAPI, private formBuilder: FormBuilder,
    public router: Router, private route: ActivatedRoute) { }

  editForm: FormGroup;
  droneId: number;
  local: string;
  ngOnInit() {
    this.editForm = this.formBuilder.group({
      id: [''],
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      status: ['', Validators.required],
    });
    this.editForm.controls['id'].disable();

    this.route.params.subscribe(params => {
      this.droneId = +params['droneId'];
      this.backend.accrDronesByIdGet(this.droneId).subscribe(drone => {
        this.editForm.setValue(drone);
        console.log("Received drone:" + drone);
      },
        error => {
          this.router.navigate(['/profile']);
        })
    });

    this.local = localStorage.getItem('local');
  }
  onSubmit() {
    let drone = new Drone();
    drone.init(this.editForm.value);
    drone.id = this.droneId; // just in case
    console.log(drone);

    this.backend.accrDronesByIdPut(this.droneId, drone).subscribe(x => {
      console.log(`Changed ${x}`);
      this.router.navigate(['/profile']);
    });
  }
}
