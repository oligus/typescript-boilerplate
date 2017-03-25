import { expect } from "chai";
import "mocha";
import { Turtle } from "../src/Turtle";

describe("Turtle", () => {
    it("should be instantiated", () => {
       const michael = new Turtle("michael");
       expect(michael.name).to.equal("michael");
       expect(michael.color).to.equal("green");
    });

    it("should greet", () => {
        const michael = new Turtle("michael");
        expect(michael.greet()).to.equal("rbrbrb...");
    });
});
