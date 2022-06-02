import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  constructor() {}

  ngOnInit() {

    let _Numero = 3;
    //debugger;
    _Numero = _Numero + 3;

    _Numero = 0

    console.log(_Numero);
  }

}
