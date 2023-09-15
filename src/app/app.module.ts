import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { QuienSoyComponent } from './pages/quien-soy/quien-soy.component';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSoyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(
      {    apiKey: "AIzaSyBYmNNyJmQijf1UVZPxYgCULMqivYkUBac",
    authDomain: "saladejuegos-d3933.firebaseapp.com",
    projectId: "saladejuegos-d3933",
    storageBucket: "saladejuegos-d3933.appspot.com",
    messagingSenderId: "592924014661",
    appId: "1:592924014661:web:e371f967d6d16ccc930b2c"}),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
