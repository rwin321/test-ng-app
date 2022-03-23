import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  previousColor: string = ''

  constructor() {
  }

  getShapeClass(shape: string, color: string) {
    return `${shape}-${color}`
  }
}
