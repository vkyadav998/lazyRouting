import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private Router : Router) { }

  routToAnotherPage(){
    let num = Math.floor(Math.random()*6+1);
    this.Router.navigate(['/customers/'+num]);
    console.log(num);
  }
}
