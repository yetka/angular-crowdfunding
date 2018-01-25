export class Project {
  public fundsReceived: number = 0;
  constructor (public name: string, public manager: string, public description: string, public fundingGoal: number, public fundDirective: string, public donorRewards: string)
  { }
}
