import { Component, OnInit } from '@angular/core';
import { GetislandsService } from 'src/app/services/getislands.service';

@Component({
  selector: 'app-islands',
  templateUrl: './islands.component.html',
  styleUrls: ['./islands.component.css']
})
export class IslandsComponent implements OnInit {
  islands;
  color;
  constructor(private _islands: GetislandsService) { }

  ngOnInit() {
    this.islands=this._islands.getIslands();
    this.color=this.colorit();
  }
  colorit(){
    for (let i = 0; i < this.islands.length; i++) {
      if (this.islands[i].attractionSites.length<3) {
        return false;
      }
    }
    return true;
  }
}
