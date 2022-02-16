console.log('something goes here');

const username = 'Jimmy'


const userObj = {
  user: "Timmy", 
  id: 1234
}

const { user, id } = userObj

const add = (n1: number, n2: number = 10) => {
  console.log(n1 + n2);
  return;
}

const numArray = [1, 2, 3, 4]

const addAll = (curr : string, ...numbers : number[]) => {
  console.log(curr + ' is working');
  return numbers.reduce( (curr, num) => {
    return curr + num
  }, 0)
}

console.log(addAll('Reve', ...numArray));

const button = document.querySelector('button')

button?.addEventListener('click', () => {
  console.log('ping');
})