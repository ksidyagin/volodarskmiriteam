import { HttpClient } from '@angular/common/http';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reg-users',
  templateUrl: './reg-users.component.html',
  styleUrls: ['./reg-users.component.css']
})
export class RegUsersComponent implements OnInit {
  registerForm:any;
  login: any = "";
  password = "";
  constructor(private http:HttpClient, private router: Router, private change: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      ogrn: new FormControl(null, [Validators.required]),
      inn: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    if(this.registerForm.invalid){
      console.log("invalid form");
      return;
    }

    let name = this.registerForm.get('name').value;
    let ogrn = this.registerForm.get('ogrn').value;
    let inn = this.registerForm.get('inn').value;
    this.http.get<any>('https://flask-api-miriteam.herokuapp.com/register-comp?inn='+inn+'&ogrn='+ogrn+'&name='+name).subscribe((data: any) => {
      console.log(data);
      if(data.success === true){
        this.login = data.login;
        this.password = data.password;
        this.change.detectChanges();
      }
      else{
        alert('Данные введены некорректно!');
      }

    });
  }
}
