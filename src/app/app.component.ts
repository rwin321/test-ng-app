import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  count: number = 0
  imagepath: string = 'assets/nature-1.jpg'

  addCount = (): void => {
    this.count += 1
  }

  passValueToComponent = (e: any) => {
    console.log(e.target.value);
  }
}
