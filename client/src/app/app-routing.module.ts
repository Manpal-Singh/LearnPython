import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContactsComponent} from './contacts/contacts.component';
import {SignupComponent} from './signup/signup.component';
import {HomeviewComponent} from './homeview/homeview.component';
import {LoginComponent} from './login/login.component';
import {TutorialComponent} from './tutorial/tutorial.component';
import {QuizComponent} from './quiz/quiz.component';
import {PracticeComponent} from './practice/practice.component';
import {QuestionComponent} from './question/question.component';

import {HomeComponent} from './tutorialContainer/home/home.component';
import {IntroductionComponent} from './tutorialContainer/introduction/introduction.component';


import { from } from 'rxjs';


// const routes: Routes = [
//   {path: 'mycontact', component: ContactsComponent},
//   {path: 'signup', component: SignupComponent}
//   ],

  // tslint:disable-next-line: align
  const routes: Routes = [
    {path: '', component: HomeviewComponent},
    {path: 'home', component: HomeviewComponent},
    {path: 'signup', component: SignupComponent},
    {path: 'login', component: LoginComponent},
    // {path: 'tutorial', component: TutorialComponent},
    {path: 'quiz', component: QuizComponent},
    {path: 'practice', component: PracticeComponent},
    {path: 'question', component: QuestionComponent},

    {path: 'signup/login', component: LoginComponent},
    // navigation from card
    {path: 'home/tutorial', component: TutorialComponent},
    {path: 'home/quiz', component: QuizComponent},
    {path: 'home/practice', component: PracticeComponent},
    {path: 'home/question', component: QuestionComponent},

    // { path: 'tutorial/pythonHome', component: HomeComponent },
    // { path: 'tutorial/pythonIntro', component: IntroductionComponent },
      // children: [
      //   { path: 'signup', component: SignupComponent }
      // ]
      {
        path: 'tutorial',
        component: TutorialComponent,
        children: [
          { path: 'pythonHome', component: HomeComponent },
          { path: 'pythonintroduction', component: IntroductionComponent },
        ]
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
