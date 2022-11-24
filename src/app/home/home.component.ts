import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

/*MAIN BODY (PART-3 & 5) STARTS HERE*/
  testimonialSlider: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag: true,
      pullDrag: true,
      autoplay: true,
      dots: true,
      navSpeed: 700,
      navText: ['<i class="fa fa-caret-left"></i>', '<i class="fa fa-caret-right"></i>'],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 3
        },
        740: {
          items: 3
        },
        940: {
          items: 5
        }
      },
      nav: false
  }
    /*MAIN BODY (PART-3 & 5) ENDS HERE*/

}
