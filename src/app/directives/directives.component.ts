import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent implements OnInit {

  toggle: Boolean = false

  numbers: string[] = ['one', 'two', 'three', 'four']
  
  selectedValue: number = 0

  highlightColor: string = 'white'

  numbersArr: number[] = [...Array(50).keys()]

  chosenDivison: number = 0


  ngOnInit(): void {
    
  }

  handleToggle = (val: Boolean): void => {
    this.toggle = val
  }

  highlight = (color: string): void => {
    this.highlightColor = color
  }

  choseDivisionTypeNumbers = (division: number) => {
    this.chosenDivison = division
  }

}
