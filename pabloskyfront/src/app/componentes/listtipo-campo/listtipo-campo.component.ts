import {Tipocampo }from './../../tipocampo';
import {ListtipoCampoService }from './../../services/listtipo-campo.service';
import {Usuario }from './../../usuario';
import {Component, OnInit }from '@angular/core';

@Component( {
selector:'app-listtipo-campo',
templateUrl:'./listtipo-campo.component.html',
styleUrls:['./listtipo-campo.component.css']
})
export class ListtipoCampoComponent implements OnInit {
users:Usuario[];
tipocampo:Tipocampo[];
constructor(protected service:ListtipoCampoService) {
this.users = [ {nombre:"pablo", apellido:"lincoleo", edad:33},  {nombre:"pablo", apellido:"lincoleo", edad:33}]

}

ngOnInit() {
this.service.getTipos().subscribe(
(data) =>  {
this.tipocampo = data['results'];
},
(error) =>  {
console.error(error);
}
);
}

}
