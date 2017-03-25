export abstract class Animal {
    public name: string;
    public color: string;

    constructor(name: string, color: string) {
        this.name = name;
        this.color = color;
    }

    public abstract greet(): string;
}
