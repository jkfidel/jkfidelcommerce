import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import { Injectable } from "@angular/core";

@Injectable()
export class CustomIconService {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {}
  init() {
    this.matIconRegistry.addSvgIcon(
      "cool_face",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../../assets/cool2.svg")
    );
    this.matIconRegistry.addSvgIcon(
      "acnt",
      this.domSanitizer.bypassSecurityTrustResourceUrl("../../assets/acnt.svg")
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