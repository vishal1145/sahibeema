import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { 
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
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
import { SharedModule } from './../../shared/shared.module';
import { AppInboxComponent } from './app-inbox.component';
import { AddArticleComponent } from './addArticles/addArticle.component';
import { MailComposeComponent } from './mail-compose.component';
import { InboxRoutes } from "./app-inbox.routing";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatCardModule,
    MatSidenavModule,
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
    RouterModule.forChild(InboxRoutes)
  ],
  declarations: [AppInboxComponent, MailComposeComponent,AddArticleComponent],
  entryComponents: [MailComposeComponent]
})
export class AppInboxModule { }
