describe('The CalculateBtn function', function(){
    it('Should return "52.25" with 19x calls', function(){
       var calcBillOne = CalculateBtn();
       calcBillOne.bill("call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call");
       assert.equal(calcBillOne.total(), "52.25" );
    });
    it('Should return a level of "danger"', function(){
      var calcBillOne = CalculateBtn();
      calcBillOne.bill("call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call,call");
      assert.equal(calcBillOne.level(), "danger");
   });
    it('Should return "0.00" with no string entry', function(){
        var calcBillOne = CalculateBtn();
        calcBillOne.bill("");
        assert.equal(calcBillOne.total(), "0.00" );
        assert.equal(calcBillOne.level(), "safe");
     });
     it('Should return a level of "safe" with no string entry', function(){
      var calcBillOne = CalculateBtn();
      calcBillOne.bill("");
      assert.equal(calcBillOne.level(), "safe");
   });
     it('Should return "30.50" for the first instance & "1.50" for the second', function(){
        var calcBillOne = CalculateBtn();
        var calcBillTwo = CalculateBtn();
        calcBillOne.bill("call,call,call,call,call,call,call,call,call,call,call");
        calcBillTwo.bill("sms,sms");
        //first instance
        assert.equal(calcBillOne.total(), "30.25" );
        //second instance
        assert.equal(calcBillTwo.total(), "1.50" );
     });
     it('Should return a level of "warning" for the first instance & "safe" for the second', function(){
      var calcBillOne = CalculateBtn();
      var calcBillTwo = CalculateBtn();
      calcBillOne.bill("call,call,call,call,call,call,call,call,call,call,call");
      calcBillTwo.bill("sms,sms");
      //first instance
      assert.equal(calcBillOne.level(), "warning");
      //second instance
      assert.equal(calcBillTwo.level(), "safe");
     });
});