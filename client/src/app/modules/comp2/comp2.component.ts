import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/core/services/comm.service';

@Component({
	templateUrl: './comp2.component.html'
})
export class Comp2Component implements OnInit {
	commText: string;
	constructor(comm: CommService) {
		this.commText = comm.getText();
	}

	ngOnInit(): void { }
}
