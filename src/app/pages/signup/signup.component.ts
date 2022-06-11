import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent{

  form: FormGroup ;
  error: boolean = false; 
  message_info: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { 

    this.form = this.formBuilder.group({
      users_name: ['', [Validators.required]],
      users_email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      users_password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      repeatPassword: [null,[Validators.required, Validators.minLength(8), Validators.maxLength(10)]]
    });

  }

  onRetry(){
   
    this.error = false; 
  }

  signUp(event: Event) {

    event.preventDefault();

    const data_form = this.form.value;

    this.authService.signUp(data_form)
    .subscribe({
      next:(response)=> {

        if(response){
          
            this.router.navigate(['/weather']); 
          
        }else {
          this.error  = true; 
          this.message_info = "En este momento no fue posible registrar tu cuenta"; 
        }

      },
      error: (error)=> {
        this.error  = true; 
        this.message_info = "Algo salio mal, en este momento no te podemos antender";
      }

    });
  }

  /**
   * Getters
   */
  get hasNameErrorAndDirty(){
    return this.form.get('users_name')?.errors && (this.form.get('users_name')?.dirty || this.form.get('users_name')?.touched);
  }

  get hasEmailErrorAndDirty(){
    return this.form.get('users_email')?.errors && (this.form.get('users_email')?.dirty || this.form.get('users_email')?.touched);
  }

  get hasPasswordErrorAndDirty(){
    return this.form.get('users_password')?.errors && (this.form.get('users_password')?.dirty || this.form.get('users_password')?.touched);
  }

  get hasRepeatPasswordDirty(){
    return this.form.get('repeatPassword')?.dirty;
  }

  get isEqualPassword(){
    return this.form.get('users_password')?.value !== this.form.get('repeatPassword')?.value;
  }

}
