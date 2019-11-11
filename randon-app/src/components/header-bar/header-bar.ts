import { Component, Input } from "@angular/core";


@Component({
    selector: 'header-bar',
    templateUrl: 'header-bar.html'
})

export class HeaderBarComponent {
    @Input() title: string = '';

    constructor() {}
}