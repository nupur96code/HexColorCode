import { Component, OnInit } from '@angular/core';
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-display-colour',
  templateUrl: './display-colour.component.html',
  styleUrls: ['./display-colour.component.css']
})
export class DisplayColourComponent implements OnInit {

  constructor(public sharedData: SharedDataService) { }
  ngOnInit(): void {
  }
}
