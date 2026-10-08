import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';
import {LanguageSwitcher} from '../language-switcher/language-switcher';

@Component({
  imports: [
    TranslatePipe,
    LanguageSwitcher
  ],
  selector: 'app-toolbar',
  styleUrl: './toolbar.css',
  templateUrl: './toolbar.html',
})
export class Toolbar {
  onButtonDemo(){
    window.location.href = 'https://cultivatech-frontend.onrender.com';
  }
}
