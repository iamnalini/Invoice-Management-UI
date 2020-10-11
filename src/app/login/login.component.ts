import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }
  
  loginForm: FormGroup;
  submitted = false;
  allfield_error=false;
  invalid_error=false;

  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });

  }

  get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            this.allfield_error = true;
            return;
        }
        this.authService.signIn(this.loginForm.value).subscribe((res)=>{
            if(res['Warning']){
              this.allfield_error=false;
              this.invalid_error = true;
            }
            else{
              localStorage.setItem('id',res['id']);
              if(res['role']=='user')
                this.router.navigateByUrl('userview');
              else if(res['role']=='admin')
                this.router.navigateByUrl('adminview');
            }
            
        });
    }



}
