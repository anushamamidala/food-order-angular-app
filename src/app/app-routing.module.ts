import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressComponent } from './address/address.component';
import { CartComponent } from './cart/cart.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { SettingsComponent } from './settings/settings.component';
import { TrackOrderComponent } from './track-order/track-order.component';
import { 
  AuthGuardService as AuthGuard 
} from '../app/Services/auth-guard.service';

const routes: Routes = [
  { path: '', component: HomeComponent,canActivate: [AuthGuard]  },
  {path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  {
    path: 'settings', component: SettingsComponent,
    canActivate: [AuthGuard],
    children: [{
      path: 'address', component: AddressComponent, canActivate: [AuthGuard] 
    }]
  },
  { path: 'cart', component: CartComponent, canActivate: [AuthGuard]  },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]  },
  { path: 'track-order', component: TrackOrderComponent ,canActivate: [AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
