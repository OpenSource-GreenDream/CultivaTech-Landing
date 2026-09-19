import { Component } from '@angular/core';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  imports: [
    TranslatePipe
  ],
  selector: 'app-toolbar',
  styleUrl: './toolbar.css',
  templateUrl: './toolbar.html',
})
export class Toolbar {
  onButtonDemo(){
    //TODO: Implement button to translate to FrontEnd.
  }
}
