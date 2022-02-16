let num: number = 5;
const user: string = 'test';

const add = (n1: number, n2: number): string => {
  console.log(n1 + n2);
  return `The sum is ${n1 + n2}`;
};

const addAndHandle = (
  n1: number,
  n2: number,
  cb: (result: string) => void
): void => {
  const result: number = n1 + n2;
  cb(String(result));
};

addAndHandle(2, 67, (result) => {
  console.log(`${result}: Nice`);
});

const concatAndHandle = (
  str1: string,
  str2: string,
  cb: (result: string) => void
): void => {
  const result : string = `${str1} ${str2}`
  cb(result)
}
concatAndHandle('nice', 'day', (result) => {
  console.log(result);
})

const concatAll = (
  cb: (result: string) => void,
  ...strings : string[]
) : void => {
  const result : string = strings.join(' ')
  cb(result)
}

concatAll((result) => {
  console.log(result);
}, 'hello', 'my', 'name', 'is', 'Kevin')

