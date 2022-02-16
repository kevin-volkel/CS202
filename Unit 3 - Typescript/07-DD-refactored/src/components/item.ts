import { Draggable } from "../interface/drag-drop";
import { Project } from "../interface/project-model";
import { Autobind } from "../decorators/auto-bind";

export class ProjectItem implements Draggable {
  project: Project;
  templateElem: HTMLTemplateElement;
  hostElem: HTMLElement;
  element: HTMLElement;

  constructor(private hostId: string, project: Project) {
    this.project = project
    this.templateElem = document.getElementById('single-project') as HTMLTemplateElement
    this.hostElem = document.getElementById(this.hostId) as HTMLElement;


    const importedTemplate = document.importNode(this.templateElem.content, true)
    this.element = importedTemplate.querySelector('li') as HTMLElement;
    this.element.id = `${this.project.id}`;

    this.init();
    this.render();
    this.attach();
  }

  @Autobind
  dragEndHandler(_: DragEvent): void {
    console.log("Dragend");
    
  }

  @Autobind
  dragStartHandler(e: DragEvent): void {
    e.dataTransfer!.setData("text/plain", this.project.id)
    e.dataTransfer!.effectAllowed = "move";
  }

  private attach() {
    this.hostElem.insertAdjacentElement('beforeend', this.element)
  }

  get persons() {
    if(this.project.people === 1){
      return "1 person"
    } else {
      return `${this.project.people} people`
    }
  }

  private init() {
    this.element.addEventListener('dragstart', this.dragStartHandler)
    this.element.addEventListener('dragend', this.dragEndHandler)
  }

  private render() {
    this.element.querySelector('h2')!.textContent = this.project.title;
    this.element.querySelector('h3')!.textContent = this.persons + " assigned";
    this.element.querySelector('p')!.textContent = this.project.descripton;
  }
}