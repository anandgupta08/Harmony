import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllComponent } from './all/all.component';
import { EmptyComponent } from './empty/empty.component';
import { MainComponent } from './main/main.component';
import { SpotlightComponent } from './spotlight/spotlight.component';
import { EventBusService } from './event-bus';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    AllComponent,
    EmptyComponent,
    MainComponent,
    SpotlightComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [EventBusService],
  bootstrap: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  entryComponents: [AppComponent]
})
export class AppModule {

  constructor(private injector: Injector) {
  }

  ngDoBootstrap() {
    const inspirationElement = createCustomElement(AppComponent, {injector : this.injector});
    customElements.define('inspiration-element', inspirationElement);
  }
}
