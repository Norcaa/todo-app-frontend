import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksComponent } from './components/tasks/tasks.component';

const routes: Routes = [
  {path:'', component: AppComponent},
  {path:'tasks', component: TasksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
