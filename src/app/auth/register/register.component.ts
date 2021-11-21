import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  registerForm: any;
  API = 'https://flask-api-miriteam.herokuapp.com';
  constructor(private router: Router,
    private http: HttpClient, private changeDetection: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      firstName: new FormControl(null, [Validators.required]),
      lastName: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
      ]),
      snils: new FormControl(null, [Validators.required, Validators.maxLength(14)]),
      patronymic: new FormControl(null, [Validators.required]),
      dateBirth: new FormControl("", [Validators.required]),
      placement: new FormControl(null, [Validators.required]),
      sex: new FormControl(null, [Validators.required]),
      agree_checkbox: new FormControl(null, [Validators.required])
    });
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    let email = this.registerForm.get('email').value;
    let password = this.registerForm.get('password').value;
    let sex;
    let firstName = this.registerForm.get('firstName').value;
    let lastName = this.registerForm.get('lastName').value;
    let patronymic = this.registerForm.get('patronymic').value;

    if (this.registerForm.get('sex').value === '1') {
      sex = true;
    }
    else if (this.registerForm.get('sex').value === '0') {
      sex = false;
    }
    let snils = this.registerForm.get('snils').value;

    let birthday = this.registerForm.get('dateBirth').value;
    console.log(birthday);

    let placement = this.registerForm.get('placement').value;


    this.http.get<any>(this.API + '/register-user?firstname='+firstName+'&lastname='+lastName+'&patronymic='+patronymic+'&email='+email+'&password='+password+'&sex='+sex+'&snils='+snils+'&databirth='+birthday+'&placement='+placement).subscribe((data:any)=>{
      console.log(data);
    })

    console.log('OK');
    this.goToLogin();
  }

  goToLogin() {
    this.router.navigate(['', 'auth', 'login']);
  }

}
