import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    // Add more form controls and validations as needed
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // You can keep this method empty if not needed
  }
}

// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-user-form',
//   templateUrl: './user-form.component.html',
//   styleUrls: ['./user-form.component.scss']
// })
// export class UserFormComponent implements OnInit {
//   userForm!: FormGroup; // Definite assignment assertion

//   constructor(private fb: FormBuilder) {}

//   ngOnInit(): void {
//     this.userForm = this.fb.group({
//       name: ['', [Validators.required]],
//       email: ['', [Validators.required, Validators.email]],
//       // Add more form controls and validations as needed
//     });
//   }
// }

