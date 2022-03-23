import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  transferValue: string = 'default';
  childInputVal: string = '';
  typeArrayValue: string = '';
  sentArrValueName: string = '';

  constructor() {}

  ngOnInit(): void {}

  getTransferedValue = (val: any) => {
    this.childInputVal = val;
  };

  getArrValeName = (val: string) => {
    this.sentArrValueName = val;
  };

  handleChooseArrayValue = (val: string): void => {
    this.typeArrayValue = val;
  };
}
