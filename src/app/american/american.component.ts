import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-american',
  templateUrl: './american.component.html',
  styleUrls: ['./american.component.scss']
})
export class AmericanComponent implements OnInit {

  constructor(private service:ApiService) { }

  topAmericanResult:any=[];

  ngOnInit(): void {

    this.service.topAmerican().subscribe((result)=>{

      console.log(result);
      this.topAmericanResult = result.hits;

    })

  }

}
