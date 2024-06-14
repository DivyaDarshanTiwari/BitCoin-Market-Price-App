import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { BitCoinService } from '../bit-coin.service';
import { HttpClient } from '@angular/common/http';
import { Console } from 'console';

@Component({
  selector: 'app-bit-coin-page',
  templateUrl: './bit-coin-page.component.html',
  styleUrl: './bit-coin-page.component.css',
})
export class BitCoinPageComponent {

  data:any;
  private url= 'https://api.coindesk.com/v1/bpi/currentprice.json'

  constructor(private http:HttpClient){
  }

  ngOnInit(){
    this.getData().subscribe((data)=>{
      this.data = data;
      console.log(data);
    })
  }

  getData(){
    return this.http.get(this.url)
  }
}
