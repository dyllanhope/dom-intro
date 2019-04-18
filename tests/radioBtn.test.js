describe('The RadioBtn function', function(){
    it('Should return grand total of "12.50"', function(){
       var radioBillOne = RadioBtn();
       radioBillOne.bill("call");
       radioBillOne.bill("sms");
       radioBillOne.bill("call");
       radioBillOne.bill("call");
       radioBillOne.bill("sms");
       radioBillOne.bill("call");
       
       assert.equal(radioBillOne.total(), "12.50" );
    });
   it('Should return call total of "11.00"', function(){
      var radioBillOne = RadioBtn();
       radioBillOne.bill("call");
       radioBillOne.bill("sms");
       radioBillOne.bill("call");
       radioBillOne.bill("call");
       radioBillOne.bill("sms");
       radioBillOne.bill("call");
       assert.equal(radioBillOne.call(), "11.00" );
   });
   it('Should return sms total of "1.50"', function(){
      var radioBillOne = RadioBtn();
       radioBillOne.bill("call");
       radioBillOne.bill("sms");
       radioBillOne.bill("call");
       radioBillOne.bill("call");
       radioBillOne.bill("sms");
       radioBillOne.bill("call");
       assert.equal(radioBillOne.sms(), "1.50" );
   });
   it('Should return warning level of "danger"', function(){
      var radioBillOne = RadioBtn();
      radioBillOne.bill("call");
      radioBillOne.bill("sms");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("sms");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
      radioBillOne.bill("call");
       console.log(radioBillOne.total())
         console.log(radioBillOne.level())
       assert.equal(radioBillOne.level(),"danger");
   });
    it('Should return all totals as "R0.00" with no input', function(){
        var radioBillZero = RadioBtn();
        radioBillZero.bill("");
        assert.equal(radioBillZero.total(), "0.00" );
        assert.equal(radioBillZero.call(), "0.00" );
        assert.equal(radioBillZero.sms(), "0.00" );
        assert.equal(radioBillZero.level(),"safe");
     });
     it('should return the total of the first instance as "31.00" and the second instance as "4.25"', function(){
        var radioBillThree = RadioBtn();
        var radioBillTwo = RadioBtn();
        radioBillThree.bill("call");
        radioBillThree.bill("sms");
        radioBillTwo.bill("call");
        radioBillThree.bill("call");
        radioBillTwo.bill("sms");
        radioBillTwo.bill("sms");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        //first instance
        assert.equal(radioBillThree.total(), "31.00" );
        //second instance
        assert.equal(radioBillTwo.total(), "4.25" );
     });
     it('should return the call total of the first instance as "30.25" and the second instance as "2.75"', function(){
      var radioBillThree = RadioBtn();
        var radioBillTwo = RadioBtn();
        radioBillThree.bill("call");
        radioBillThree.bill("sms");
        radioBillTwo.bill("call");
        radioBillThree.bill("call");
        radioBillTwo.bill("sms");
        radioBillTwo.bill("sms");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        //first instance
        assert.equal(radioBillThree.call(), "30.25" );
        //second instance
        assert.equal(radioBillTwo.call(), "2.75" );
     });
      it('should return the sms total of the first instance as "0.75" and the second instance as "1.50"', function(){var textBillThree = TextBill();
         var radioBillThree = RadioBtn();
        var radioBillTwo = RadioBtn();
        radioBillThree.bill("call");
        radioBillThree.bill("sms");
        radioBillTwo.bill("call");
        radioBillThree.bill("call");
        radioBillTwo.bill("sms");
        radioBillTwo.bill("sms");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
         //first instance
         assert.equal(radioBillThree.sms(), "0.75" );
         //second instance
        assert.equal(radioBillTwo.sms(), "1.50" );
      });
      it('should return the level of the first instance as "warning" and the second instance as "safe"', function(){
         var radioBillThree = RadioBtn();
        var radioBillTwo = RadioBtn();
        radioBillThree.bill("call");
        radioBillThree.bill("sms");
        radioBillTwo.bill("call");
        radioBillThree.bill("call");
        radioBillTwo.bill("sms");
        radioBillTwo.bill("sms");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
        radioBillThree.bill("call");
         //first instance
         console.log(radioBillThree.total());
        assert.equal(radioBillThree.level(),"warning");
        //second instance
        assert.equal(radioBillTwo.level(),"safe");
     });
});