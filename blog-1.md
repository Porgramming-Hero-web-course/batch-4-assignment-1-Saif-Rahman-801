#The Significance of Union Types in TypeScript
In TypeScripts Union type allows developer to hold multiple possible types of a Variable. We use | this for using Union type

###Example: 
let variable1: string | number
variable1 = "Hello world" // valid 
variable2 = 2 // valid too

We can Understand it's significance In real world scenario,It's perfect for Api response, flexible input types and optional fields

#The Significance of Intersection Types in TypeScript
The typescript Intersection type let's you combine multiple types in one, We use & operator for intersecting types

###Example:
type User = { name: string; email: string };
type AdminInfo = { admin: true;};

type AdminUser = User & AdminInfo;

const adminUser: AdminUser = {
  name: "Bob",
  email: "bob@example.com",
  admin: true,
};
