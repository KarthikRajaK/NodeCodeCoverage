var chai = require('chai');
var expect = require('chai').expect;
var controller = require('../private/controller');
var simple = require('../public/simple');

describe('Simple Controller Verification', function(){
    describe('Welcome Greetings', function(){
        it('Greet as Welcome', function(){
            var name = 'Karthik Raja';
            var message = controller.greet(name);
            expect(message).to.equal('Welcome Karthik Raja');
        });
         it('Convert and Greet', function(){
            var name = 'KARTHIK-RAJA';
            var nameLower = simple.convertLowerCase(name);
            var message = controller.greet(nameLower);
            expect(message).to.equal('Welcome karthik raja');
         });
    });
});