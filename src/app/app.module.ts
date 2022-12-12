import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { KanbanTrackComponent } from './shared/kanban-track/kanban-track.component';
import { ModalComponent } from './shared/modal/modal.component';
import { CardComponent } from './shared/card/card.component';
import { KanbanTaskCardComponent } from './shared/kanban-task-card/kanban-task-card.component';
import { ButtonSubmitComponent } from './shared/button-submit/button-submit.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    KanbanTrackComponent,
    ModalComponent,
    CardComponent,
    KanbanTaskCardComponent,
    ButtonSubmitComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
