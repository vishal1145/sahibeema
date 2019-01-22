import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent} from './index/index.component';
import { ProductComponent} from './product/product.component';
import { TeamComponent} from './team/team.component';
import { ContactComponent} from './contact/contact.component';
import { ArticleComponent} from './article/article.component';
const routes: Routes = [ 
  { path: '', redirectTo: 'index',pathMatch:'full' }, 
{ path: 'index', component: IndexComponent },
{ path: 'product/:beema_id', component: ProductComponent },
{ path: 'team', component: TeamComponent },
{ path: 'contact', component: ContactComponent },
{ path: 'article', component: ArticleComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
