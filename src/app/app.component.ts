import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `<queaso-home [title]="myTitle"></queaso-home>`
})
export class AppComponent {

  myTitle: string = 'Queaso';

  constructor() {}

}
