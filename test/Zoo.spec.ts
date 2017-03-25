import Zoo from '../src/Zoo';
import Human from '../src/Human';
import { expect } from 'chai';
import 'mocha';

describe('Zoo', () => {
   describe('capture()', () => {
      let zoo: Zoo;
      let seth: Human;

      beforeEach(() => {
          zoo = new Zoo();
          seth = new Human('seth');
          zoo.capture(seth);
      });

      it('should have one happy camper', () => {
        expect(zoo.residentCount).to.equal(1);
      });

      it('should have seth in the zoo', () => {
          expect(zoo.residents[0]).to.equal(seth);
      });
   });
});
