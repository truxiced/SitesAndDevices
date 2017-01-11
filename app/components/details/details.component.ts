/**
 * Created by Gustav Granelli on 1/11/17.
 */
import {Component, Input} from '@angular/core';

@Component({

    moduleId: module.id,
    selector: 'detailPanel',
    templateUrl: './details.html',
    styleUrls: ['./details.less']

})
export class DetailsComponent {

    @Input() device;
}