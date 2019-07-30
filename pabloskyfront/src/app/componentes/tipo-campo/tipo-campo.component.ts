import {Component, OnInit }from '@angular/core';

@Component( {
selector:'app-tipo-campo',
templateUrl:'./tipo-campo.component.html',
styleUrls:['./tipo-campo.component.css']
})
export class TipoCampoComponent implements OnInit {
nombre:string;
apellido:string;
edad:number;

constructor() {
this.nombre = "pablo";
this.apellido = "lincoleo";
this.edad = 33;
}

ngOnInit() {
}

}
