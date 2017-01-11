/**
 * Created by Gustav Granelli on 1/11/17.
 */
import { Directive, ElementRef, Input, OnChanges} from '@angular/core';

@Directive({ selector: '[myToggleIcon]' })

export class ToggleIconDirective implements OnChanges{

    @Input() isExpanded: boolean;

    constructor(private el: ElementRef) { }

    ngOnChanges() {
        if(this.isExpanded) {
            this.el.nativeElement.src = '/resources/img/icon-arrow-down-b-128.png';
            this.isExpanded = false;
        } else {
            this.el.nativeElement.src = '/resources/img/icon-arrow-right-b-128.png';
            this.isExpanded = true;
        }
    }

}