describe('The CalculateBtn function', function(){
    it('Should return "R9.00" with 3x calls and 1x sms', function(){
       var calcBillOne = CalculateBtn();
       calcBillOne.bill("call,call,sms,call");
       assert.equal(calcBillOne.total(), "9.00" );
       assert.equal(calcBillOne.level(), "safe")
    });
    it('Should return "R0.00" with no string entry', function(){
        var calcBillOne = CalculateBtn();
        calcBillOne.bill("");
        assert.equal(calcBillOne.total(), "0.00" );
        assert.equal(calcBillOne.level(), "safe")
     });
     it('Should return "R30.50" for the first instance with "warning level" & "R1.50" for the second', function(){
        var calcBillOne = CalculateBtn();
        var calcBillTwo = CalculateBtn();
        calcBillOne.bill("call,call,call,call,call,call,call,call,call,call,call");
        calcBillTwo.bill("sms,sms");
        //first instance
        assert.equal(calcBillOne.total(), "30.25" );
        assert.equal(calcBillOne.level(), "warning")
        //second instance
        assert.equal(calcBillTwo.total(), "1.50" );
        assert.equal(calcBillTwo.level(), "safe")
     });
});