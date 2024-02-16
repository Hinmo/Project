import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.css'
})

export class CarouselComponent implements OnInit {

  ngOnInit(): void {    
    let inicio = 0;
      const carousel = () => {
      let i;
      let x = document.getElementsByClassName("slider")as HTMLCollectionOf<HTMLElement>;
      for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      }
      inicio++;
      if (inicio > x.length) {inicio = 1}
      x[inicio-1].style.display = "block";
      setTimeout(carousel, 2000);
      }
    carousel();
  }

}