import { Component, Input } from '@angular/core';

@Component({
  selector: 'queaso-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  @Input() title: string;
  url: string = 'http://www.google.be';

}
