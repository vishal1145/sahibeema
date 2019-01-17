import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent} from './index/index.component';
import { ProductComponent} from './product/product.component';


const routes: Routes = [ 
  { path: '', redirectTo: 'index',pathMatch:'full' }, 
{ path: 'index', component: IndexComponent },
{ path: 'product', component: ProductComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
