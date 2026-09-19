import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  imports: [
    TranslatePipe
  ],
  selector: 'app-about-section',
  styleUrl: './about-section.css',
  templateUrl: './about-section.html',
})
export class AboutSection {}
