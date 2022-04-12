import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-dessert',
  templateUrl: './dessert.component.html',
  styleUrls: ['./dessert.component.scss']
})
export class DessertComponent implements OnInit {

  constructor(private service:ApiService) { }

  topDessertResult:any=[];

  ngOnInit(): void {

    this.service.topDessert().subscribe((result)=>{

      console.log(result);
      this.topDessertResult = result.hits;

    })

  }

}