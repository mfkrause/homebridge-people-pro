const {
  PeopleProPlatform,
  PeopleProAccessory,
  PeopleProAllAccessory,
} = require('./src');

/* Register platform and accessories, set global variables */
module.exports = (homebridge) => {
  global.Service = homebridge.hap.Service;
  global.Characteristic = homebridge.hap.Characteristic;
  // eslint-disable-next-line global-require
  global.FakeGatoHistoryService = require('fakegato-history')(homebridge);

  PeopleProPlatform.setHomebridge(homebridge);

  homebridge.registerPlatform('homebridge-people-pro', 'PeoplePro', PeopleProPlatform);
  homebridge.registerAccessory('homebridge-people-pro', 'PeopleProAccessory', PeopleProAccessory);
  homebridge.registerAccessory('homebridge-people-pro', 'PeopleProAllAccessory', PeopleProAllAccessory);
};
