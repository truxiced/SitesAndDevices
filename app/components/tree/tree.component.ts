/**
 * Created by Gustav Granelli on 1/11/17.
 */
import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tree',
    templateUrl: './tree.html',
    styleUrls: ['./tree.less']

})
export class TreeComponent {
    @Input() sites;
    @Input() keys;

    @Output() fetchDevice = new EventEmitter();

    fetchSpecificDevice(deviceId) {
        this.fetchDevice.emit({deviceId: deviceId});
    }
}