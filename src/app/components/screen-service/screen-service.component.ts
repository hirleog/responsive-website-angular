import { Component, OnInit, ElementRef, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-screen-service',
  templateUrl: './screen-service.component.html',
  styleUrls: ['./screen-service.component.css']
})
export class ScreenServiceComponent implements OnInit, AfterViewInit {
  @ViewChild('body') body!: ElementRef;

  ngAfterViewInit() {

  }
  public dayNight: any;
  constructor() {
    // this.grid.nativeElement =
  }



  ngOnInit(): void {
    // Dark & Light toggle
    // console.log('body', this.body.nativeElement.innerHTML);
    // // console.log('body: ', this.body);
    // // console.log('dayNight: ', this.dayNight);

    // this.dayNight.addEventListener("change", () => {
    //   this.body.nativeElement.value.classList.add("toggle");
    //   setTimeout(() => {
    //     this.body.nativeElement.value.classList.toggle("light");

    //     setTimeout(
    //       () => this.body.nativeElement.value.classList.remove("toggle"),
    //       10
    //     );
    //   }, 5);
    // });




    //   document.querySelector(".day-night input").addEventListener("change", () => {
    //     document.querySelector("body").classList.add("toggle");
    //     setTimeout(() => {
    //       document.querySelector("body").classList.toggle("light");

    //       setTimeout(
    //         () => document.querySelector("body").classList.remove("toggle"),
    //         10
    //       );
    //     }, 5);
    //   });

  }

}
