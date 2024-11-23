const crypto = require('crypto');

const calculateHash = (data) => {
  const stringData = JSON.stringify(data);
  return crypto.createHash('sha256').update(stringData).digest('hex');
};

module.exports = { calculateHash };
