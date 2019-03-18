import { Component, OnInit } from '@angular/core';
import { IImage } from './slideshow/IImage';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  imageUrls: (string | IImage)[] = [
  { url: 'assets/shoep_img1.jpg', backgroundSize: 'cover', backgroundPosition: 'center', caption: 'Nike air force 1', caption_description: '`07 LV8 Utility Black', caption_title: 'summer collection', captioin_tag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', shoplink: 'shop now'},
    { url: 'assets/shoep_img.jpg', backgroundSize: 'cover', backgroundPosition: 'center',  caption: 'Adidas', caption_description: 'NMD_R1 CARBON', caption_title: 'summer collection', captioin_tag: 'Lifestyle sneakers that seamlessly blend vintage style with modern innovation.', shoplink: 'shop now'},
    { url: 'assets/shoep_img3.jpg', backgroundSize: 'cover', backgroundPosition: 'center',  caption: 'Nike air force 1', caption_description: '`07 LV8 Utility Black', caption_title: 'summer collection', captioin_tag: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', shoplink: 'shop now'}
  ];
  height: string = '500px';
  minHeight: string;
  arrowSize: string = '30px';
  showArrows: boolean = true;
  disableSwiping: boolean = false;
  autoPlay: boolean = false;
  autoPlayInterval: number = 33333;
  stopAutoPlayOnSlide: boolean = true;
  debug: boolean = false;
  backgroundSize: string = 'cover';
  backgroundPosition: string = 'center center';
  backgroundRepeat: string = 'no-repeat';
  showDots: boolean = true;
  dotColor: string = '#000';
  showCaptions: boolean = true;
  captionColor: string = '#FFF';
  captionBackground: string = 'rgba(0, 0, 0, .35)';
  lazyLoad: boolean = false;
  hideOnNoSlides: boolean = false;
  width: string = '100%';
  fullscreen: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
