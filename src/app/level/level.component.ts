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
  lucky_number:any=[];
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
    this.result=[...new Set(lottery_array)].sort();
    console.log(this.result)
  }

//   lucky(){
      
//       for(let i=0;i<this.result.length;i++){
//         let seconed=0;
//         this.quontupleList.forEach(x=>{
//           x.class.filter(y=>{ 
//             let two_number=this.result[i].length>2?;
//             console.log(two_number)
//             if(y.number.indexOf(this.result[i])>-1){
//               seconed++;
//               this.lucky_number.push({
//               "number":this.result[i],
//               "seconed":seconed
//             })
//             }
//           })
//         })
//       }
// console.log(this.lucky_number)
//   }

}

