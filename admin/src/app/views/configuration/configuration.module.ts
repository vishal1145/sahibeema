import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ITCommonModule} from 'providers/common.module'
import { 
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatRadioModule,
  MatCardModule,
  MatSidenavModule,
  MatMenuModule,
  MatInputModule,
  MatDialogModule,
  MatListModule,
  MatChipsModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatExpansionModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ConfigurationComponent } from './configuration.component';
import { AddConfigurationComponent } from './addConfiguration/addConfiguration.component';
import { ConfigurationRoutes } from "./configuration.routing";

@NgModule({
  imports: [
    CommonModule,
    ITCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatChipsModule,
    MatCardModule,
    MatSidenavModule,
    MatRadioModule,
    MatMenuModule,
    MatInputModule,
    NgxDatatableModule,
    MatDialogModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatExpansionModule,
    NgxPaginationModule,
    FlexLayoutModule,
    QuillModule,

    SharedModule,
     RouterModule.forChild(ConfigurationRoutes)
  ],
  declarations: [ConfigurationComponent,AddConfigurationComponent],
  // entryComponents: [MailComposeComponent]
})
export class ConfigurationModule { }
