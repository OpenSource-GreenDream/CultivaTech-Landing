import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  imports: [
    TranslatePipe
  ],
  selector: 'app-hero-visual',
  styleUrl: './hero-visual.css',
  templateUrl: './hero-visual.html',
})
export class HeroVisual {}
