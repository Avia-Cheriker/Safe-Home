import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './pages/header/header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { GamerDetailsPageComponent } from './pages/gamer-details-page/gamer-details-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BuildCharacterPageComponent } from './pages/build-character-page/build-character-page.component';
import { ChoosePlacePageComponent } from './pages/choose-place-page/choose-place-page.component';
import { HomeChoicePageComponent } from './pages/home-choice-page/home-choice-page.component';




const routes: Routes = [
  { path: '', component: LoginPageComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'game', component: GamePageComponent },
  { path: 'gamer', component: GamerDetailsPageComponent },
  { path: 'form', component: FormPageComponent },
  { path: 'landing', component: LandingPageComponent },
  { path: 'build', component: BuildCharacterPageComponent },
  { path: 'places', component: ChoosePlacePageComponent },
  { path: 'home', component: HomeChoicePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

