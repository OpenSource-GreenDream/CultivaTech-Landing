import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  imports: [
    TranslatePipe
  ],
  selector: 'app-team-section',
  styleUrl: './team-section.css',
  templateUrl: './team-section.html',
})
export class TeamSection {}
