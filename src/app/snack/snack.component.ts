import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.scss']
})
export class SnackComponent implements OnInit {

  constructor(private service:ApiService) { }

  topSnackResult:any=[];

  ngOnInit(): void {

    this.service.topSnack().subscribe((result)=>{

      console.log(result);
      this.topSnackResult = result.hits;

    })

  }

}