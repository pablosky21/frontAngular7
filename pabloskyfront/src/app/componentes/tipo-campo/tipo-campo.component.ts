import {Component, OnInit }from '@angular/core';
import {ListtipoCampoService }from './../../services/listtipo-campo.service';
import {Tipocampo }from './../../tipocampo';

@Component( {
selector:'app-tipo-campo',
templateUrl:'./tipo-campo.component.html',
styleUrls:['./tipo-campo.component.css']
})
export class TipoCampoComponent implements OnInit {
nombre:string;
apellido:string;
edad:number;

constructor(private service:ListtipoCampoService) {
this.nombre = "pablo";
this.apellido = "lincoleo";
this.edad = 33;
}

ngOnInit() {
}

addProduct() {
const tipocampo:Tipocampo = new Tipocampo();
this.service.addProduct(Tipocampo).subscribe((result) =>  {
}, (err) =>  {
console.log(err);
});
}
}
