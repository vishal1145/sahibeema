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
  MatCheckboxModule,
  MatTooltipModule,
  MatExpansionModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { QuillModule } from 'ngx-quill';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from '../../shared/shared.module';

import { CategoryComponent } from './category.component';
import { AddCategoryComponent } from './addCategory/addCategory.component';
import { CategoryRoutes } from "./category.routing";

@NgModule({
  imports: [
    CommonModule,
    ITCommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
    MatRadioModule,
    MatMenuModule,
    MatInputModule,
    MatDialogModule,
    MatListModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatExpansionModule,
    NgxPaginationModule,
    FlexLayoutModule,
    QuillModule,

    SharedModule,
     RouterModule.forChild(CategoryRoutes)
  ],
  declarations: [CategoryComponent,AddCategoryComponent],
  // entryComponents: [MailComposeComponent]
})
export class CategoryModule { }
