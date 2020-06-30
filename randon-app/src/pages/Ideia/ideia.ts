import { IonicPage, Content } from 'ionic-angular';
import { MyController } from '../../app/my-controller';
import { ViewChild, Component } from '@angular/core';

@IonicPage({
    segment: 'ideia'
})

@Component({
    selector: 'page-ideia',
    templateUrl: 'ideia.html'
})

export class IdeiaPage extends MyController {
    @ViewChild(Content) content: Content;

    constructor() {
        super();
    }
}