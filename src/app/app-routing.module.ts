import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './pages/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { EmailVerificationComponent } from './pages/email-verification/email-verification.component';
import { AuthGuard } from './core/guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/profile',
    pathMatch: 'full',
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'email-verification',
    component: EmailVerificationComponent
  },
  {
    path: '*',
    redirectTo: '/profile'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
