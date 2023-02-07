import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncodingComponent } from './encoding/encoding.component';

const routes: Routes = [{
  path: "encoding", 
  component: EncodingComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
