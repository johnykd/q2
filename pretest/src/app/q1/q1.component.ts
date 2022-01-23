import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-q1',
  templateUrl: './q1.component.html',
  styleUrls: ['./q1.component.css']
})
export class Q1Component implements OnInit {
  options: string[] = ["isPrime", "isFibonacci"];
  selectedQuantity = "isPrime";
  id: any;
  constructor(){}
  ngOnInit(): void {
  }
  selectFunction(id: any){

  }

}
