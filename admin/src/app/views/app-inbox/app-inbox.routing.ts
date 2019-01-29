import { Routes } from '@angular/router';

import { AppInboxComponent } from './app-inbox.component';
import {AddArticleComponent} from './addArticles/addArticle.component'

export const InboxRoutes: Routes = [
  { path: '', 
   children: [{
    path: '',
    component: AppInboxComponent,
    data: { title: 'Article' }
  }, {
    path: 'addarticle/:id',
    component: AddArticleComponent,
    data: { title: 'Article', breadcrumb: 'Article' }
  
  },
  {
    path: 'updatearticle/:id',
    component: AddArticleComponent,
    data: { title: 'Article', breadcrumb: 'Article' }
  
  }]
  }];