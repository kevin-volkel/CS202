//! This breaks, too few arguments
// function Logger() {
//   console.log('LOGGING');
// }

//! If a decorator is being used on a class, there MUST be 1 argument
//! that argument is the constructor
// function Logger(constructor : Function) : void{
//   console.log(constructor);
// }

//! you can change any required param to _ to skip it in compiling
// function Logger(_ : Function) {
//   console.log('This works');
// }

//! decorator factory
function Logger(toLog: string) {
  console.log("Logger Factory");
  return function (constructor : Function) {
    console.log(toLog);
    console.log(constructor);
  }
}

//! This creates a decorator that will add the template string to whatever hook 
//! we pass through as long as the ID exists
// function WithTemplate(template: string, hookID: string) {
//   return function (_ : Function) {
//     const hookEl = document.getElementById(hookID)
//     if(hookEl) {
//       hookEl.innerHTML = template;
//     }
//   }
// }

function WithTemplate(template: string, hookID: string) {
  console.log('TEMPLATE FACTORY');
  
  return function (_ : Function) {
    const hookEl = document.getElementById(hookID)
    const p = new Person();
    if(hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name;
    }
  }
}

@Logger('CREATING PERSON DECORATOR')
  @WithTemplate('<h1>Person Class Placeholder</h1>', 'app')
class Person {
  name = "Max"
  
  constructor() {
    console.log("Created Person Object");
  }
}

const max = new Person;

console.log(max);

const newMax = new Person;