import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PublicationacceptedComponent } from './publicationaccepted/publicationaccepted.component';
import { PublicationunderreviewComponent } from './publicationunderreview/publicationunderreview.component';
import { ResumeComponent } from './resume/resume.component';
import { ConferenceabstractComponent } from './conferenceabstract/conferenceabstract.component';
import { PublicationComponent } from './publication/publication.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'resume', component: ResumeComponent },
  { path: 'publications', component: PublicationComponent },
  { path: 'publication-accepted', component: PublicationacceptedComponent },
  { path: 'publication-under-review', component: PublicationunderreviewComponent },
  { path: 'conference-abstract', component: ConferenceabstractComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
