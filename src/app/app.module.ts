import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiService } from './service/api.service';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AddDragonComponent } from './pages/dragoes/add-dragon/add-dragon.component';
import { EditDragonComponent } from './pages/dragoes/edit-dragon/edit-dragon.component';
import { DetailDragonComponent } from './pages/dragoes/detail-dragon/detail-dragon.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AddDragonComponent,
    EditDragonComponent,
    DetailDragonComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],

  providers: [ApiService],

  bootstrap: [AppComponent],
})
export class AppModule {}
