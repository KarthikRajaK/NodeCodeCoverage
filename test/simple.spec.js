var chai = require('chai');
var expect = require('chai').expect;
var simple = require('../public/simple');

describe('Simple Operation Verification', function(){
    describe('Uppercase Convertor', function(){
        it('should original value will converted to uppercase', function(){
            var name = 'karthik raja';
            var nameUpper = simple.convertUpperCase(name);
            expect(nameUpper).to.equal('KARTHIK RAJA');
        });
        it('should original value will converted and remove - to ', function(){
            var name = 'karthik-raja';
            var nameUpper = simple.convertUpperCase(name);
            expect(nameUpper).to.equal('KARTHIK RAJA');
        });
    });
    describe('Lowercase Convertor', function(){
        it('should original value will converted to uppercase');
        it('should original value will converted and remove - to ');
    });
});
