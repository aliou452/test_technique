const objectToStringList = require("./objectToStringList")


describe("Object to list of string test suits", () => {


    it("Test an example", () => {

        let tree = objectToStringList.giveExample();

        let res = objectToStringList.response(tree);

        let toBetested = objectToStringList.treePaths(tree);

        for(let i = 0; i < 3; i++){
            expect(toBetested[0]).toEqual(res[0]);
        }
    })

})