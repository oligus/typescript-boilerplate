import { expect } from "chai";
import "mocha";
import { Hello } from "../src/Hello";

describe("Hello", () => {
    it("should greet", () => {
        const greeter = new Hello("Hello, world!");
        expect(greeter.greet()).to.equal("<h1>Hello, world!</h1>");
    });
});
