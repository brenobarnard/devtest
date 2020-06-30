import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { IonicModule, IonicApp } from "ionic-angular";
import { SplashScreen } from "@ionic-native/splash-screen/ngx";
import { StatusBar } from "@ionic-native/status-bar/ngx";

import { MyApp } from "./app.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonComponentsModule } from "../components/common-components.module";
import { CommonModule } from "@angular/common";
import { NavigationProvider } from "../providers/navigation";

@NgModule({
    declarations: [
        MyApp
    ],
    imports: [
        BrowserModule, 
        FormsModule,
        CommonComponentsModule,
        ReactiveFormsModule,
        IonicModule.forRoot(MyApp, {
            menuType: 'overlay',
            pageTransition: 'ios-transition',
            platforms: {
                android: {
                    backButtonText: ''
                },
                ios: {
                    backButtonText: '',
                    statusbarPadding: true,
                    tabsHideOnSubPages: true
                },
                core: {
                    pageTransition: 'md-transition'
                }
            }
        }),
        CommonModule
    ],
    providers: [
        StatusBar,
        SplashScreen,
        NavigationProvider
    ],
    entryComponents: [
        MyApp
    ],
    bootstrap: [IonicApp]
})
export class AppModule {}
