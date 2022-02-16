let Unknown: string | number;

Unknown = "test";

const add2 = (n1: number) => {
  console.log(n1 + n1);
}

if (typeof(Unknown) === 'number'){
  add2(Unknown)
} else {
  console.log(Unknown);
}

type Combinable = number | string;
type Conversion = "as-num" | "as-str"

const combine = (
  input1: Combinable,
  input2: Combinable,
  convert: Conversion
): Combinable => {
  let result : Combinable
  if(convert == 'as-num'){
    result = +input1 + +input2
    return result;
  }
  if(convert == 'as-str'){
    result = '' + input1 + input2
    return result;
  } else {
    return "not a valid conversion"
  }
}

enum Title {
  'NEW',
  'EXPERIENCED',
  'VET',
}

type Item = [string, number, number]

type Hero = {
  health: number;
  name: string;
  stats: {
    strength: number;
    dexterity: number;
    intelligence: number;
  }
  inventory: Item[],
  title: Title;
};

function errorThrow (message : string, code: number) : never {
  throw new Error(message + ' ' + code)
}