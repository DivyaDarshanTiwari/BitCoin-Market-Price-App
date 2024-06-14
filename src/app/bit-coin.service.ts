import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BitCoinService {

  url='https://api.coindesk.com/v1/bpi/currentprice.json'

  constructor() { }

  getData(){

  }
}
