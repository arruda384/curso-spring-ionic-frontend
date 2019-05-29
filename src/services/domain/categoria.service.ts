import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CategoriaDTO } from 'src/models/categoria.dto';
import { Observable, of } from 'rxjs';
import {API_CONFIG} from "../../config/api.config";

@Injectable()
export class CategoriaService {

    constructor(public http: HttpClient){
    }
    
    findAll() : Observable < CategoriaDTO[]>{

        return this.http.get<CategoriaDTO[]>(API_CONFIG.baseUrl+'/categoriass');
        

        /*.pipe(
            tap(_ => this.log('fetched categorias')),
            catchError(this.handleError('findAll', []))
          );*/
    }

    /*private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
    
          // TODO: send the error to remote logging infrastructure
          console.error(error); // log to console instead
    
          // TODO: better job of transforming error for user consumption
          this.log(`${operation} failed: ${error.message}`);
    
          // Let the app keep running by returning an empty result.
          return of(result as T);
        };
      }

    private log(message: string) {
        console.log(message);
      }*/
}