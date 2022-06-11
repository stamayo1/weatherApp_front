import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http' 
import { environment } from 'src/environments/environment';

import { User, UserId, CreateUserDTO, LoginUserDTO } from '../../models/auth.models';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url_api = `${environment.url_auth}/api`;
 
  constructor(
    private client: HttpClient
  ) { }

  signIn(auth: LoginUserDTO){
    
    return this.client.post<UserId>(`${this.url_api}/login`, auth)
    .pipe(
      tap((response) => {

        if(response){
          
          localStorage.setItem("users_id", response.users_id );
        }
      })
    )
  }

  signUp(auth: CreateUserDTO){

    return this.client.post<User>(`${this.url_api}/usuario`, auth)
    .pipe(
      tap((response) => {

        if(response){

          localStorage.setItem("users_id", response.users_id );
        }
      })
    )

  }

}
