import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface BitcoinData {
  time: {
    updated: string;
    updatedISO: string;
    updateduk: string;
  };
  disclaimer: string;
  chartName: string;
  bpi: {
    [key: string]: {
      code: string;
      symbol: string;
      rate: string;
      description: string;
      rate_float: number;
    };
  };
}

@Component({
  selector: 'app-bit-coin-page',
  templateUrl: './bit-coin-page.component.html',
  styleUrl: './bit-coin-page.component.css'
})
export class BitCoinPageComponent implements  OnInit{

  data :BitcoinData | undefined;
  private url= 'https://api.coindesk.com/v1/bpi/currentprice.json'

  symbol: string;
  constructor(private http:HttpClient){
    this.symbol =""
  }

  ngOnInit(){
    this.getData()
  }

  getData(){

    console.log("Hello");
    this.http.get(this.url).subscribe((data)=>{
      this.data = data as BitcoinData;
      console.log("User data",data);
    });
  }
}
