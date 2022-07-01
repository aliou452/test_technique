//Question 1

const giveExample = () => {
    return {
        name: {
            firstname: "Aliou",
            lastname: "SY"
        },

        address: {
            country: "Senegal"
        }
    }
}




// Question2
var treePaths = function(root) {
    ans = [];
    
    let utils = (root, str, num) => {
        
        if(!root) return;
        if(typeof root === "string") {
            ans.push(str + root);
        } else {
            str = str + `node${num}_`; 
            for(const prop in root) {
                utils(root[prop], str, num +1)
            }
        }
    }

    utils(root, '', 1)

    return ans;
};



//Question 3
let response = (input) => ["node1_node2_Aliou", "node1_node2_SY", "node1_node2_Senegal"]

console.log(response())

console.log(treePaths(giveExample()))
module.exports = {
    treePaths: treePaths,
    response: response,
    giveExample: giveExample
}