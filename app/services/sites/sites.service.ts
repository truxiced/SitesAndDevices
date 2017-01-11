/**
 * Created by Gustav Granelli on 1/11/17.
 */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import 'rxjs/add/operator/toPromise';

export interface criteria {
    searchValue: string;
}
@Injectable()
export class SitesService {

    private baseUrl: string = 'https://dev-api.avhs.axis.com/site.php?a=retrieve&u=avhs-test&p=AVHStest1024!&api=JSON';

    private action = "retrieve";git
    private user = "avhs-test";
    private password = "AVHStest1024!";
    private api = "JSON";


    constructor(private http : Http){

    }

    getSites() {
        return this.http.get(this.baseUrl)
            .toPromise()
     //       .then(response => this.responseData = response)
            .then(response => response.json().sites);
    }
}
