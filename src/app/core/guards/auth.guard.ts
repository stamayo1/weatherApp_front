import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    //Verifica si en el localstorage hay almacenado un ID de usuario
    // Esto se puede cambiar por un JWT y validar su vigencia

    const token_users_id = localStorage.getItem('users_id');
    return token_users_id ? true: false;
  }
  
}
