import { Component, Input, OnInit } from '@angular/core';
import { MediaData } from '../../interfaces/interfaces';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  @Input()
  mediaList: MediaData[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
