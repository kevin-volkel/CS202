//* Project Type
//* defines what the project will look like
export enum ProjectStatus {
  Active,
  Finished,
}

export class Project {
  constructor(
    public id: string,
    public title: string,
    public descripton: string,
    public people: number,
    public status: ProjectStatus
  ) {}
}