import { NgModule } from "@angular/core";
import { PontosPage } from "./pontos";
import { IonicPageModule } from "ionic-angular";
import { CommonComponentsModule } from "../../components/common-components.module";

@NgModule({
    declarations: [
        PontosPage
    ],
    imports: [
        CommonComponentsModule,
        IonicPageModule.forChild(PontosPage),
    ]
})
export class PontosModule {}