import { NgModule } from "@angular/core";
import { HomePage } from "./home";
import { IonicPageModule } from "ionic-angular";
import { CommonComponentsModule } from "../../components/common-components.module";

@NgModule({
    declarations: [
        HomePage
    ],
    imports: [
        CommonComponentsModule,
        IonicPageModule.forChild(HomePage),
    ]
})
export class HomeModule {}