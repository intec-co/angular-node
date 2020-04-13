import { Component, OnInit } from '@angular/core';

@Component({
	templateUrl: './login.component.html',
	styles: [`.example-form {
  min-width: 150px;
  max-width: 500px;
  width: 100%;
}

.example-full-width {
  width: 100%;
}`]
})
export class LoginComponent implements OnInit {
	constructor() { }

	ngOnInit(): void { }
}
