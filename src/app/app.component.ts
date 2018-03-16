import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
power: Number = 0;

  calcPowers(event){
    console.log(this.power);
    event.preventDefault();
  }

}
