import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SelectizesComponent } from './selectizes/selectizes.component';
import { SearchFilterPipe } from './searchFilterPipe';

@NgModule({
  declarations: [
    AppComponent,
    SelectizesComponent,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
