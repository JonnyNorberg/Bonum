import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-indian',
  templateUrl: './indian.component.html',
  styleUrls: ['./indian.component.scss']
})
export class IndianComponent implements OnInit {

  constructor(private service:ApiService) { }

  topIndianResult:any=[];

  ngOnInit(): void {

    this.service.topIndian().subscribe((result)=>{

      console.log(result);
      this.topIndianResult = result.hits;

    })

  }

}
