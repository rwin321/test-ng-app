import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() 
  transferedValue: string = ''
  @Input()
  chosenType: string = ''
  @Output()
  transferDataEmitter = new EventEmitter()
  @Output()
  sendArrValName = new EventEmitter()
  testValues: Array<{type: string, name: string}> = [
    {type:'color', name: 'green'}, 
    {type:'animal', name:'dog'}, 
    {type:'fruit', name:'apple'}, 
    {type:'fruit', name:'mango'}, 
    {type:'color', name:'yellow'}, 
    {type:'animal', name:'cat'}, 
    {type:'color', name:'blue'}, 
    {type:'color', name:'red'},  
    {type:'animal', name:'cow'}, 
    {type:'animal', name:'goat'}, 
    {type:'color', name:'black'}, 
    {type:'fruit', name:'banana'}, 
    {type:'fruit', name:'cherry'}
  ]

  constructor() { }

  ngOnInit(): void {
  }

  transferDataToParent = (e: any) => {
    this.transferDataEmitter.emit(e.target.value)
  }

  sendArrValueToParent = (val: string) => {
    this.sendArrValName.emit(val)
  }
}
