import {Injectable }from '@angular/core';
import {HttpClient }from '@angular/common/http';



@Injectable( {
providedIn:'root'
})
export class ListtipoCampoService {

constructor(protected http:HttpClient) {}
getTipos() {
return this.http.get("http://localhost:8080/getPablosky");
}
}
