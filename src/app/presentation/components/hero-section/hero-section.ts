import { Component } from '@angular/core';
import {HeroVisual} from '../hero-visual/hero-visual';
import {Hero} from '../hero/hero';

@Component({
  imports: [
    HeroVisual,
    Hero
  ],
  selector: 'app-hero-section',
  styleUrl: './hero-section.css',
  templateUrl: './hero-section.html',
})
export class HeroSection {}
