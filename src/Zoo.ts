import { Animal } from "./Animal";

export class Zoo {
    public residents: Animal[] = [];

    public capture(a: Animal) {
        this.residents.push(a);
    }

    public get residentCount() {
        return this.residents.length;
    }
}
