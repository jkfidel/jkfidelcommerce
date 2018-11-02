import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShopComponent } from './components/shop/shop.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule, MatMenuModule, MatBadgeModule, MatRadioModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatTableModule, MatButtonModule, MatCardModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from "@angular/common/http";
import { CustomIconService } from './services/custom-icon-service';
import { AppRoutingModule } from './app.routing.module';
import { SidenavService } from './services/sidenav.service';
import { FormsModule, FormGroup, ReactiveFormsModule }   from '@angular/forms';
import { WindowRef } from './components/shop/WindowRef';
import {MatExpansionModule} from '@angular/material/expansion';
import {FlexLayoutModule} from '@angular/flex-layout';

import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShopComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatExpansionModule,
    MatRadioModule,
    MatToolbarModule, 
    MatFormFieldModule, 
    MatInputModule, 
    MatOptionModule,
    MatSelectModule, 
    MatIconModule, 
    MatBadgeModule,
    MatTableModule, 
    MatButtonModule, 
    MatCardModule, 
    MatDividerModule, 
    MatSnackBarModule,
    MatMenuModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    Ng5SliderModule
  ],
  providers: [CustomIconService, SidenavService, WindowRef ],
  bootstrap: [AppComponent]
})
export class AppModule { }
