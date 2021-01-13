import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import {
  SohoButtonModule,
  SohoComponentsModule,
  SohoLocaleModule,
} from "ids-enterprise-ng";

import { AppComponent } from "./app.component";
import { SohoLocaleInitializerModule } from "./locale/soho-locale-initializer.module";
import { TabsComponent } from "./tabs/tabs.component";
import { AppMenuSectionComponent } from "./app-menu-section/app-menu-section.component";

@NgModule({
  declarations: [AppComponent, TabsComponent, AppMenuSectionComponent],
  imports: [
    BrowserModule,
    SohoLocaleModule,
    SohoButtonModule,
    SohoLocaleInitializerModule,
    SohoComponentsModule,
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "en-US",
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
