import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResultComponent} from './result/result.component';
import { TwrrlistComponent } from './twrrlist/twrrlist.component';

const routes: Routes = [
{
  path:'',
  component:ResultComponent
},{
  path:'twrrlist',
  component:TwrrlistComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    enableTracing: true,
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
