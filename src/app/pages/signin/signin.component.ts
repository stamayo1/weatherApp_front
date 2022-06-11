import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent{

  form: FormGroup ;
  error: boolean = false; 
  message_info: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 

    this.form = this.formBuilder.group({
      users_email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      users_password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]]
    });

  }

  onRetry(){
   
    this.error = false; 
  }

  signIn(event: Event) {

    event.preventDefault();

    const data_form = this.form.value;

    this.authService.signIn(data_form)
    .subscribe({
      next:(response)=> {

        if(response){
          
          this.router.navigate(['/weather']); 
          
        }else {
          this.error  = true; 
          this.message_info = "La cuenta no exite o la constraseña es incorrecta"; 
        }

      },
      error: (error)=> {

        this.error = false;
        this.message_info = "En este momento no se puede atender tu solicitud";
      }

    });
  }

  /**
   * Getters
   */
  get hasEmailErrorAndDirty(){

    return this.form.get('users_email')?.errors && (this.form.get('users_email')?.dirty || this.form.get('users_password')?.touched);;
  }

  get hasPasswordErrorAndDirty(){

    return this.form.get('users_password')?.errors && (this.form.get('users_password')?.dirty || this.form.get('users_password')?.touched);
  }
}
