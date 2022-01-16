import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { DummyComponent } from './dummy/dummy.component';
import { ReactiveFormComponent } from './reactiveForms/reactiveForms.component';
import { TemplateFormComponent } from './templateForms/template.component';

const routes: Routes = [
  { path: 'dummy', component: DummyComponent },
  { path: 'reactiveForm', component: ReactiveFormComponent },
  { path: 'templateForm', component: TemplateFormComponent },
  { path: ' ', component: AppComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
