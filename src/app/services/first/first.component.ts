import {Component, OnInit} from '@angular/core';
import {SharedService} from "../../shared.service";

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  shape: string = ''
  color: string = ''
  shapeClass = ''

  constructor(private sharedService: SharedService) {
  }

  ngOnInit(): void {
  }

  displayFigure = (): void => {
    this.shapeClass = this.sharedService.getShapeClass(this.shape, this.color)
    this.sharedService.previousColor = this.color
  }
}
