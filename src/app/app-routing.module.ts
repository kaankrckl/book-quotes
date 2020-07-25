import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignupComponent } from './components/signup/signup.component';
import { AuthGuard } from './auth.guard'

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [ AuthGuard ]},
  {path: 'registration', component: SignupComponent},
  {path: '', component: LandingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
