import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  registerForm: any;
  constructor(
    private router: Router, private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
    });
  }

  goToMain() {
    this.router.navigate(['', 'system', 'main']);
  }

  onSubmit() {
    if(this.registerForm.invalid){
      console.log("invalid form");
      return;
    }

    let email_form = this.registerForm.get('email').value;
    let password_form = this.registerForm.get('password').value;
    let loginForm = {email: email_form, password: password_form}
    this.http.get<any>('https://flask-api-miriteam.herokuapp.com/auth?login='+email_form+'&password='+password_form).subscribe((data: any) => {
      console.log(data);
      if(data.success === true){
        localStorage.setItem('token', data.type);
        if(data.type == '0'){
          console.log("invalid form");
          this.router.navigate(['', 'profile-people', 'profile']);
        }
        else if (data.type == '1'){
          this.router.navigate(['', 'profile-company', 'profile-company']);
        }
        else if (data.type == '2'){
          this.router.navigate(['', 'profile-admin', 'profile-admin']);
        }
      }
      else{
        return;
      }

    });
  }

}
