import { Component, OnInit, HostListener, ViewChild, ElementRef, AfterViewInit  } from '@angular/core';
import { MatSidenav } from '@angular/material';
import {FormControl} from '@angular/forms';
import { WindowRef } from './WindowRef';
import { Options, LabelType, CustomStepDefinition } from 'ng5-slider';

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

  minValue: number = 100;
  maxValue: number = 400;
  options: Options = {
    floor: 0,
    ceil: 500,
    translate: (value: number, label: LabelType): string => {
      switch (label) {
        case LabelType.Low:
          return '<b>Min price:</b> $' + value;
        case LabelType.High:
          return '<b>Max price:</b> $' + value;
        default:
          return '$' + value;
      }
    }
  };

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
