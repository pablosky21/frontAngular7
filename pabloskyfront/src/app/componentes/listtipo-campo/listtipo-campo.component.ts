import {Usuario }from './../../usuario';
import {Component, OnInit }from '@angular/core';

@Component( {
selector:'app-listtipo-campo',
templateUrl:'./listtipo-campo.component.html',
styleUrls:['./listtipo-campo.component.css']
})
export class ListtipoCampoComponent implements OnInit {
users:Usuario[];
constructor() {
this.users = [ {nombre:"pablo", apellido:"lincoleo", edad:33},  {nombre:"pablo", apellido:"lincoleo", edad:33}]

}

ngOnInit() {
}

}
