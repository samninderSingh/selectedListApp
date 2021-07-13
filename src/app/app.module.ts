import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ListHeaderComponent } from './list-header/list-header.component';

@NgModule({
  declarations: [
    AppComponent,
    ListItemComponent,
    ListHeaderComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
