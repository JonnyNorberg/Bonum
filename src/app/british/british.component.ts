import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-british',
  templateUrl: './british.component.html',
  styleUrls: ['./british.component.scss']
})
export class BritishComponent implements OnInit {

  constructor(private service:ApiService) { }

  topBritishResult:any=[];

  ngOnInit(): void {

    this.service.topBritish().subscribe((result)=>{

      console.log(result);
      this.topBritishResult = result.hits;

    })

  }

}
