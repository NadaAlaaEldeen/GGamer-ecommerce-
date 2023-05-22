import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeCardsComponent } from './components/home-cards/home-cards.component';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegisterComponent } from './components/register/register.component';
import { FormMainInfoComponent } from './components/register/form-main-info/form-main-info.component';
import { FormDiscordComponent } from './components/register/form-discord/form-discord.component';
import { FormCharacterComponent } from './components/register/form-character/form-character.component';
// import { GameCardComponent } from './components/game-card/game-card.component';
// import { FiltersComponent } from './components/filters/filters.component';
import { AllGamesComponent } from './components/all-games/all-games.component';
import { ChartComponent } from './components/chart/chart.component';
import { LoginComponent } from './components/login/login.component';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

import { ForbiddenComponent } from './components/errors/forbidden/forbidden.component';
import { UnauthorizedComponent } from './components/errors/unauthorized/unauthorized.component';
import { ToastrModule } from 'ngx-toastr';
import { AdminOnlyComponent } from './components/admin-only/admin-only.component';
import { UserOnlyComponent } from './components/user-only/user-only.component';
import { AuthOnlyComponent } from './components/auth-only/auth-only.component';
import { OrdersComponent } from './components/orders/orders.component';
import { OrderItemComponent } from './components/order-item/order-item.component';
import { UserNavComponent } from './components/user-nav/user-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeCardsComponent,
    NavbarComponent,
    HomeComponent,
    FooterComponent,
    RegisterComponent,
    FormMainInfoComponent,
    FormDiscordComponent,
    FormCharacterComponent,
    // GameCardComponent,
    // FiltersComponent,
    AllGamesComponent,
    ChartComponent,
    LoginComponent,
    CartComponent,
    CartItemComponent,
    LoginComponent,
    ForbiddenComponent,
    UnauthorizedComponent,
    AdminOnlyComponent,
    UserOnlyComponent,
    AuthOnlyComponent,
    OrdersComponent,
    OrderItemComponent,
    UserNavComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass: "toast-bottom-right",
      preventDuplicates: true
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class HomeCardsModule { }
