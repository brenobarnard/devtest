import { Component, ViewChild, HostListener } from "@angular/core";
import { Nav, Platform, Content, MenuController, IonicApp, AlertController, LoadingController, ViewController } from 'ionic-angular';
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";
import { NavigationProvider } from "../providers/navigation";

@Component({
    templateUrl: "app.html"
})
export class MyApp {
    @ViewChild(Nav) nav: Nav;
    @ViewChild(Content) content: Content;

    @HostListener('focusin', ['$event'])
    public onFocus(event) {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            let content: any = this.nav.getActive().getContent();
            let footer: any = this.nav.getActive().getFooter();
            content.setElementClass('keyboard-opened', true);
            if (footer) {
                footer._elementRef.nativeElement.setAttribute('hidden', 'hidden');
            }
        }
    }
    @HostListener('focusout', ['$event'])
    public onFocusOut(event) {
        if (event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
            let content: any = this.nav.getActive().getContent();
            let footer: any = this.nav.getActive().getFooter();
            content.setElementClass('keyboard-opened', false);
            if (footer) {
                footer._elementRef.nativeElement.removeAttribute('hidden');
            }
        }
    }

    logged: boolean;
    rootPage: String = '';

    // Animações
    previous: ViewController;
    next: ViewController;

    constructor(
        private app: IonicApp,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private navigation: NavigationProvider
    ) {
        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.splashScreen.hide();
            this.nav.setRoot('HomePage');

            this.platform.registerBackButtonAction(() => {

                let activePortal = this.app._loadingPortal.getActive() ||
                    this.app._modalPortal.getActive() ||
                    this.app._toastPortal.getActive() ||
                    this.app._overlayPortal.getActive();

                //activePortal is the active overlay like a modal,toast,etc
                if (activePortal) {
                    activePortal.dismiss();
                    return
                }

                if (!this.nav.canGoBack()) {
                    if (this.nav.getActive().name != 'HomePage') {
                        this.nav.setRoot('HomePage');
                    } else {
                        this.platform.exitApp();
                    }
                } else {
                    this.nav.pop();
                }
            }, 300);

            this.subscriptions();
        });
    }

    private subscriptions() {
        this.nav.viewWillLeave.subscribe( previous => {
            console.table(previous.component.name);
            this.navigation.setPreviousPage(previous.component.name);
            this.previous = previous.component.name;
        });
        
        this.nav.viewWillEnter.subscribe( next => {
            console.table(next.component.name);
            this.navigation.setCurrentPage(next.component.name);
            this.next = next.component.name;
        });
    }
}
