const { faker } = require("@faker-js/faker");

let giveName = () => faker.name.findName();
let giveChildrenNumber = () => faker.datatype.number({min:0, max: 2});


let genealogicalTree = () => {
    let root = {};
    root["name"] = giveName();
    let num = giveChildrenNumber();
    let children = [];
    root["children"] = children;

    for(let i = 0; i < num; i++) {
        children[i] = genealogicalTree();
    }

    
    
    return root;
}



module.exports = genealogicalTree;

let root = genealogicalTree();

console.log(root);

// Question2
// If we have 3 as maximum children array size, we may exceed the maximum call stack
// In fact, the probability to have 0 child for a node at height n is (1/4)**n which is very low. It is highly probable to have huge tree