import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AttendenceListComponent } from './attendence-list/attendence-list.component';
import { EventListComponent } from './event-list/event-list.component';
import { AttendenceListItemComponent } from './attendence-list-item/attendence-list-item.component';

const appRoutes: Routes = [
  { path: 'events', component: EventListComponent },
  { path: 'events/:id', component: AttendenceListComponent },
  { path: '', redirectTo: '/events', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AttendenceListComponent,
    EventListComponent,
    AttendenceListItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
