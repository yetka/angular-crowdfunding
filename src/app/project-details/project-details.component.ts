import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { ProjectService } from '../project.service';
import { FirebaseObjectObservable } from 'angularfire2/database';
import { Project } from '../project.model';

@Component({
  selector: 'app-project-details',
  templateUrl: './project-details.component.html',
  styleUrls: ['./project-details.component.css'],
  providers: [ProjectService]
})
export class ProjectDetailsComponent implements OnInit {
  projectId: string;
  projectToDisplay;
  projectToUpdate: Project;


  constructor(private route: ActivatedRoute, private location: Location, private projectService: ProjectService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.projectId = urlParameters['id'];
    });
    this.projectToDisplay = this.projectService.getProjectById(this.projectId);
    this.projectService.getProjectById(this.projectId).subscribe(dataLastEmittedFromObserver => {
      this.projectToUpdate = dataLastEmittedFromObserver;
    });
  }

  beginDeletingProject(projectToDelete) {
    if(confirm("Are you sure you want to delete this project from the database?")) {
      this.projectService.deleteProject(projectToDelete);
    }
  }

  makeDonation(donationAmount: string) {
    this.projectToUpdate.fundsRaised += parseInt(donationAmount, 10);
    this.projectService.addDonation(this.projectToUpdate);
    this.projectService.hasGoalBeenReached(this.projectToUpdate);
  }

}
