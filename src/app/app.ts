import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {Toolbar} from './presentation/components/toolbar/toolbar';
import {Hero} from './presentation/components/hero/hero';
import {HeroSection} from './presentation/components/hero-section/hero-section';
import {MainPage} from './presentation/view/main-page/main-page';

@Component({
  imports: [
    MainPage
  ],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('landing-page');
}
