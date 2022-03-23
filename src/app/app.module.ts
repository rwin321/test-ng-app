import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './communication-between-components/parent/parent.component';
import { ChildComponent } from './communication-between-components/child/child.component';

@NgModule({
  declarations: [
    AppComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
