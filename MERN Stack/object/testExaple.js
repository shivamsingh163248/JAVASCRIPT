let parent = { name: "parent", children: [] };
let childl = Object.create(parent);
console.log(childl.children) ; 
childl.name = "child1";
console.log(childl) ; 
childl.children.push(childl.name); // beacus arrys have the same addrress 
console.log(childl) ; 
console.log(parent) ; 
