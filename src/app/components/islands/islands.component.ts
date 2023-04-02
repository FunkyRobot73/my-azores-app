import { Component, OnInit } from '@angular/core';
import { GetislandsService } from 'src/app/services/getislands.service';

@Component({
  selector: 'app-islands',
  templateUrl: './islands.component.html',
  styleUrls: ['./islands.component.css']
})
export class IslandsComponent implements OnInit {
  islands;
  constructor(private _islands: GetislandsService) { }

  ngOnInit() {
    this.islands=this._islands.getIslands();
  }
}
