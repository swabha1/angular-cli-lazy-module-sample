import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './shared.component.html',
  styleUrls: ['./shared.component.css']
})
export class SharedComponent implements OnInit {

  count:number = 0;
  constructor() { }

  ngOnInit() {
    console.log('Initialize!!!');
    this.count++;
  }


}
