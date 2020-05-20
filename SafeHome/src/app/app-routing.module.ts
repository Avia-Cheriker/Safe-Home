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
import { CreateFamilyPageComponent } from './pages/create-family-page/create-family-page.component';
import { CreateCharacter1PageComponent } from './pages/create-character1-page/create-character1-page.component';
import { CreateCharacter2PageComponent } from './pages/create-character2-page/create-character2-page.component';
import { MyFamilyPageComponent } from './pages/my-family-page/my-family-page.component';
import { MyFamilyPage2Component } from './pages/my-family-page2/my-family-page2.component';




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
  { path: 'createFamily', component: CreateFamilyPageComponent },
  { path: 'createCharacter1', component: CreateCharacter1PageComponent },
  { path: 'createCharacter2', component: CreateCharacter2PageComponent },
  { path: 'myFamily', component: MyFamilyPageComponent },
  { path: 'myFamily2', component: MyFamilyPage2Component },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

