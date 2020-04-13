import { Component, OnInit } from '@angular/core';
import { CommService } from 'src/app/core/services/comm.service';

@Component({
	selector: 'app-comp1',
	templateUrl: './comp1.component.html',
	styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {
	commText: string;
	constructor(comm: CommService) {
		this.commText = comm.getText();
	}

	ngOnInit(): void { }
}
