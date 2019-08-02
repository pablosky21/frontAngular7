import {Injectable }from '@angular/core';
import {HttpClient, HttpHeaders, HttpErrorResponse }from '@angular/common/http';
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

addProduct (product):Observable < any >  {
const httpOptions =  {
headers:new HttpHeaders( {
'Content-Type':'application/json'
})
};
console.log(product + "product1");
return this.http.post < any > ('http://localhost:8080/insertPablosky', JSON.stringify(product), httpOptions).pipe(
tap((product) => console.log(`added product w/ id = $ {product.id}`)),
catchError(this.handleError < any > ('addProduct'))
);
}
private extractData(res:Response) {
let body = res;
return body ||  {};
}

private handleError < T > (operation = 'operation', result?:T) {
return (error:any):Observable < T >  =>  {

// TODO: send the error to remote logging infrastructure
console.error(error); // log to console instead

// TODO: better job of transforming error for user consumption
console.log(`$ {operation}failed:$ {error.message}`);

// Let the app keep running by returning an empty result.
return of(result as T);
};
}
}
