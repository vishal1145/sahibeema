import { Routes } from '@angular/router';

import { ConfigurationComponent } from './configuration.component';
import { AddConfigurationComponent } from './addConfiguration/addConfiguration.component'

export const ConfigurationRoutes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: ConfigurationComponent,
      data: { title: 'Configuration' }
    }, {
      path: 'addconfiguration/:id',
      component: AddConfigurationComponent,
      data: { title: 'Configuration', breadcrumb: 'AddConfiguration' }
    },
      {
        path: 'updateconfiguration/:id',
        component: AddConfigurationComponent,
         data: { title: 'Configuration', breadcrumb: 'UpdateConfiguration' }

    }]
  }];