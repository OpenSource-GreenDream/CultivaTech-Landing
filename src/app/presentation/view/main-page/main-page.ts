import { Component } from '@angular/core';
import {Toolbar} from '../../components/toolbar/toolbar';
import {HeroSection} from '../../components/hero-section/hero-section';
import {FeatureSection} from '../../components/feature-section/feature-section';
import {AboutSection} from '../../components/about-section/about-section';
import {TeamSection} from '../../components/team-section/team-section';
import {Footer} from '../../components/footer/footer';

@Component({
  imports: [
    Toolbar,
    HeroSection,
    FeatureSection,
    AboutSection,
    TeamSection,
    Footer
  ],
  selector: 'app-main-page',
  styleUrl: './main-page.css',
  templateUrl: './main-page.html',
})
export class MainPage {}
