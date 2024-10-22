import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 45;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`
   }

  changeHero(): void {
    ( this.name === 'ironman') ? this.name = 'spiderman' : this.name = 'ironman';
  }

  changeAge(): void {
    ( this.age === 45 ) ? this.age = 25 : this.age = 45;
  }

  resetForm() {
    this.name = 'ironman';
    this.age = 45;
  }

}

