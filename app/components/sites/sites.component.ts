/**
 * Created by Gustav Granelli on 1/11/17.
 */
import {Component} from '@angular/core';
import {SitesService} from "app/services/sites/sites.service";

@Component({
    moduleId: module.id,
    selector: 'sites',
    templateUrl: './sites.html',
    styleUrls: ['./sites.less'],
    providers: [SitesService],

})
export class SitesComponent {

    siteKeys: Array<String>;
    sites: Object;

    constructor(private sitesService: SitesService){
        sitesService.getSites().then(sites => this.sites = sites)
                               .then(sites => this.siteKeys = Object.keys(sites));
    }

}