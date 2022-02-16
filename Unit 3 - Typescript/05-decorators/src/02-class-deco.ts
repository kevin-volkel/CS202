//! property deco - 2 args
//* target which is the constructor
//* name of the property
function PropLog(target: any, propName: string | Symbol) {
  console.log('PROPERTY DECO');
  console.log(target);
  console.log(propName);
}

//! accessor deco - 3 args (setter / getter)
//* target
//* name
//* description of the accessor method
function AccLog(target: any, name: string, desc: PropertyDescriptor) {
  console.log('ACCESS DECO');
  console.log(target);
  console.log(name);
  console.log(desc);
}

//! method deco - 3 args
//* target
//* name
//* description of the accessor method
function MethodLog(target: any, name: string, desc: PropertyDescriptor) {
  console.log('METHOD DECO');
  console.log(target);
  console.log(name);
  console.log(desc);
}

//! parameter deco - 2 args
//* target
//* name
//* index that the param is in the arguments
function ParLog(target: any, name: string, position: number) {
  console.log('PARAMETER DECO');
  console.log(target);
  console.log(name);
  console.log(position);
}


class Product {
  title: string;
  @PropLog
  private _price: number;

  @AccLog
  set price(val: number) {
    if (val >= 0) {
      this._price = val;
    } else {
      throw new Error('invalid price');
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }

  @MethodLog
  getPriceWithTax(@ParLog tax: number = 0.12): number {
    return this._price * (1 + tax);
  }
}
