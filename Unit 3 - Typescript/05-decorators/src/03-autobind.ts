function AutoBind(_ : any, _2: string, desc: PropertyDescriptor) {
  const originalMethod = desc.value
  console.log(desc);
  console.log(originalMethod);
  
  const adjDescriptor : PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this)
      return boundFn
    }
  }
  return adjDescriptor;
}


class Printer {
  message = "This doesn't work"
  
  //! without binding, this will show undefined because there is no constructor defined
  @AutoBind
  showMessage() {
    console.log(this.message);
  }
}

const p = new Printer()
p.showMessage();

const buttonElem = document.querySelector('button')!
buttonElem.addEventListener('click', p.showMessage)
// buttonElem.addEventListener('click', p.showMessage.bind(p))