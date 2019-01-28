import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { IndexComponent} from './index/index.component';
import { ProductComponent} from './product/product.component';
import { TeamComponent} from './team/team.component';
import { ContactComponent} from './contact/contact.component';
import { ArticleComponent} from './article/article.component';
import { ArticlesingleComponent} from './articlesingle/articlesingle.component';
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    IndexComponent,
    ProductComponent,
    TeamComponent,
    ContactComponent,
    ArticleComponent,
    ArticlesingleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
