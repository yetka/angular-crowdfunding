import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './project-list/project-list.component';
import { ProjectDetailsComponent } from './project-details/project-details.component';
import { EditProjectComponent } from './edit-project/edit-project.component';
import { AddProjectComponent } from './add-project/add-project.component';


const appRoutes: Routes = [
  {
    path: '',
    component: ProjectListComponent
  },
  {
    path: 'project/:id',
    component: ProjectDetailsComponent
  },
  {
    path: 'add-project',
    component: AddProjectComponent
  },
  {
    path: 'project/:id/edit-project',
    component: EditProjectComponent
  }
];


export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
