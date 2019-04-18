describe('The RadioBtn function', function(){
    it('Should return grand total of "R12.50" with 4x calls and 2x sms with call total being "R11.00" and sms total being "R1.50"', function(){
       var radioBillOne = RadioBtn();
       radioBillOne.bill("call");
       radioBillOne.bill("sms");
       radioBillOne.bill("call");
       radioBillOne.bill("call");
       radioBillOne.bill("sms");
       radioBillOne.bill("call");
       assert.equal(radioBillOne.total(), "12.50" );
       assert.equal(radioBillOne.call(), "11.00" );
       assert.equal(radioBillOne.sms(), "1.50" );
       assert.equal(radioBillOne.level(),"safe");
    });
    it('Should return all totals as "R0.00" with no input', function(){
        var radioBillOne = RadioBtn();
        radioBillOne.bill("");
        assert.equal(radioBillOne.total(), "0.00" );
        assert.equal(radioBillOne.call(), "0.00" );
        assert.equal(radioBillOne.sms(), "0.00" );
        assert.equal(radioBillOne.level(),"safe");
     });
     it('Should return each instances totals correctly', function(){
        var radioBillOne = RadioBtn();
        var radioBillTwo = RadioBtn();
        radioBillOne.bill("call");
        radioBillOne.bill("sms");
        radioBillTwo.bill("call");
        radioBillOne.bill("call");
        radioBillTwo.bill("sms");
        radioBillTwo.bill("sms");
        //first instance
        assert.equal(radioBillOne.total(), "6.25" );
        assert.equal(radioBillOne.call(), "5.50" );
        assert.equal(radioBillOne.sms(), "0.75" );
        assert.equal(radioBillOne.level(),"safe");
        //second instance
        assert.equal(radioBillTwo.total(), "4.25" );
        assert.equal(radioBillTwo.call(), "2.75" );
        assert.equal(radioBillTwo.sms(), "1.50" );
        assert.equal(radioBillOne.level(),"safe");
     });
});