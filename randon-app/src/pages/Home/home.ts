import { App, IonicPage, Platform, NavController, Content, AlertController, MenuController } from 'ionic-angular';
import { MyController } from '../../app/my-controller';
import { ViewChild, Component } from '@angular/core';

@IonicPage({
    segment: 'home'
})

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})

export class HomePage extends MyController {
    @ViewChild(Content) content: Content;

    constructor(
        public navCtrl: NavController
    ) {
        super();
    }

    openPage(component) {
        if (component.length > 0) {
            this.navCtrl.push(component, {}, { animate: true, direction: 'forward' }); 
        }
    }
}