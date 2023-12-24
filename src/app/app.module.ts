import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserlistComponent } from './userlist/userlist.component';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { UserdetailsComponent } from './userlist/userdetails/userdetails.component';
import { UseraddComponent } from './userlist/useradd/useradd.component';
import { UserService } from './shared.service';
import { HttpClientModule } from '@angular/common/http';
import { UsermodifComponent } from './userlist/usermodif/usermodif.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserlistComponent,
    UserdetailsComponent,
    UseraddComponent,
    UsermodifComponent,
    MatTableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    UserService,
    HttpClientModule,
    ReactiveFormsModule,
    MatTableModule,
    UsermodifComponent,
    UserlistComponent
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
