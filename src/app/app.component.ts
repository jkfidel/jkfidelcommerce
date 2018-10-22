import { Component } from '@angular/core';
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { CustomIconService } from './services/custom-icon-service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentUrl: string;
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private customIconService: CustomIconService,
    private router: Router
  ){
    this.customIconService.init();
    router.events.subscribe((_: NavigationEnd) => {
      this.currentUrl = _.url;
      // console.log(this.currentUrl);
    });
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
    
  }
}
