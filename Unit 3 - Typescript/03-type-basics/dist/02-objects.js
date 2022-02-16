"use strict";
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READONLY"] = 202] = "READONLY";
    Role[Role["AUTHOR"] = 203] = "AUTHOR";
})(Role || (Role = {}));
var person = {
    name: "timmy",
    age: 50,
    hobbies: ['soccer', 'cooking'],
    role: Role.ADMIN
};
console.log(person);
var product = {
    name: "timmy",
    age: 50,
    tags: ['soccer', 'cooking'],
    description: [19, 'Soccer Ball']
};
//! Pushing to tuples skips the length and type checking
// product.description.push('testing')
//# sourceMappingURL=02-objects.js.map