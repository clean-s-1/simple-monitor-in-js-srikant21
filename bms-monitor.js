const {expect} = require('chai');

function batteryIsOk(temperature, soc, charge_rate) {
    if (temperature < 0 || temperature > 45) {
        console.log('Temperature is out of range!');
        return false;
    } else if (soc < 20 || soc > 80) {
        console.log('State of Charge is out of range!')
        return false;
    } else if (charge_rate > 0.8) {
        console.log('Charge rate is out of range!');
        return false;
    }
    return true;
}

function batteryIsOk(temperature, soc, charge_rate) {
    checkTemp(temperature);
    checkSOC(soc);
    checkChargeRate(charge_rate);
}


function checkTemp(temp){
  var tempFlag = temp < 0 || temp > 45 ? false : true;
  if(!tempFlag){
  	messageBuilder('Temperature');
  }
  return tempFlag;
}

function checkSOC(soc){
  var tempSoc = soc < 20 || soc > 80 ? false : true;
   if(!tempSoc){
  	messageBuilder('State of Charge');
  }
  return tempSoc;
}

function checkChargeRate(chargeRate){
  var tempCharge = chargeRate > 0.8 ? false : true;
   if(!tempCharge){
  	messageBuilder('Charge rate');
  }
  return tempCharge;
}

function messageBuilder(customMsg){
  console.log( customMsg + "is out of range!");
}

// expect(batteryIsOk(55, 90, 0.9)).to.be.true;
expect(batteryIsOk(50, 85, 0)).to.be.false;

expect(checkTemp(24)).to.be.true;
expect(checkSOC(69)).to.be.true;
expect(checkChargeRate(0.8)).to.be.true;

expect(checkTemp(49)).to.be.false;
expect(checkSOC(86)).to.be.false;
expect(checkChargeRate(1)).to.be.false;

