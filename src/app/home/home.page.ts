import { Component } from '@angular/core';
import { XsensCapacitor } from 'xsens-capacitor';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  xsens;
  constructor() {
    this.xsens = XsensCapacitor;
    this.initialize();
  }

  async initialize(){
    console.log()
    this.xsens.echo({value: "POO"});
  }

}
