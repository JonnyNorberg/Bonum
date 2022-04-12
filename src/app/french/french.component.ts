import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-french',
  templateUrl: './french.component.html',
  styleUrls: ['./french.component.scss']
})
export class FrenchComponent implements OnInit {

  constructor(private service:ApiService) { }

  topFrenchResult:any=[];

  ngOnInit(): void {

    this.service.topFrench().subscribe((result)=>{

      console.log(result);
      this.topFrenchResult = result.hits;

    })

  }

}
