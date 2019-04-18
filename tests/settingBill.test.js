describe('The SettingBill function', function(){
    it('Should return total of "10.00" with 4x calls at R2 per and 2x sms at R1 per ', function(){
       var settingBillOne = SettingBill();
       settingBillOne.bill("call");
       settingBillOne.bill("sms");
       settingBillOne.update("2","1","8","10");
       settingBillOne.bill("call");
       settingBillOne.bill("call");
       settingBillOne.bill("sms");
       settingBillOne.bill("call");
       settingBillOne.bill("sms");
       settingBillOne.bill("call");
       assert.equal(settingBillOne.total(), "10.00" );
    });
    it('Should return call total "8.00" at R2 per call ', function(){
      var settingBillOne = SettingBill();
      settingBillOne.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.update("2","1","8","10");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.bill("call");
       assert.equal(settingBillOne.callTotal(), "8.00" );
    });
    it('Should return sms total "2.00" at R1 per sms', function(){
      var settingBillOne = SettingBill();
      settingBillOne.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.update("2","1","8","10");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.bill("call");
       assert.equal(settingBillOne.smsTotal(), "2.00" );
    });
    it('Should return a level of "danger"', function(){
      var settingBillOne = SettingBill();
      settingBillOne.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.update("2","1","8","10");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.bill("call");
      console.log(settingBillOne.total());
       assert.equal(settingBillOne.level(),"danger");
    });
    it('Should return "R0.00" for all totals  as there were no entries', function(){
        var settingBillOne = SettingBill();
        settingBillOne.bill("");
        assert.equal(settingBillOne.total(), "0.00" );
        assert.equal(settingBillOne.callTotal(), "0.00" );
        assert.equal(settingBillOne.smsTotal(), "0.00" );
        assert.equal(settingBillOne.level(),"danger");
     });
     it('Should return a level of "danger" as there were no entries and default is 0', function(){
      var settingBillOne = SettingBill();
      settingBillOne.bill("");
      assert.equal(settingBillOne.level(),"danger");
   });
     it('Should return a total of "5.00" for the first instance and "10.00" for the second', function(){
        var settingBillOne = SettingBill();
        var settingBillTwo = SettingBill();
        settingBillOne.update("2","1","10","20");
        settingBillTwo.update("3","2","8","30");
        settingBillOne.bill("call");
        settingBillTwo.bill("sms");
        settingBillTwo.bill("call");
        settingBillTwo.bill("sms");
        settingBillTwo.bill("call");
        settingBillOne.bill("sms");
        settingBillOne.bill("call");
        //first instance
        assert.equal(settingBillOne.total(), "5.00" );
        //second instance
        assert.equal(settingBillTwo.total(), "10.00" );
     });
     it('Should return a call total of "4.00" for the first instance and "6.00" for the second', function(){
      var settingBillOne = SettingBill();
      var settingBillTwo = SettingBill();
      settingBillOne.update("2","1","10","20");
      settingBillTwo.update("3","2","8","30");
      settingBillOne.bill("call");
      settingBillTwo.bill("sms");
      settingBillTwo.bill("call");
      settingBillTwo.bill("sms");
      settingBillTwo.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.bill("call");
        //first instance
        assert.equal(settingBillOne.callTotal(), "4.00" );
        //second instance
        assert.equal(settingBillTwo.callTotal(), "6.00" );
     });
     it('Should return a total of "1.00" for the first instance and "4.00" for the second', function(){
      var settingBillOne = SettingBill();
      var settingBillTwo = SettingBill();
      settingBillOne.update("2","1","10","20");
      settingBillTwo.update("3","2","8","30");
      settingBillOne.bill("call");
      settingBillTwo.bill("sms");
      settingBillTwo.bill("call");
      settingBillTwo.bill("sms");
      settingBillTwo.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.bill("call");
        //first instance
        assert.equal(settingBillOne.smsTotal(), "1.00" );
        //second instance
        assert.equal(settingBillTwo.smsTotal(), "4.00" );
     });
     it('Should return warning levels of "safe" for the fist instance and "warning" for the second', function(){
      var settingBillOne = SettingBill();
      var settingBillTwo = SettingBill();
      settingBillOne.update("2","1","10","20");
      settingBillTwo.update("3","2","8","30");
      settingBillOne.bill("call");
      settingBillTwo.bill("sms");
      settingBillTwo.bill("call");
      settingBillTwo.bill("sms");
      settingBillTwo.bill("call");
      settingBillOne.bill("sms");
      settingBillOne.bill("call");
        //first instance
        assert.equal(settingBillOne.level(),"safe");
        //second instance
        console.log(settingBillTwo.total());
        assert.equal(settingBillTwo.level(),"warning");
     });
     it('Should return the total "16.00" with 10x calls as it has a critical level of 15, meaning the total cannot increase once critical level exceeded ', function(){
      var settingBillOne = SettingBill();
      settingBillOne.update("2","1","10","15");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      settingBillOne.bill("call");
      console.log("----------------------------------")
      console.log(settingBillOne.callTotal())
      console.log(settingBillOne.smsTotal())
      assert.equal(settingBillOne.total(),"16.00")
     });
});