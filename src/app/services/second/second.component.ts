import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {
  shape: string = ''
  color: string = ''
  shapeClass: string = ''
  previousColor: string = ''

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  displayShape = (): void => {
    this.shapeClass = this.sharedService.getShapeClass(this.shape, this.color)
    this.previousColor = this.sharedService.previousColor
  }

}
