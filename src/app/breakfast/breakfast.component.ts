import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss']
})
export class BreakfastComponent implements OnInit {

  constructor(private service:ApiService) { }

  topBreakfastResult:any=[];

  ngOnInit(): void {

    this.service.topBreakfast().subscribe((result)=>{

      console.log(result);
      this.topBreakfastResult = result.hits;

    })

  }

}
