/**
 * Created by Gustav Granelli on 1/11/17.
 */
import {Component} from '@angular/core';
import {SitesService} from "app/services/sites/sites.service";
import {DevicesService} from "app/services/devices/devices.service";

@Component({
    moduleId: module.id,
    selector: 'sites',
    templateUrl: './sites.html',
    styleUrls: ['./sites.less'],
    providers: [SitesService, DevicesService],

})
export class SitesComponent {

    siteKeys: Array<String>;
    sites: Object;
    device: Object;

    constructor(private sitesService: SitesService, private deviceService: DevicesService){
        sitesService.getSites().then(sites => this.sites = sites)
                               .then(sites => this.siteKeys = Object.keys(sites));
    }

    fetchDevice(deviceId) {

        this.deviceService.getDevices(deviceId).then(devices => this.device = devices[Object.keys(devices)[0]])

    }

}