import { Component, OnInit } from '@angular/core';
import { arkpzAPI, Drone } from 'src/app/services/arkpz-api';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-drone',
  templateUrl: './add-drone.component.html',
  styleUrls: ['./add-drone.component.css'],

})
export class AddDroneComponent implements OnInit {

  constructor(public backend: arkpzAPI, private formBuilder: FormBuilder,
    public router: Router) { }

  addForm: FormGroup;
  local: string;

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      latitude: ['', Validators.required],
      longitude: ['', Validators.required],
      status: ['', Validators.required],
    });

    this.local = localStorage.getItem('local');
  }

  onSubmit() {
    let drone = new Drone();
    drone.init(this.addForm.value);
    drone.id = 0;
    console.log(drone);
    this.backend.accrDronesPost(drone).subscribe(x => {
      console.log(`Added ${x}`);
      this.router.navigate(['/profile']);
    });
  }

}
