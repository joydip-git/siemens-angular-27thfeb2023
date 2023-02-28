import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Welcome to Angular'
  divWidth = 100
  initial = 0
  constructor() {
    console.log('App Component created')
  }
  changeWidth(newWidth: string) {
    this.divWidth = Number(newWidth)
  }
}
