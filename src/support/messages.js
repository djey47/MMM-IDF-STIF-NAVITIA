const _get = require('lodash/get');

/**
 * Keys for translated messages. To be shared between client and server sides.
 */
const MessageKeys = {
  AGO: '{ago}',
  LOADING: '{loading}',
  NEXT_UPDATE: '{nextUpdate}',
  REQ_UPDATE: '{requestedUpdate}',
  NOT_YET: '{notYet}',
  STATUS_APPROACHING: '{status.approaching}',
  UNITS_MINUTES: '{units.minutes}',
  UNITS_SECONDS: '{units.seconds}',
  VELIB_BIKES: '{velib.bikes}',
  VELIB_SPACES: '{velib.spaces}',
};

/**
 * @param {*} key 
 * @param {*} messages 
 * @returns Translated message if corresponding key was found in messages section.
 */
const translate = function(key, messages) {
  if (!key || !messages || !/^{.*}/.test(key)) return key;
  return _get(messages, key.slice(1, -1), key);
};

module.exports = {
  MessageKeys,
  translate,
};
