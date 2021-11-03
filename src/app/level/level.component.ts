import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { quontupleList } from '../result/quintuplelist.const';

@Component({
  selector: 'app-level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss']
})
export class LevelComponent implements OnInit {
  quontupleList = quontupleList;
  result:any=[];
  constructor() { }

  ngOnInit(): void {
    this.lottery_Array();
  }

  lottery_Array(){
    let lottery_array=new Array();
    this.quontupleList.forEach(layer_one=>{
      layer_one.class.forEach(layer_two=>{ 
        layer_two.number.forEach(layer_three=>{
          lottery_array.push(layer_three);
        })
     })
    })
    this.result=[...new Set(lottery_array)];
    console.log(this.result)
  }
}
