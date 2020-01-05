import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { JedenComponent } from './jeden/jeden.component';
import { DwaComponent } from './dwa/dwa.component';

const routes: Routes = [
  {path: 'jeden', component: JedenComponent},  
  {path: 'dwa/:kasa', component: DwaComponent},  
];

@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(routes) ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
