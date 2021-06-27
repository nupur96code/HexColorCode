import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  public colour: any;

  constructor() { }

  public getColour() {
    return this.colour;
  }

  public setColour(colour: any) {
    this.colour = colour;
  }
}
