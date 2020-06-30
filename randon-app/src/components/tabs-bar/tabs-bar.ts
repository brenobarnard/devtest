import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavigationProvider } from '../../providers/navigation';
import { Subscription } from 'rxjs';

@Component({
    selector: 'tabs-bar',
    templateUrl: 'tabs-bar.html'
})
export class TabsBarComponent implements OnInit, OnDestroy{

    @Input() items:Array<any> = [];

    current: any = '';
    tabs: any[] = [];
    homeButton: any = {};
    subscription: Subscription = new Subscription();

    constructor(
        public navCtrl: NavController,
        public navigation: NavigationProvider
    ) {
        this.homeButton = { 
            icon: 'home-button', 
            component: 'HomePage', 
            classes: 'home-button' 
        };

        this.tabs = [
            { icon: 'idea', component: 'IdeiaPage', classes: '' },
            { icon: 'certificate', component: '', classes: '' },
            { icon: '', component: '', classes: '' },
            { icon: 'list', component: 'PontosPage', classes: '' },
            { icon: 'user', component: '', classes: '' }
        ];
    }

    ngOnInit() {
        this.subscription.add(
            this.navigation.$currentPage.subscribe((current: any) => {
                this.current = current;
            })
        );
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

    openPage(page:any = null) {
        if (page.component == this.current || page.component.length == 0){
            return false;
        }

        if (page.component == 'HomePage') {
            this.navCtrl.setRoot(page.component, {}, { animate: true, direction: 'back' });
        } else {
            this.navCtrl.push(page.component, {}, { animate: true, direction: 'forward' });            
        }
    }
}