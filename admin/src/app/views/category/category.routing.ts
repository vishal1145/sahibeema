import { Routes } from '@angular/router';

import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './addCategory/addCategory.component'

export const CategoryRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: CategoryComponent,
      data: { title: 'Category' }
    }, {
      path: 'addcategory/:id',
      component: AddCategoryComponent,
      data: { title: 'Category', breadcrumb: 'AddCategory' }
    },
      {
        path: 'updatecategory/:id',
        component: AddCategoryComponent,
         data: { title: 'Category', breadcrumb: 'UpdateCategory' }

    }]
  }];