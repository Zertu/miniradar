'use strict';
const emojiRegex = require('emoji-regex');
const regex = emojiRegex();
module.exports = data => {
  const buf = Buffer.from(data);
  const tempresult = buf.toString('utf8', 4);
  const json = JSON.parse(
    tempresult.replace(regex.toString(), '')
  );
  if (!json.dojo_list) {
    return [];
  }
  const sorted = json.dojo_list.filter(val => (val.winner_name ? val : null));
  return sorted;
};
