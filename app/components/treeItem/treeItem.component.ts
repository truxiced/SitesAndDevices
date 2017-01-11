/**
 * Created by Gustav Granelli on 1/11/17.
 */
import {Component, Input, OnInit, HostListener, Output, EventEmitter} from '@angular/core';

@Component({

    moduleId: module.id,
    selector: 'tree-item',
    templateUrl: './treeItem.html',
    styleUrls: ['./treeItem.less']

})
export class TreeItemComponent implements OnInit{
    @Input() site;

    @Output() fetchDevice = new EventEmitter();

    private deviceKeys;
    private devices;
    private isExpanded: boolean =false;

    ngOnInit() {
        this.deviceKeys = Object.keys(this.site.devices);
        this.devices = this.site.devices;
    }

    toggleExpand() {
        this.isExpanded = this.isExpanded ? false: true;
    }

    fetchSpecificDevice(deviceId) {
        this.fetchDevice.emit({deviceId: deviceId});
    }
}