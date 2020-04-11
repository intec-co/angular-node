import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication';
import { Data } from '../services/communication';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.scss']
})
export class Comp2Component implements OnInit {

  message: string;
  result: any;
  send: Data;
  constructor(private http: CommunicationService) {
    this.message = 'Mensaje creado en el constructor de COMPONENTE_2';
    this.send = { name: 'Jose', lastName: 'Perez' };
  }

  ngOnInit(): void {
    this.http.send('comp2', this.send).subscribe(rst => {
      this.result = rst;
    });
  }

}
