// it contains class with methods and properties

import { Component } from '@angular/core';

@Component({
  //selector tells us where this component is going to be embedded
  selector: 'app-root',
  //html file being used
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //here you put properties of your components
  //and methods like custom ones or lifecycle ones
  //recommended to add types to your functions and properties like below's string
}
