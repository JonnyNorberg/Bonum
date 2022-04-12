import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {

  constructor(private service:ApiService) { }

  topDinnerResult:any=[];

  ngOnInit(): void {

    this.service.topDinner().subscribe((result)=>{

      console.log(result);
      this.topDinnerResult = result.hits;

    })

  }

}
