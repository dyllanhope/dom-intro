describe('The TextBill function', function(){
    it('Should return grand total of "12.50"', function(){
       var textBillOne = TextBill();
       textBillOne.bill("call");
       textBillOne.bill("sms");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("sms");
       textBillOne.bill("call");
       
       assert.equal(textBillOne.total(), "12.50" );
    });
   it('Should return call total of "11.00"', function(){
      var textBillOne = TextBill();
       textBillOne.bill("call");
       textBillOne.bill("sms");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("sms");
       textBillOne.bill("call");
       assert.equal(textBillOne.call(), "11.00" );
   });
   it('Should return sms total of "1.50"', function(){
      var textBillOne = TextBill();
       textBillOne.bill("call");
       textBillOne.bill("sms");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("sms");
       textBillOne.bill("call");
       assert.equal(textBillOne.sms(), "1.50" );
   });
   it('Should return warning level of "danger"', function(){
      var textBillOne = TextBill();
      textBillOne.bill("call");
       textBillOne.bill("sms");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("sms");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       textBillOne.bill("call");
       console.log(textBillOne.total())
         console.log(textBillOne.level())
       assert.equal(textBillOne.level(),"danger");
   });
    it('Should return all totals as "R0.00" with no input', function(){
        var textBillZero = TextBill();
        textBillZero.bill("");
        assert.equal(textBillZero.total(), "0.00" );
        assert.equal(textBillZero.call(), "0.00" );
        assert.equal(textBillZero.sms(), "0.00" );
        assert.equal(textBillZero.level(),"safe");
     });
     it('should return the total of the first instance as "31.00" and the second instance as "4.25"', function(){
        var textBillThree = TextBill();
        var textBillTwo = TextBill();
        textBillThree.bill("call");
        textBillThree.bill("sms");
        textBillTwo.bill("call");
        textBillThree.bill("call");
        textBillTwo.bill("sms");
        textBillTwo.bill("sms");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        //first instance
        assert.equal(textBillThree.total(), "31.00" );
        //second instance
        assert.equal(textBillTwo.total(), "4.25" );
     });
     it('should return the call total of the first instance as "30.25" and the second instance as "2.75"', function(){
      var textBillThree = TextBill();
      var textBillTwo = TextBill();
      textBillThree.bill("call");
      textBillThree.bill("sms");
      textBillTwo.bill("call");
      textBillThree.bill("call");
      textBillTwo.bill("sms");
      textBillTwo.bill("sms");
      textBillThree.bill("call");
      textBillThree.bill("call");
      textBillThree.bill("call");
      textBillThree.bill("call");
      textBillThree.bill("call");
      textBillThree.bill("call");
      textBillThree.bill("call");
      textBillThree.bill("call");
      textBillThree.bill("call");
        //first instance
        assert.equal(textBillThree.call(), "30.25" );
        //second instance
        assert.equal(textBillTwo.call(), "2.75" );
     });
      it('should return the sms total of the first instance as "0.75" and the second instance as "1.50"', function(){var textBillThree = TextBill();
         var textBillTwo = TextBill();
         textBillThree.bill("call");
         textBillThree.bill("sms");
         textBillTwo.bill("call");
         textBillThree.bill("call");
         textBillTwo.bill("sms");
         textBillTwo.bill("sms");
         textBillThree.bill("call");
         textBillThree.bill("call");
         textBillThree.bill("call");
         textBillThree.bill("call");
         textBillThree.bill("call");
         textBillThree.bill("call");
         textBillThree.bill("call");
         textBillThree.bill("call");
         textBillThree.bill("call");
         //first instance
         assert.equal(textBillThree.sms(), "0.75" );
         //second instance
        assert.equal(textBillTwo.sms(), "1.50" );
      });
      it('should return the level of the first instance as "warning" and the second instance as "safe"', function(){
         var textBillThree = TextBill();
        var textBillTwo = TextBill();
        textBillThree.bill("call");
        textBillThree.bill("sms");
        textBillTwo.bill("call");
        textBillThree.bill("call");
        textBillTwo.bill("sms");
        textBillTwo.bill("sms");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
        textBillThree.bill("call");
         //first instance
         console.log(textBillThree.total())
         console.log(textBillThree.level())
        assert.equal(textBillThree.level(),"warning");
        //second instance
        assert.equal(textBillTwo.level(),"safe");
     });
});