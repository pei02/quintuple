import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ResultComponent} from './result/result.component';
import { TwrrlistComponent } from './twrrlist/twrrlist.component';
import {MailtoComponent} from './mailto/mailto.component';

const routes: Routes = [
{
  path:'',
  component:ResultComponent
},{
  path:'twrrlist',
  component:TwrrlistComponent
},{
  path:'mailto',
  component:MailtoComponent
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
