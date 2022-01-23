import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-q2',
  templateUrl: './q2.component.html',
  styleUrls: ['./q2.component.css']
})
export class Q2Component implements OnInit {
  
  results: any = [];
  constructor(
    public dataService: DataService
    ) {
   }

  ngOnInit(): void {
  }
  
  getDataList(){
    // this.dataService.getData().subscribe((res) =>{
    //   this.results = res;
    // })
  }

  shows(){
    // this.getDataList();

  }
}
