import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  tipActivate: boolean = false
  addressActivate: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  verTip(){
    if(this.tipActivate){
      this.tipActivate = false
    }else{
      this.tipActivate = true
    }
  }

  addressOn(){
    this.addressActivate = true
  }

}
