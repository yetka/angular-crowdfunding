import { Pipe, PipeTransform } from '@angular/core';
import { Project } from './project.model';

@Pipe({
  name: 'hasGoalBeenReached',
  pure: false
})
export class HasGoalBeenReachedPipe implements PipeTransform {

  transform(input: Project[], goalReached) {
    //if(input) statement handles the error that ocurs when file is loading data from database and our input not existing for that time
    if (input) {
      const output: Project[] = [];
      if (goalReached === true) {
        for (let i=0; i < input.length; i++) {
          if (input[i].goalReached === true) {
            output.push(input[i]);
          }
        }
        return output;
      } else if (goalReached === false) {
        for (let i=0; i < input.length; i++) {
          if (input[i].goalReached === false) {
            output.push(input[i]);
          }
        }
        return output;
      } else {
        return input;
      }
    }
  }

}
