import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menu = [
    {
      name: "GloboStreaming",
      url: "/",
    },
    {
      name: "Movies",
      url: "/movies",
    },
    {
      name: "Series",
      url: "/series",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
