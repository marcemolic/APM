import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  // variante de menu responsive
  ocult = true;

  constructor() { }

  ngOnInit(): void {

  }
  // TODONOTA: cambo de estado del menu 
  alternar() {
    if (this.ocult == false) {
      let result = this.ocult = true;
      console.log(result)
    } else {
      let result = this.ocult = false;
      console.log(result)
    }
  }



}
