import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CommService {
	getText() {
		return '<b>CommService</b>';
	}
}
