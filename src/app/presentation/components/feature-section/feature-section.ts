import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  imports: [TranslatePipe],
  selector: 'app-feature-section',
  styleUrl: './feature-section.css',
  templateUrl: './feature-section.html',
})
export class FeatureSection {}
