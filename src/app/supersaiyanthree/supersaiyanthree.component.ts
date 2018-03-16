import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-supersaiyanthree',
  templateUrl: './supersaiyanthree.component.html',
  styleUrls: ['./supersaiyanthree.component.css']
})
export class SupersaiyanthreeComponent implements OnInit {
@Input() power;
message: String = '';
  constructor() { }
  calcPowers(){
    if(this.power >= 15000){
        this.message = 'Superlative!';
      }
    }

  ngOnInit() {
  }

}
