/* @flow */

import { parseString } from 'xml2js';

const options = { explicitArray: false }; 

/**
 * @param {String} xml XML string
 * @returns {Object} corresponding JS object
 */
export default function xmlToJson(xml: string): ?Object {
  // Create the return object
  let obj = null;

  parseString(xml, options, (err, result) => {
    if (!err) obj = result;
  });

  return obj;
}
