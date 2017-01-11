/**
 * Created by Gustav Granelli on 1/11/17.
 */
import {Component, Input} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'tree',
    templateUrl: './tree.html',
    styleUrls: ['./tree.less']

})
export class TreeComponent {
    @Input() sites;
    @Input() keys;

}