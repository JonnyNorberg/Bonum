import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-asian',
  templateUrl: './asian.component.html',
  styleUrls: ['./asian.component.scss']
})
export class AsianComponent implements OnInit {

  constructor(private service:ApiService) { }

  topAsianResult:any=[];

  ngOnInit(): void {

    this.service.topAsian().subscribe((result)=>{

      console.log(result);
      this.topAsianResult = result.hits;

    })

  }

}
