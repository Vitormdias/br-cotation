const expect = require('chai').expect;
const cotation = require('./index')

describe('BR-Cotation' , () => {

  describe('all' , () => {
    it('dolar should be a number', () => {
        cotation.dolar().then(r => expect(r).to.satisfy(isNumber))

        function isNumber(n) {
            return !isNaN(n)
        }
    })

    it('euro should be a number', () => {
        cotation.euro().then(r => expect(r).to.satisfy(isNumber))
        
        function isNumber(n) {
            return !isNaN(n)
        }
    })

    it('peso should be a number', () => {
        cotation.peso().then(r => expect(r).to.satisfy(isNumber))

        function isNumber(n) {
            return !isNaN(n)
        }
    })

    it('libra should be a number', () => {
        cotation.libra().then(r => expect(r).to.satisfy(isNumber))

        function isNumber(n) {
            return !isNaN(n)
        }
    })

    it('bitcoin should be a number', () => {
        cotation.bitcoin().then(r => expect(r).to.satisfy(isNumber))

        function isNumber(n) {
            return !isNaN(n)
        }
    })
  });

});