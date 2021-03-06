import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { HttpModule } from "@angular/http";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxGalleryModule } from "ngx-gallery";
import { AppRoutingModule } from './app-routing.module';
import { CollapsibleModule } from "ngx-collapsible";

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LeadingComponent } from './leading/leading.component';
import { ArticleComponent } from './article/article.component';

import { NavbarComponent } from './navbar/navbar.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PhotosComponent } from './photos/photos.component';
import { ParticlesComponent } from './particles/particles.component';
import { ProceduralComponent } from './procedural/procedural.component';
import { RandomEyesComponent } from './random-eyes/random-eyes.component';
import { ArtComponent } from './art/art.component';
import { OpOutputComponent } from './op-output/op-output.component';
import { DesignComponent } from './design/design.component';
import { SkillsComponent } from './skills/skills.component';
import { ResumeComponent } from './resume/resume.component';
import { EducationComponent } from './education/education.component';
import { ContactComponent } from './contact/contact.component';
import { CodeComponent } from './code/code.component';

import { SharedModule } from './shared/shared.module';
import { RecaptchaModule } from 'ng-recaptcha';

import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AngularFireModule } from "angularfire2";

import { environment } from "../environments/environment";
import { HomeComponent } from './home/home.component';
import { IfMediaModule } from "ng2-if-media";
import { TypingAnimationModule } from "angular-typing-animation";
import { TopnavComponent } from './topnav/topnav.component';
import { FooterComponent } from './footer/footer.component';
import { AngularSvgIconModule } from "angular-svg-icon";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeadingComponent,
    ArticleComponent,
    NavbarComponent,
    GalleryComponent,
    PhotosComponent,
    ParticlesComponent,
    ProceduralComponent,
    RandomEyesComponent,
    ArtComponent,
    OpOutputComponent,
    DesignComponent,
    SkillsComponent,
    ResumeComponent,
    EducationComponent,
    ContactComponent,
    CodeComponent,
    HomeComponent,
    TopnavComponent,
    FooterComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxGalleryModule,
    HttpClientModule,
    CollapsibleModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebase),
    NgbModule.forRoot(),
    RecaptchaModule.forRoot(), 
    TypingAnimationModule,
    AngularSvgIconModule,
    BrowserAnimationsModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
