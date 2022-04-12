import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {

  constructor(private service:ApiService) { }

  topLunchResult:any=[];

  ngOnInit(): void {

    this.service.topLunch().subscribe((result)=>{

      console.log(result);
      this.topLunchResult = result.hits;

    })

  }

}
