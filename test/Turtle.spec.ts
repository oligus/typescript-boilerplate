import Turtle from '../src/Turtle';
import { expect } from 'chai';
import 'mocha';

describe('Turtle', () => {
    it('should be instantiated', () => {
       let michael = new Turtle('michael');
       expect(michael.name).to.equal('michael');
       expect(michael.color).to.equal('green');
    });

    it('should greet', () => {
        let michael = new Turtle('michael');
        expect(michael.greet()).to.equal('rbrbrb...');
    });
});
