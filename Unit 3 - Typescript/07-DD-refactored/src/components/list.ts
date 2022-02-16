import { Autobind } from "../decorators/auto-bind";
import { DragTarget } from "../interface/drag-drop";
import { Project, ProjectStatus } from "../interface/project-model";
import { projectState } from "../state/project";
import { ProjectItem } from "./item";


export class ProjectList implements DragTarget {

  templateElem: HTMLTemplateElement;
  hostElem: HTMLElement;
  element: HTMLElement;
  assignedProjects: Project[];

  constructor(private type: "active" | "finished") {
    this.assignedProjects = [];
    this.templateElem = document.getElementById('project-list') as HTMLTemplateElement
    this.hostElem = document.getElementById('app') as HTMLElement;

    const importedTemplate = document.importNode(this.templateElem.content, true)
    this.element = importedTemplate.querySelector('section') as HTMLElement;
    this.element.id = `${type}-projects`
    

    this.attach();
    this.init();
    this.renderContent();
  }

  private init() {
    this.element.addEventListener('dragover', this.dragOverHandler)
    this.element.addEventListener('dragleave', this.dragLeaveHandler)
    this.element.addEventListener('drop', this.dropHandler)

    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter( (prj) => {
        if(this.type === 'active') {
          return prj.status === ProjectStatus.Active
        }
        return prj.status === ProjectStatus.Finished
      })
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    })
  }

  private renderProjects() {
    const listElem = document.getElementById(`${this.type}-projects-list`) as HTMLUListElement
    listElem.innerHTML = '';
    for(const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector('ul')!.id, prjItem)
    }
  }

  private renderContent() {
    const listId = `${this.type}-projects-list`
    this.element.querySelector('ul')!.id = listId
    this.element.querySelector('h2')!.textContent = this.type.toUpperCase() + " Projects"
  }

  private attach() {
    this.hostElem.insertAdjacentElement('beforeend', this.element)
  }

  @Autobind
  dragLeaveHandler(_: DragEvent): void {
    const listElem = this.element.querySelector('ul')!
    listElem.classList.remove('droppable')
  }

  @Autobind
  dragOverHandler(e: DragEvent): void {
    if(e.dataTransfer && e.dataTransfer.types[0] === 'text/plain') {
      e.preventDefault();
      const listElem = this.element.querySelector('ul')!
      listElem.classList.add('droppable')
    }
  }

  @Autobind
  dropHandler(e: DragEvent): void {
    const prjId = e.dataTransfer!.getData('text/plain')
    projectState.moveProject(prjId, this.type === 'active' ? ProjectStatus.Active : ProjectStatus.Finished)
  }
}