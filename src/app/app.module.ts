import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstSecComponent } from './layouts/first-sec/first-sec.component';
import { SecondSecComponent } from './layouts/second-sec/second-sec.component';
import { ThirdSecComponent } from './layouts/third-sec/third-sec.component';
import { FourthSecComponent } from './layouts/fourth-sec/fourth-sec.component';
import { MainComponent } from './layouts/main/main.component';
import { DirectiveProjectDirective } from './directive-project.directive';

@NgModule({
  declarations: [
    AppComponent,
    FirstSecComponent,
    SecondSecComponent,
    ThirdSecComponent,
    FourthSecComponent,
    MainComponent,
    DirectiveProjectDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
