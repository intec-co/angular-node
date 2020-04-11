import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication';
import { Data } from '../services/communication';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  message: string;
  result: any;
  send: Data;
  constructor(private http: CommunicationService) {
    this.message = 'Mensaje creado en el constructor de child';
    this.send = { name: 'Jose', lastName: 'Perez' };
  }

  ngOnInit(): void {
    this.http.send('child', this.send).subscribe(rst => {
      this.result = rst;
    });
  }
}
