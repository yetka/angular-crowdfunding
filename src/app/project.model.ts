export class Project {
  public fundsRaised: number = 0;
  public goalReached: boolean = false;
  constructor (public name: string, public manager: string, public description: string, public fundingGoal: number, public fundDirective: string, public donorRewards: string)
  { }
}
