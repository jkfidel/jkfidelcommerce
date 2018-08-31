import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule, MatMenuModule, MatBadgeModule, MatSidenavModule, MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatIconModule, MatTableModule, MatButtonModule, MatCardModule, MatDividerModule, MatSnackBarModule } from '@angular/material';
import { HttpClientModule } from "@angular/common/http";
import { CustomIconService } from './services/custom-icon-service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
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
    HttpClientModule
  ],
  providers: [CustomIconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
