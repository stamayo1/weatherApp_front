import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './pages/weather/weather.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';

import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '', 
    component: SigninComponent
  },
  {
    path: 'signup', 
    component: SignupComponent
  },
  {
    path: 'weather', 
    // canActivate: [AuthGuard],
    component: WeatherComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
