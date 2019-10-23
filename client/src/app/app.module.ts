import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactsComponent } from './contacts/contacts.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SliderComponent } from './slider/slider.component';
import { HomeviewComponent } from './homeview/homeview.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { PracticeComponent } from './practice/practice.component';
import { QuizComponent } from './quiz/quiz.component';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './tutorialContainer/home/home.component';
import { IntroductionComponent } from './tutorialContainer/introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactsComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    HomeviewComponent,
    SignupComponent,
    LoginComponent,
    TutorialComponent,
    PracticeComponent,
    QuizComponent,
    QuestionComponent,
    HomeComponent,
    IntroductionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
