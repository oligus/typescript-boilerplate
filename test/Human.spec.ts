import { expect } from "chai";
import "mocha";

import { Human } from "../src/Human";

describe("Human", () => {
    it("should be instantiated", () => {
       const seth = new Human("seth");
       expect(seth.name).to.equal("seth");
       expect(seth.color).to.equal("blue");
    });

    it("should greet", () => {
        const seth = new Human("seth");
        expect(seth.greet()).to.equal("Hello there, my name is seth");
    });
});
