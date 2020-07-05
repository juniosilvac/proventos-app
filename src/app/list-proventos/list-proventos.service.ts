import { ErrorHandler } from './../app.error.handler';
import { PROVENTOS_API } from './../app.api';
import { Provento } from './provento.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ListProventoService {   
    constructor(private http: Http) { }    

    proventos(): Observable<Provento[]> {
        return this.http.get(`${PROVENTOS_API}/proventos`)
            .map(response => response.json())
            .catch(ErrorHandler.handlerError);
    }
}