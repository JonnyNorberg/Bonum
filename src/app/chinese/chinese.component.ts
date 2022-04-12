import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-chinese',
  templateUrl: './chinese.component.html',
  styleUrls: ['./chinese.component.scss']
})
export class ChineseComponent implements OnInit {

  constructor(private service:ApiService) { }

  topChineseResult:any=[];

  ngOnInit(): void {

    this.service.topChinese().subscribe((result)=>{

      console.log(result);
      this.topChineseResult = result.hits;

    })

  }

}
