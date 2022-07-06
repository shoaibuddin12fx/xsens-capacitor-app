import { Component } from '@angular/core';
import { XsensCapacitor } from 'xsens-capacitor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  xsens;
  // xse
  constructor() {
    this.xsens = XsensCapacitor;
    // this.initialize();
  }

  async initialize() {
    const res = this.xsens.initialize();
    console.log(res);

    this.xsens.addListener('json_object', (json_object: any) => {
      console.log('json_object was fired ', json_object);
    });

    // setTimeout(() => {
    //   this.xsens.getBluetoothDevices();
    // }, 4000);
  }

  getBluetoothDevices() {
    this.xsens.getBluetoothDevices();
  }
}
