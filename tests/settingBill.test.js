describe('The SettingBill function', function(){
    it('Should return grand total of "R10.00" with 4x calls and 2x sms with call total being "R8.00" and sms total being "R2.00" with a "warning level"', function(){
       var settingBillOne = SettingBill();
       settingBillOne.bill("call");
       settingBillOne.bill("sms");
       settingBillOne.update("2","1","8","20");
       settingBillOne.bill("call");
       settingBillOne.bill("call");
       settingBillOne.bill("sms");
       settingBillOne.bill("call");
       settingBillOne.bill("sms");
       settingBillOne.bill("call");
       assert.equal(settingBillOne.total(), "10.00" );
       assert.equal(settingBillOne.callTotal(), "8.00" );
       assert.equal(settingBillOne.smsTotal(), "2.00" );
       assert.equal(settingBillOne.level(),"warning");
    });
    it('Should return "R0.00" for all totals  as there were no entries', function(){
        var settingBillOne = SettingBill();
        settingBillOne.bill("");
        assert.equal(settingBillOne.total(), "0.00" );
        assert.equal(settingBillOne.callTotal(), "0.00" );
        assert.equal(settingBillOne.smsTotal(), "0.00" );
        assert.equal(settingBillOne.level(),"danger");
     });
     it('Should return correct  totals for both instances created, the second instance should have a "warning level"', function(){
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
        assert.equal(settingBillOne.callTotal(), "4.00" );
        assert.equal(settingBillOne.smsTotal(), "1.00" );
        assert.equal(settingBillOne.level(),"safe");
        //second instance
        assert.equal(settingBillTwo.total(), "10.00" );
        assert.equal(settingBillTwo.callTotal(), "6.00" );
        assert.equal(settingBillTwo.smsTotal(), "4.00" );
        assert.equal(settingBillTwo.level(),"warning");
     });
});