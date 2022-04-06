import { Component, OnInit } from '@angular/core';
import { MediaData } from '../shared/interfaces/interfaces';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series: MediaData[] = [
    {
      name: "The Walking Dead",
      imageUrl:
        "https://lumiere-a.akamaihd.net/v1/images/twd_kv_bpo_4x5_e469db7e.png",
    },
    {
      name: "Game of Thrones",
      imageUrl:
        "https://m.media-amazon.com/images/I/91DjGXn7jXL._AC_SL1500_.jpg",
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
