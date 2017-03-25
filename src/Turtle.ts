import { Animal } from "./Animal";

export class Turtle extends Animal {
    constructor(name: string) {
        super(name, "green");
    }

    public greet() {
        return "rbrbrb...";
    }
}
