import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication';
import { Data } from '../services/communication';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html'
})
export class Comp1Component implements OnInit {
  message: string;
  result: any;
  send: Data;

  constructor(private http: CommunicationService) {
    this.message = 'Mensaje creado en el constructor de comp1';
    this.send = { name: 'Jose', lastName: 'Perez' };
  }

  ngOnInit(): void {
    this.http.send('comp1', this.send).subscribe(rst => {
      this.result = rst;
    });
  }
}
