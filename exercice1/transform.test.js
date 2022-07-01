const transform = require("./transform")


describe("Transform test suite", () => {
    it("Transform input array", () => {

        const input = [
            ["key1", 1, 2, 3, 4],
            ["key2", 4, 5, 6, 7]
        ]

        const output = {
            key1: [1, 2, 3, 4],
            key2: [4, 5, 6, 7],
        }

        ans = transform(input);

        expect(ans).toEqual(output);
    })
})