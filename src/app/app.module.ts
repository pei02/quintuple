import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavItemComponent } from './nav-item/nav-item.component';
import { ResultComponent } from './result/result.component';
import { TwrrlistComponent } from './twrrlist/twrrlist.component';
import { LevelComponent } from './level/level.component';


@NgModule({
  declarations: [
    AppComponent,
    NavItemComponent,
    ResultComponent,
    TwrrlistComponent,
    LevelComponent,

  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
