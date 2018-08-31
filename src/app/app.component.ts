import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { CustomIconService } from './services/custom-icon-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private customIconService: CustomIconService
  ){
    this.matIconRegistry.addSvgIcon(
      "menbar",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/menu_bar.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "hrt",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/heart-regular.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "sett",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/sett.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "bask",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/bask.svg")
    );
    this.customIconService.init();
  }
}
