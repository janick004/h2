import { Component } from '@angular/core';
import { HeroComponent } from './hero/hero.component';
import { NewBookComponent } from './new-book/new-book.component';
import { RandomBookComponent } from './random-book/random-book.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeroComponent, NewBookComponent, RandomBookComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
