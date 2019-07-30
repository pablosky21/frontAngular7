import {Injectable }from '@angular/core';
import {HttpClient }from '@angular/common/http';
import {Observable, of }from 'rxjs';
import {map, catchError, tap }from 'rxjs/operators';



@Injectable( {
providedIn:'root'
})
export class ListtipoCampoService {

constructor(protected http:HttpClient) {}
getTipos() {
return this.http.get("http://localhost:8080/getPablosky");
}

getProducts():Observable < any >  {
return this.http.get("http://localhost:8080/getPablosky").pipe(
map(this.extractData));
}
private extractData(res:Response) {
let body = res;
return body ||  {};
}

}
