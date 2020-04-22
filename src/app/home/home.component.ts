import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h1>Welcome to the Recipe Book!</h1>
	<br/>
	Powered by <a href="https://www.ashishkumarkc.com" target="_blank">Ashish's Web</a>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
