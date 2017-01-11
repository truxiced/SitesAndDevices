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
export class DevicesService {

    private baseUrl: string = 'https://dev-api.avhs.axis.com/device.php';

    private action: string = "retrieve";
    private user: string = "avhs-test";
    private password: string = "AVHStest1024!";
    private api: string = "JSON";


    constructor(private http : Http){

    }

    getDevices(deviceId: String) {
        return this.http.get(this.baseUrl + `?a=${this.action}&u=${this.user}&p=${this.password}&api=${this.api}&deviceid[]=${deviceId}`)
            .toPromise()
            .then(response => response.json().devices);
    }
}
