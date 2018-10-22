import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { MatSidenav } from '@angular/material';
import {FormControl} from '@angular/forms';
import { WindowRef } from './WindowRef';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  host: {
    '(window:resize)': 'onResize($event)'
  }
})
export class ShopComponent implements OnInit, AfterViewInit  {
  mode = new FormControl('side');
  op =  new FormControl('true');
  panelOpenState = false;
  constructor(private winRef: WindowRef) {
      // getting the native window obj
      console.log('Native window obj', winRef.nativeWindow.innerWidth);
      if(winRef.nativeWindow.innerWidth>=958){
         this.mode = new FormControl('side');
         this.op = new FormControl('true');
       }
       else{
         this.mode = new FormControl('over');
         this.op = new FormControl('false');
       }
  }
  onResize(event){
     event.target.innerWidth; 
     if(event.target.innerWidth>=958){
       this.mode = new FormControl('side');
       this.op = new FormControl('true');
     }
     else{
       this.mode = new FormControl('over');
       this.op = new FormControl('false');
     }
   }
 
  ngOnInit(): void {
    // this.onResize(Event);
  }
 
  ngAfterViewInit() {
    // this.onResize(Event);
  }
}
