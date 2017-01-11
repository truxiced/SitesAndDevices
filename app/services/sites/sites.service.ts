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

    private baseUrl: string = 'https://dev-api.avhs.axis.com/site.php';

    private action: string = "retrieve";
    private user: string = "avhs-test";
    private password: string = "AVHStest1024!";
    private api: string = "JSON";


    constructor(private http : Http){

    }

    getSites() {
        return this.http.get(this.baseUrl + `?a=${this.action}&u=${this.user}&p=${this.password}&api=${this.api}`)
            .toPromise()
            .then(response => response.json().sites);
    }
}
