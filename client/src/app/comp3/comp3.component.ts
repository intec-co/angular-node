import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication';
import { DataComp3 } from '../services/communication';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {
  message: string;
  result: any;
  send: DataComp3;

  constructor(private http: CommunicationService) {
    this.message = 'Mensaje creado en el constructor de Comp3';
    this.send = { a: 1, b: 5};
   }

  ngOnInit(): void {
    this.http.sendComp3('comp3', this.send).subscribe(rst => {
      this.result = rst;
    });

  }

}
