import { Component } from '@angular/core';
import {OnInit} from "@angular/core";
import {Router} from "@angular/router";

// @ts-ignore
@Component({
  selector: 'region-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})

export class HeadComponent implements OnInit{
  profile:any;
  constructor(private router: Router) {
  }
  ngOnInit(): void {
    if (localStorage.getItem('token')==null){
      this.router.navigate(['auth/login']);
    }
    else{
      switch (localStorage.getItem('token')) {
        case "0":
           this.profile='profile-people';
           break;
        case '1':
          this.profile='profile-company';
          break;
        case '2':
          this.profile='profile-admin';
          break;
        default:
          this.router.navigate(['auth/login']);
          break;
      }
    }
  }
  profClick(){
    if (localStorage.getItem('token')=='2'){
      this.router.navigate([this.profile+'/profile-admin'])
    }
    else {
      this.router.navigate([this.profile + '/profile'])
    }
  }
  exit(){
    localStorage.clear()
    this.router.navigate(['auth/login']);
  }
}


