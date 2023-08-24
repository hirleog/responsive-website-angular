import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-what-people-say',
  templateUrl: './what-people-say.component.html',
  styleUrls: ['./what-people-say.component.css']
})
export class WhatPeopleSayComponent implements OnInit {

  constructor() { }

  public cardA: Array<any> = [];
  public cardB: Array<any> = [];
  public cardC: Array<any> = [];

  ngOnInit(): void {

    this.cardA = [
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
        title: 'Eleanor Crisp',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
        title: 'daniel',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
        title: 'Eleanor Crisp',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
        title: 'Eleanor Crisp',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
    ]

    this.cardB = [
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
        title: 'Gui',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
        title: 'daniel',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
        title: 'Eleanor Crisp',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
        title: 'Eleanor Crisp',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
    ]

    this.cardC = [
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
        title: 'Eleanor Crisp',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg',
        title: 'daniel',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
      {
        img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg',
        title: 'Eleanor Crisp',
        subtitle: 'UX Design',
        content: 'Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!',
      },
    ]

  }

}
