import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  navbarExt:string = "show";

  @Input() Menu:Array<any>=[];

  toggleMenu(){
    this.navbarExt = (this.navbarExt==="show")?"":"show";
  }

  constructor() { }

  ngOnInit(): void {
  }

}
