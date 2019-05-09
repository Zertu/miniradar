'use strict';
module.exports = data => {
  const buf = Buffer.from(data);
  const tempresult = buf.toString('utf8', 4);
  const sorted = JSON.parse(tempresult).dojo_list.filter(val =>
    (val.winner_name ? val : null)
  );
  return sorted;
};
