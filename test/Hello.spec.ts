
import Hello from '../src/Hello'
import { expect } from 'chai';
import 'mocha';

describe('Hello', () => {
    it('should greet', () => {
        var greeter = new Hello("Hello, world!");

        expect(greeter.greet()).to.equal('<h1>Hello, world!</h1>')
        
    })
});


