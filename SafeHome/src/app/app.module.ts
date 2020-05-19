// import { BrowserModule } from '@angular/platform-browser';
// import { Routes, RouterModule } from '@angular/router';

// import { NgModule } from '@angular/core';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// // import { AppRoutingModule } from './app-routing.module.';
// import { AppComponent } from './app.component';
// import { HeaderComponent } from './pages/header/header.component';
// import { GamePageComponent } from './pages/game-page/game-page.component';
// import { FormPageComponent } from './pages/form-page/form-page.component';
// import { GamerDetailsPageComponent } from './pages/gamer-details-page/gamer-details-page.component';
// import { LandingPageComponent } from './pages/landing-page/landing-page.component';
// import { BuildCharacterPageComponent } from './pages/build-character-page/build-character-page.component';
// import { ChoosePlacePageComponent } from './pages/choose-place-page/choose-place-page.component';
// import { HomeChoicePageComponent } from './pages/home-choice-page/home-choice-page.component';
// import { LoginPageComponent } from './pages/login-page/login-page.component';

// @NgModule({
//   declarations: [
//     // AppComponent,
//     // HeaderComponent,
//     // LoginPageComponent,
//     // GamePageComponent,
//     AppComponent,
//     HeaderComponent,
//     LoginPageComponent,
//     GamePageComponent,
//     FormPageComponent,
//     GamerDetailsPageComponent,
//     LandingPageComponent,
//     ChoosePlacePageComponent,
//     BuildCharacterPageComponent,
//     HomeChoicePageComponent
//   ],
//   imports: [
//     BrowserModule,
//     RouterModule,
//     // AppRoutingModule,
//     FormsModule,
//     ReactiveFormsModule
//   ],
 
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }









// const routes: Routes = [
//   { path: '', component: LoginPageComponent },
//   { path: 'login', component: LoginPageComponent },
//   { path: 'game', component: GamePageComponent },
//   { path: 'gamer', component: GamerDetailsPageComponent },
//   { path: 'form', component: FormPageComponent },
//   { path: 'landing', component: LandingPageComponent },
//   { path: 'build', component: BuildCharacterPageComponent },
//   { path: 'places', component: ChoosePlacePageComponent },
//   { path: 'home', component: HomeChoicePageComponent },

// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })


// export class AppRoutingModule { }



import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './pages/header/header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { GamerDetailsPageComponent } from './pages/gamer-details-page/gamer-details-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { ChoosePlacePageComponent } from './pages/choose-place-page/choose-place-page.component';
import { BuildCharacterPageComponent } from './pages/build-character-page/build-character-page.component';
import { HomeChoicePageComponent } from './pages/home-choice-page/home-choice-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginPageComponent,
    GamePageComponent,
    FormPageComponent,
    GamerDetailsPageComponent,
    LandingPageComponent,
    ChoosePlacePageComponent,
    BuildCharacterPageComponent,
    HomeChoicePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


