const crypto = require('crypto')

const hashPassword = (password, secret) => {
  const hash = crypto.createHmac('sha256', secret)
              .update(password)
              .digest('hex')
  return hash
}
module.exports = hashPassword