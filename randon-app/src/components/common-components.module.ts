import { NgModule } from "@angular/core";
import { EzoomSvgComponent } from "./ezoom-svg/ezoom-svg";
import { IonicModule } from "ionic-angular";
import { TabsBarComponent } from "./tabs-bar/tabs-bar";
import { HeaderBarComponent } from "./header-bar/header-bar";

@NgModule({
    declarations: [
        EzoomSvgComponent,
        TabsBarComponent,
        HeaderBarComponent
    ],
    exports: [
        EzoomSvgComponent,
        TabsBarComponent,
        HeaderBarComponent
    ],
    imports: [
        IonicModule
    ]
})

export class CommonComponentsModule {};