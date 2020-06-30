import { IonicPage, Content } from 'ionic-angular';
import { MyController } from '../../app/my-controller';
import { ViewChild, Component } from '@angular/core';

@IonicPage({
    segment: 'pontos'
})

@Component({
    selector: 'page-pontos',
    templateUrl: 'pontos.html'
})

export class PontosPage extends MyController {
    @ViewChild(Content) content: Content;

    constructor() {
        super();
    }
}