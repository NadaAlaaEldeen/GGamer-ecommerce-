import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { OrdersComponent } from './components/orders/orders.component';
import { LoginComponent } from './components/login/login.component';
import { ForbiddenComponent } from './components/errors/forbidden/forbidden.component';
import { UnauthorizedComponent } from './components/errors/unauthorized/unauthorized.component';
import { AdminOnlyComponent } from './components/admin-only/admin-only.component';
import { UserOnlyComponent } from './components/user-only/user-only.component';
import { AuthOnlyComponent } from './components/auth-only/auth-only.component';
import { AdminGuard } from './guards/admin.guard';
import { UserGuard } from './guards/user.guard';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'games',component:AllGamesComponent},
  {path:'orders',component:OrdersComponent},
  {path:'login',component:LoginComponent},

  // Error routes to be handled
  {path:'403',component:ForbiddenComponent},
  {path:'401',component:UnauthorizedComponent},

  // Checking auth demo routes
  {path:'admin',component:AdminOnlyComponent, canActivate:[AdminGuard]},
  {path:'user',component:UserOnlyComponent, canActivate:[UserGuard]},
  {path:'auth',component:AuthOnlyComponent, canActivate:[AuthGuard]},

  // Other PAths
  {path:'**', component:HomeComponent}

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
