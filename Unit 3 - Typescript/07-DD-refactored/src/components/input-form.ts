import { Autobind } from '../decorators/auto-bind';
import { projectState } from '../state/project'
import { Validatable, validate } from '../util/validation';

export class ProjectInput {
  templateElem: HTMLTemplateElement;
  hostElem: HTMLElement;
  formElem: HTMLFormElement;
  descInputElem: HTMLInputElement;
  titleInputElem: HTMLInputElement;
  peopleInputElem: HTMLInputElement;

  constructor() {
    this.templateElem = document.getElementById('project-input') as HTMLTemplateElement
    this.hostElem = document.getElementById('app') as HTMLElement
    
    const importedTemplate = document.importNode(this.templateElem.content, true)
    
    this.formElem = importedTemplate.firstElementChild as HTMLFormElement
    this.formElem.id = "user-input"
    
    this.titleInputElem = this.formElem.querySelector('#title') as HTMLInputElement;
    this.peopleInputElem = this.formElem.querySelector('#people') as HTMLInputElement;
    this.descInputElem = this.formElem.querySelector('#description') as HTMLInputElement;
    
    this.init()
    this.attach()
  }
  
  
  private init() {
    this.formElem.addEventListener('submit', this.submitHandler)
  }

  //! private because it will only be used by the class
  private attach() {
    this.hostElem.insertAdjacentElement("afterbegin", this.formElem)
  }

  @Autobind
  private submitHandler(e : Event) {
    e.preventDefault();
    const userInputs = this.gatherUserInputs()
    if(userInputs){
      const [title, desc, people] = userInputs
      console.log(title, desc, people);

      projectState.addProject(title, desc, people)
      this.clearInputs();
    }
  }

  private clearInputs() {
    this.titleInputElem.value = ''
    this.descInputElem.value = ''
    this.peopleInputElem.value = ''
  }

  private gatherUserInputs () : [string, string, number] | void {
    const userTitle = this.titleInputElem.value;
    const userDesc = this.descInputElem.value;
    const userPeople = this.peopleInputElem.value;

    const titleIsValid: Validatable = {
      value: userTitle,
      required: true
    }
    const descIsValid: Validatable = {
      value: userDesc,
      required: true,
      minLength: 4 
    }
    const peopleIsValid: Validatable = {
      value: +userPeople,
      required: true,
      min: 1,
      max: 5
    }

    if(
      !validate(titleIsValid) || 
      !validate(descIsValid) ||
      !validate(peopleIsValid)
    ){
      console.log('something is blank, fill it in');
      return;
    }

    return [userTitle, userDesc, +userPeople]
  }
  
}