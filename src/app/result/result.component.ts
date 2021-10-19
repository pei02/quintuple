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
  show: number = 0;
  font_color: any = [];
  lottery_num:any='';

  constructor() {

  }

  ngOnInit(): void {

  }

  radiobutton_value(event: any) {
    this.select_value = event;
  }

  inputvail() {
    let num_vail = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let num = new Array();
    num = this.num.split("");

    let result = num_vail.concat(num.filter((e) => {
      return num_vail.indexOf(e) === -1;
    }))

    
    this.vail = this.num.length >= 2&&result.length==10 ? 'is-valid' : 'is-invalid';
  }

  search() {
    this.result = [];
    this.lottery_num=this.num.length<3?"*"+this.num:this.num;
    console.log(this.lottery_num);
    var _data = this.quontupleList.filter(data => data.week == this.select_value);
    _data.forEach(data => {
      data.class.forEach(vouchers => {
        if (vouchers.number.indexOf(this.num) != -1 || vouchers.number.indexOf(this.num.slice(1,3)) != -1) {
          this.result.push(vouchers);
        }
      })
    })
    this.show = this.result.length != 0 ? 1 : 2;
  }

}
