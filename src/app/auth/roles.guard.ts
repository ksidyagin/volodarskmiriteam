import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardGuard implements CanActivate {
  constructor( public router: Router) {}
  canActivate(route: ActivatedRouteSnapshot): boolean {
    let flag = true;
    let role = localStorage.getItem('token');
    if(!role) {
      alert('Нужно войти в систему, чтобы продолжить!');
      flag = false;
    }

    const expectedRole: string = route.data.expectedRole;
    const token = localStorage.getItem('token');

    if (
      expectedRole.search(" "+ token + " ") == -1
    ) {
      alert(`Для входа в данный раздел нужны соответствующие права!`);
      flag = false;
    }
    return flag;
  }
  
}


export enum UserRole {
    COMPANY = '1',
    USER = '0'
  }
