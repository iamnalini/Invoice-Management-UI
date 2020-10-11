import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
 
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  allfield_error=false;
  invalid_error=false;
    submitted = false;


    constructor(private formBuilder: FormBuilder,private authService: AuthService, private router: Router) { }

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            userName: ['', Validators.required],
            role: ['', Validators.required],
            email: ['', [Validators.required, Validators.email]],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            this.allfield_error=true;
            return;
        }

        this.authService.register(this.registerForm.value).subscribe((res) => {
          if(res['Warning']){
            this.allfield_error = false;
            this.invalid_error = true
          }
          else {
            this.router.navigateByUrl('');
          }
        });
    }

}

