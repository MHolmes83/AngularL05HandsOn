import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsService } from './services/skills.service';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsService } from './services/contacts.service';
import { GreetingComponent } from './greeting/greeting.component';
import { MessageFormComponent } from './message-form/message-form.component';
import { FavoritePlacesComponent } from './favorite-places/favorite-places.component';
import { PlacesService } from './services/places.service';
import { PlaceFormComponent } from './place-form/place-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SkillsComponent,
    ContactsComponent,
    GreetingComponent,
    MessageFormComponent,
    FavoritePlacesComponent,
    PlaceFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    SkillsService,
    PlacesService,
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
