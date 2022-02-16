enum Role {
  "ADMIN",
  "READONLY" = 202,
  "AUTHOR"
}

const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role
} = {
  name: "timmy",
  age: 50,
  hobbies: ['soccer', 'cooking'],
  role: Role.ADMIN
}


console.log(person)


const product: {
  name: string;
  age: number;
  tags: string[];
  description: [number, string]
} = {
  name: "timmy",
  age: 50,
  tags: ['soccer', 'cooking'],
  description: [19, 'Soccer Ball']
}

//! Pushing to tuples skips the length and type checking
// product.description.push('testing')
