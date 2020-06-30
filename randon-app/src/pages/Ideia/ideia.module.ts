import { NgModule } from "@angular/core";
import { IdeiaPage } from "./ideia";
import { IonicPageModule } from "ionic-angular";
import { CommonComponentsModule } from "../../components/common-components.module";

@NgModule({
    declarations: [
        IdeiaPage
    ],
    imports: [
        CommonComponentsModule,
        IonicPageModule.forChild(IdeiaPage),
    ]
})
export class IdeiaModule {};