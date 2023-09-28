import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  texts: string[] = ['Natty']; // Replace with your own text array
  activeIndex = 1;

  ngOnInit() {
    setInterval(() => {
      this.nextSlide();
    }, 2000); // Adjust the interval time (in milliseconds) as per your requirements
  }

  nextSlide() {
    this.activeIndex = (this.activeIndex + 1) % this.texts.length;
  }
}
