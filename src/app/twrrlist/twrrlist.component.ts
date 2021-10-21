import { Component, OnInit } from '@angular/core';
import { twrrList } from './twrrlist.const'

@Component({
  selector: 'app-twrrlist',
  templateUrl: './twrrlist.component.html',
  styleUrls: ['./twrrlist.component.scss']
})
export class TwrrlistComponent implements OnInit {

  twrrList = twrrList.reverse();
  cityList: any = [];
  select_city: any = "所有縣市";
  search_storyname: any = "";
  result: any = [];

  constructor() { }

  ngOnInit(): void {
    this.result = this.twrrList;
    this.city_List_Array();
  }

  city_List_Array() {
    let _city = new Array();
    this.twrrList.forEach(x => {
      _city.push(x.city);
    })
    this.cityList = [...new Set(_city)];
  }

  search() {
    if (this.select_city == "所有縣市") {
      let _result = this.twrrList.filter(search => search.store.indexOf(this.search_storyname) > -1)
      this.result = _result;
    } else {
      this.result = this.twrrList.filter(search => search.city == this.select_city && search.store.indexOf(this.search_storyname) > -1);
    }
  }
}
