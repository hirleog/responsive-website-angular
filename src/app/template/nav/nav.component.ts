import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public openClose: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public menu() {
    this.openClose = !this.openClose;
  }

}
