import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';
import { Project } from '../project.model';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css'],
  providers: [ProjectService]
})
export class AddProjectComponent implements OnInit {

  constructor(private projectService: ProjectService) { }

  ngOnInit() {
  }

  submitForm(name: string, manager: string, description: string, fundingGoal: string, fundDirective: string, donorRewards: string) {
    const newProject: Project = new Project(name, manager, description, parseInt(fundingGoal, 10), fundDirective, donorRewards);
    this.projectService.addProject(newProject);
  };
}
