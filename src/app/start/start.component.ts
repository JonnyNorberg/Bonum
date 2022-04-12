import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {

  constructor(private service:ApiService) { }

  topBreakfastResult:any=[];
  topLunchResult:any=[];
  topDinnerResult:any=[];
  topDessertResult:any=[];
  topSnackResult:any=[];


  ngOnInit(): void {

    this.service.topBreakfast().subscribe((result)=>{

      console.log(result);
      this.topBreakfastResult = result.hits;

    })

    this.service.topLunch().subscribe((result)=>{

      console.log(result);
      this.topLunchResult = result.hits;
    
    })

    this.service.topDinner().subscribe((result)=>{

      console.log(result);
      this.topDinnerResult = result.hits;
    
    })

    this.service.topDessert().subscribe((result)=>{

      console.log(result);
      this.topDessertResult = result.hits;
    
    })

    this.service.topSnack().subscribe((result)=>{

      console.log(result);
      this.topSnackResult = result.hits;
    
    })

  }

}
