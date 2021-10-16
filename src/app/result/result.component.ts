import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { quontupleList } from './quintuplelist.const'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  quontupleList = quontupleList;
  vail: any;
  num: any = "";
  options: any = ["1", "2", "3", "4"];
  select_value: string = '';
  result: any = [];
  show:number=0;


  constructor() {

  }

  ngOnInit(): void {

  }

  radiobutton_value(event: any) {
    this.select_value = event;
  }

  inputvail() {
    this.vail = this.num.length >= 2 ? 'is-valid' : 'is-invalid';
  }

  search() {
    this.result = [];
    var _data = this.quontupleList.filter(data => data.week == this.select_value);
    _data.forEach(data => {
      data.class.forEach(vouchers => {
        if (vouchers.number.indexOf(this.num) != -1) {
          this.result.push(vouchers);
        }
      })
    })
    this.show=this.result.length!=0?1:2;
  }
}
