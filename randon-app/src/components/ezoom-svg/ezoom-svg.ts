import { Component, Input, SimpleChange } from "@angular/core";

@Component({
    selector: 'ezoom-svg',
    templateUrl: 'ezoom-svg.html'
})

export class EzoomSvgComponent {
    
    @Input() file: string;

    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
        for (let propName in changes) {
            let changedProp = changes[propName];
            if (changedProp.currentValue != null){
                this[propName] = changedProp.currentValue;
            }
        }
    }
}