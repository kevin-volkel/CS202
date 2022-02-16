interface ValidatorConfig {
  //! this is a class name where you want to validate some props
  [property: string]: {
    //! stores the props that are going to be validated and how
    [validatableProp: string] : string[];
  }
}

//* registeredValidators {
//*   Course: {
//*     title: ['required', 'positive', 'minlength]
//*     price: ['positive']
//*   }
//* }

//! this starts empty and we add to it every time we use the deco
const registeredValidators : ValidatorConfig = {}

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["required"]
  };
}

function Positive(target: any, propName: string) { 
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ["positive"]
  };
}

class Course {
  @Required
  title: string;
  @Positive
  price: number;

  constructor(t: string, p: number){
    this.title = t;
    this.price = p;
  }
}

function validate (obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name]
  if(!objValidatorConfig) return true;
  let isValid = true;
  for(const prop in objValidatorConfig) {
    for(const validator of prop) {
      switch (validator) {
        case 'required': 
          isValid = isValid && !!obj[prop]
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0
          break;
      }
    }
  }
  return isValid;
}

const courseForm = document.querySelector('form');
courseForm?.addEventListener('submit', (e) => {
  e.preventDefault();
  const titleEl = document.getElementById('title') as HTMLInputElement;
  const priceEl = document.getElementById('price') as HTMLInputElement;

  const title = titleEl.value;
  const price = priceEl.value;
  const createdCourse = new Course(title, +price)

  if(!validate(createdCourse)) {
    console.error('Invalid input, try again');
    return;
  }

  //! Normally, this is the place where you save the object permanently
  console.log(createdCourse);
  
})

console.log(registeredValidators);
