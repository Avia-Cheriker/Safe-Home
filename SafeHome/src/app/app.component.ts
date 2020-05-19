import { Component } from '@angular/core';

import { HeaderComponent } from './pages/header/header.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { GamePageComponent } from './pages/game-page/game-page.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { GamerDetailsPageComponent } from './pages/gamer-details-page/gamer-details-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';
import { BuildCharacterPageComponent } from './pages/build-character-page/build-character-page.component';
import { ChoosePlacePageComponent } from './pages/choose-place-page/choose-place-page.component';
import { HomeChoicePageComponent } from './pages/home-choice-page/home-choice-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SafeHome';
}
